import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-500 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-4 sm:mb-0">
          <span className="text-lg sm:text-xl font-semibold flex items-center gap-1">
            <span className="bg-white text-black px-2">RESTful</span>
            <span className="text-white">.API</span>
          </span>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <div>© 2025 ‒ {new Date().getFullYear()} <a href="https://galaxd.com" className="text-black dark:text-white">GXD Dev</a>. All rights reserved.</div>
        </div>

        <div className="flex gap-4 sm:gap-6 text-gray-400 text-sm sm:text-base">
          <Link href="/status" className="hover:text-white transition-colors">
            Status
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}