import MDXProvider from '@components/MdxProvider'

function MyApp({ Component, pageProps }) {
    return (
        <MDXProvider>
            <Component {...pageProps} />
        </MDXProvider>
    )
}

export default MyApp