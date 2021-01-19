import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;800;900&display=swap');

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

        /* purgecss start ignore */
        /* Markdown Styles */
        /* Global */
        .markdown {
          @apply leading-relaxed text-sm;
        }

        @screen sm {
          .markdown {
            @apply text-base;
          }
        }

        @screen lg {
          .markdown {
            @apply text-lg;
          }
        }

        /* Headers */
        .markdown h1,
        .markdown h2 {
          @apply text-xl my-6 font-semibold;
        }
        .markdown h3,
        .markdown h4,
        .markdown h5,
        .markdown h6 {
          @apply text-lg my-3 font-semibold;
        }

        @screen sm {
          .markdown h1,
          .markdown h2 {
            @apply text-2xl;
          }
          .markdown h3,
          .markdown h4,
          .markdown h5,
          .markdown h6 {
            @apply text-xl;
          }
        }

        /* Links */
        .markdown a {
          @apply text-blue-600;
        }
        .markdown a:hover {
          @apply underline;
        }
        /* Paragraph */
        .markdown p {
          @apply mb-4;
        }
        /* Lists */
        .markdown ul,
        .markdown ol {
          @apply mb-4 ml-8;
        }
        .markdown li > p,
        .markdown li > ul,
        .markdown li > ol {
          @apply mb-0;
        }
        .markdown ol {
          @apply list-decimal;
        }
        .markdown ul {
          @apply list-disc;
        }
        /* Blockquotes */
        .markdown blockquote {
          @apply p-2 mx-6 bg-gray-100 mb-4 border-l-4 border-gray-400 italic;
        }
        .markdown blockquote > p {
          @apply mb-0;
        }
        /* Tables */
        .markdown td,
        .markdown th {
          @apply px-2 py-1 border border-gray-400;
        }
        .markdown tr:nth-child(odd) {
          @apply bg-gray-100;
        }
        .markdown table {
          @apply mb-6;
        }

        .markdown :not(pre) > code.language-text {
          white-space: pre-line;
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
