import Link from 'next/link'
import Logo from './Logo'

export default function Header() {
  return (
    <>
      <header className="bg-green-50 sticky top-0 z-50">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Logo />
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/">
              <a className="mr-5 hover:text-gray-900">Home</a>
            </Link>
            <Link href="/about">
              <a className="mr-5 hover:text-gray-900">About</a>
            </Link>
            <Link href="/cases">
              <a className="mr-5 hover:text-gray-900">Cases</a>
            </Link>
            <Link href="/blog">
              <a className="mr-5 hover:text-gray-900">Blog</a>
            </Link>
          </nav>
          <Link href="/contact">
            <a className="inline-flex items-center text-white bg-red-600 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base font-bold mt-4 md:mt-0">Let's Talk
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </Link>
        </div>
      </header>
    </>
  )
}
