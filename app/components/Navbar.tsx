import Image from 'next/image';

const Navbar = () => {
    return (
        <header className="z-10 w-full items-center justify-center text-sm lg:flex relative">
            <div className="flex gap-x-10 items-center">
                <Image src="/logo.png"
                       alt="IWA COUNTING TRACE"
                       width={200}
                       height={50}
                />
            </div>
            <div
                className="absolute right-0 flex gap-2 h-48 w-full items-center justify-center bg-gradient-to-t from-white via-white lg:size-auto lg:bg-none">
                <a
                    className="pointer-events-none flex place-items-center gap-2 p-2 lg:pointer-events-auto rounded-md bg-[#2380C8] font-bold"
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