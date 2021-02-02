import Layout from '@components/Layout'
import PostList from '@components/PostList'
import getPosts from '@utils/getPosts'


const Blog = ({ posts, title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <PostList posts={posts} />
      </Layout>
    </>
  )
}

export default Blog

export async function getStaticProps() {

  const posts = ((context) => {
    return getPosts(context)
  })(require.context('../../posts', true, /\.md$/))

  return {
    props: {
      posts
    },
  }
}