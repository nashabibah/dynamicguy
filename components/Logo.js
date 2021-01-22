import Link from 'next/link'
import Image from 'next/image'

function Logo() {
    return (
        <>
        <Link href="/">
            <a className="flex items-center md:justify-start justify-center">
                <Image
                    src="/images/logo.svg"
                    layout="fixed"
                    width={220}
                    height={65}
                    alt="dynamicguy logo"
                    loading="eager"
                />
            </a>
        </Link>
        </>
    )
}

export default Logo