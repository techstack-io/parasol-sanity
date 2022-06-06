import Link from "next/link"
import Image from "next/image"

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5 p-4">
        <Link href="/">
        <Image
            className="w-44 object-contain cursor-pointer"
            src="/images/Perasol.svg"
            alt="Parasol Logo"
            width={100}
            height={75}
        />
          </Link>
          <div className="hidden md:inline-flex items-center space-x-5">
              <h3>About</h3>
              <h3>Contact</h3>
              <h3 className="text-white bg-purple-900 px-4 py-1 rounded-full">Follow</h3>
          </div>
      </div>
      <div className="flex items-center space-x-5 ext-purple-900">
          <h3>Sign In</h3>
          <h3 className="border border-purple px-4 py-1 rounded-full">Get Started</h3>
      </div>
    </header>
  )
}

export default Header
