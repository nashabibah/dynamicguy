import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import 'tailwindcss/tailwind.css'

export default function Layout({ children, pageTitle, description }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      <section className="layout">
        <Header />
        <div className="px-8 py-5 flex flex-col justify-center items-center bg-green-50">
          {children}
        </div>
        <Footer />
      </section>
    </>
  )
}