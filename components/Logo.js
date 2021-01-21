import Link from 'next/link'
import Image from 'next/image'

function Logo() {
    return (
        <>
        <Link href="/">
            <a className="flex items-center md:justify-start justify-center">
                <Image src="/images/logo.svg" alt="dynamicguy logo" width="220" height="64" />
            </a>
        </Link>
        </>
    )
}

export default Logo