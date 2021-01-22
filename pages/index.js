import Layout from '@components/Layout'
import Hero from "@components/Hero"
import Brand from "@components/Brand"
import PostList from '@components/PostList'
import getPosts from '@utils/getPosts'


const Index = ({ posts, title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <Hero />
        <main>
          <PostList posts={posts} />
        </main>
        <Brand />

        <div className="container">
          <ul className="flex flex-col flex-wrap items-center md:flex-row">
              <li className="w-40 px-4 py-2 m-5">
                  <a href="#" target="_blank">
                    <img className="" src="images/jti_logo.svg" alt="Japan Tobacco International" />
                  </a>
              </li>
              <li className="w-40 px-4 py-2 m-5">
                  <a href="#" target="_blank">
                    <img className="" src="images/dghs_logo.jpg" alt="Directorate General of Health Services" />
                  </a>
              </li>
              <li className="w-40 px-4 py-2 m-5">
                  <a href="#" target="_blank">
                    <img className="" src="images/dailystar_logo.svg" alt="The Daily Star" />
                  </a>
              </li>
              <li className="w-40 px-4 py-2 m-5">
                  <a href="#" target="_blank">
                    <img className="" src="images/palo_logo.svg" alt="Prothom Alo" />
                  </a>
              </li>
              <li className="w-40 px-4 py-2 m-5">
                  <a href="#" target="_blank">
                    <img className="" src="images/ucbl_logo.png" alt="United Commercial Bank Ltd" />
                  </a>
              </li>
              <li className="w-40 px-4 py-2 m-5">
                  <a href="#" target="_blank">
                    <img className="" src="images/banglalink_logo.svg" alt="Banglalink" />
                  </a>
              </li>
          </ul>
      </div>

      </Layout>
    </>
  )
}

export default Index

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  const posts = ((context) => {
    return getPosts(context)
  })(require.context('../posts', true, /\.md$/))

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
