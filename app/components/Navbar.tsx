const Navbar = () => {
  return(
    <header className="z-10 w-full items-center justify-between text-sm lg:flex">
      <div className="flex gap-x-10">
        <h1 className="">IWA COUNTING TRACE</h1>
        <p>account:Taro Yamada</p>
      </div>
      <div
        className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-2 lg:pointer-events-auto rounded-md bg-[#2380C8]"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          LOGOUT
        </a>
      </div>
    </header>
  )
}

export default Navbar;