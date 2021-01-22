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
