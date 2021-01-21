import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import "tailwindcss/tailwind.css"

export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      <style jsx global>{`
        // @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;800;900&display=swap');

        html,
        body {
          margin: 0;
          padding: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
            Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
            sans-serif;
          color: #445566;
        }

        .content {
          padding: 2rem 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
      <section className="layout">
        <Header />
        <div className="content">{children}</div>
      </section>
      <Footer />
    </>
  )
}
