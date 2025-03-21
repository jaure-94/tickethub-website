'use server'

import { CreateUserParams, UpdateUserParams } from '@/types'
import { handleError } from '@/lib/utils'
import { connectToDatabase } from '@/lib/mongodb/database'
import User from '@/lib/mongodb/database/models/user.model'
import Event from '@/lib/mongodb/database/models/event.model'
import Order from '@/lib/mongodb/database/models/order.model'
import { revalidatePath } from 'next/cache'

// === set up CRUD actions with mongodb === //

export const createUser = async (user: CreateUserParams) => {
  try {
    await connectToDatabase()

    const newUser = await User.create(user)

    return JSON.parse(JSON.stringify(newUser))
  } catch (error) {
    handleError(error)
  }
}

export const getUserById = async (userId: string) => {
  try {
    await connectToDatabase()

    const user = await User.findById(userId)

    if (!user) throw new Error('User not found')
    return JSON.parse(JSON.stringify(user))
  } catch (error) {
    handleError(error)
  }
}

export const updateUser = async (clerkId: string, user: UpdateUserParams) => {
  try {
    await connectToDatabase()

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, { new: true })

    if (!updateUser) throw new Error('User update failed.')
    return JSON.parse(JSON.stringify(updatedUser))
  } catch (error) {
    handleError(error)
  }
}

export const deleteUser = async (clerkId: string) => {
  try {
    await connectToDatabase()

    // Find user to delete
    const userToDelete = await User.findOne({ clerkId })

    if (!userToDelete) {
      throw new Error('User not found')
    }

    // Unlink relationships
    await Promise.all([
      // Update the 'events' collection to remove references to the user
      Event.updateMany(
        { _id: { $in: userToDelete.events } },
        { $pull: { organizer: userToDelete._id } }
      ),

      // Update the 'orders' collection to remove references to the user
      Order.updateMany({ _id: { $in: userToDelete.order } }, { $unset: { buyer: 1 } })
    ])

    // Delete user
    const deletedUser = await User.findByIdAndDelete(userToDelete._id)
    revalidatePath('/')

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null
  } catch (error) {
    handleError(error)
  }
}