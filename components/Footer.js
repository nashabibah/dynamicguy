import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <>
      <footer className="bg-green-300">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div>
            <div className="w-80 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:-mt-5 mt-10 bg-green-50 p-8">
              <Logo />
              <p className="mt-2 text-sm text-gray-700">We build innovative tech products and critical tech support to startups, enterprises, and organizations to solve their business challenges.</p>
            </div>
          </div>
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="font-bold text-gray-800 tracking-widest text-sm mb-3">
                PRODUCTS
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="https://kyc.dynamicguy.com/">
                    <a className="text-gray-800 cursor-pointer animation duration-600 ease-in-out hover:text-red-600">KYC OCR Extractor</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://corona.dynamicguy.com/">
                    <a className="text-gray-800 cursor-pointer animation duration-600 ease-in-out hover:text-red-600">COVID-19 AI Assistant</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://pisleep.com/">
                    <a className="text-gray-800 cursor-pointer animation duration-600 ease-in-out hover:text-red-600">Pisleep</a>
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="font-bold text-gray-800 tracking-widest text-sm mb-3">
                SERVICES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-800 cursor-pointer animation duration-600 ease-in-out hover:text-red-600">Software Design</a>
                </li>
                <li>
                  <a className="text-gray-800 cursor-pointer animation duration-600 ease-in-out hover:text-red-600">Development</a>
                </li>
                <li>
                  <a className="text-gray-800 cursor-pointer animation duration-600 ease-in-out hover:text-red-600">Scaling</a>
                </li>
                <li>
                  <a className="text-gray-800 cursor-pointer animation duration-600 ease-in-out hover:text-red-600">Integration</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="font-bold text-gray-800 tracking-widest text-sm mb-3">
                CASE STUDIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-800 cursor-pointer animation duration-600 ease-in-out hover:text-red-600">Banglalink</a>
                </li>
                <li>
                  <a className="text-gray-800 cursor-pointer animation duration-600 ease-in-out hover:text-red-600">The Daily Star</a>
                </li>
                <li>
                  <a className="text-gray-800 cursor-pointer animation duration-600 ease-in-out hover:text-red-600">Prothom Alo</a>
                </li>
                <li>
                  <a className="text-gray-800 cursor-pointer animation duration-600 ease-in-out hover:text-red-600">Japan Tobacoo Industries</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="font-bold text-gray-800 tracking-widest text-sm mb-3">
                API
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="https://kyc.dynamicguy.com/docs/">
                    <a className="text-gray-800 cursor-pointer animation duration-600 ease-in-out hover:text-red-600">KYC OCR Extractor API Documentation</a>
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-green-50">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">&copy; 2021 <a href="https://dynamicguy.com/" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">Dynamic Guy</a></p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}
