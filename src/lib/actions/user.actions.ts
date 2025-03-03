'use server'

import { CreateUserParams, UpdateUserParams } from "@/types"
import { handleError } from "@/lib/utils"
import { connectToDatabase } from "@/lib/mongodb/database"
import User from "../mongodb/database/models/user.model"

export const createUser = async (user: CreateUserParams) => {
  try {
    await connectToDatabase()

    const newUser = await User.create(user)

    return JSON.parse(JSON.stringify(newUser))
  } catch (error) {
    handleError
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