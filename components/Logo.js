import Link from 'next/link'
// import Image from 'next/image'

export default function Logo() {
    return (
        <>
        <Link href="/">
            <a className="flex items-center md:justify-start justify-center">
                <img src="/images/logo.svg" alt="dynamicguy logo" width="220" height="65"/>
            </a>
        </Link>
        {/* <Link href="/">
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
        </Link> */}
        </>
    )
}