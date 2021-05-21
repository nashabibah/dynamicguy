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
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Rufina:wght@400;700&display=swap');
        </style>
      </Head>
      <Header />
      <div className="bg-green-50">
        {children}
      </div>
      <Footer />
    </>
  )
}