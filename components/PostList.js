import Link from 'next/link'

export default function PostList({ posts }) {
  if (posts === 'undefined') return null

  return (
    <div className="container m-auto py-20 px-5 sm:px-12 md:px-32">
      <h2 className="font-bold text-center uppercase text-2xl lg:text-4xl tracking-wider mb-10">All Posts</h2>
      {!posts && <div>No posts!</div>}
      <ul className="mt-3">
        {posts &&
          posts.map((post) => {
            return (
              <li className="py-3" key={post.slug}>
                <div className="-mx-5 -my-3 px-5 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-end group">
                  <Link href={{ pathname: `/blog/${post.slug}` }}>
                    <a className="text-xl group-hover:text-red-700">{post?.frontmatter?.title}</a>
                  </Link>
                  <div className="mt-2 text-xl group-hover:text-red-700">{post.frontmatter.date} {` `}</div>
                </div>
              </li>
            )
          })}
      </ul>
    </div>
  )
}
