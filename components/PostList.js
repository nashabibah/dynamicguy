import Link from 'next/link'

export default function PostList({ posts }) {
  if (posts === 'undefined') return null

  return (
    <div className="container m-auto px-5 mt-16 sm:px-12 md:px-20 max-w-screen-xl">
      <div className="text-5xl">
        All Posts
      </div>
      {!posts && <div>No posts!</div>}
      <ul className="mt-3">
        {posts &&
          posts.map((post) => {
            return (
              <li className="py-3" key={post.slug}>
                <div className="-mx-5 -my-3 px-5 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-end group">
                  <Link href={{ pathname: `/post/${post.slug}` }}>
                    <a className="text-xl group-hover:text-green-500">{post?.frontmatter?.title}</a>
                  </Link>
                  <div className="mt-2 text-xl group-hover:text-green-500">{post.frontmatter.date} {` `}</div>
                </div>
              </li>
            )
          })}
      </ul>
    </div>
  )
}
