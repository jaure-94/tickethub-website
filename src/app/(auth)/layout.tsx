const Layout = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className="flex-center min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-fixed bg-center absolute -z-10 inset-0 h-full
                    bg-[radial-gradient(circle,#73737350_1px,transparent_1px)] 
                    bg-[size:10px_10px]">
      {children}
    </div>
  )
}

export default Layout