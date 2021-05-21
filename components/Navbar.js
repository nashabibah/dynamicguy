import React from 'react'
import Link from 'next/link'
import Logo from '@components/Logo'

const Navbar = () => {
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <Logo />
                        </a>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/">
                            <a className="mr-5 hover:text-gray-900">About Me</a>
                        </Link>
                        <Link href="/service">
                            <a className="mr-5 hover:text-gray-900">Services</a>
                        </Link>
                        <Link href="/portfolio">
                            <a className="mr-5 hover:text-gray-900">Portfolio</a>
                        </Link>
                        <Link href="/blog">
                            <a className="mr-5 hover:text-gray-900">Blog</a>
                        </Link>
                    </nav>
                    <Link href="/contact">
                        <button className="inline-flex items-center text-white bg-blue-600 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-base mt-4 md:mt-0">Get a Free Quote
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </Link>
                </div>
            </header>
        </>
    );
};

export default Navbar;