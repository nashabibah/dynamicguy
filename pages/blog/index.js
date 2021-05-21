import Link from 'next/link'
import Layout from '@components/Layout'
import { getSortedPosts } from "@utils/posts";

const BlogIndex = ({ title, description, allPostsData }) => {
    return (
        <>
            <Layout pageTitle={title} description={description}>
                <div className="container m-auto py-20 px-5 sm:px-12 md:px-32">
                    <h2 className="font-bold text-center uppercase text-2xl lg:text-4xl tracking-wider mb-10">All Posts</h2>
                    {!allPostsData && <div>No posts!</div>}
                    <ul className="mt-3">
                        {allPostsData.map(({ slug, date, title, excerpt }) => (
                            <li className="py-3" key={slug}>
                                <div className="-mx-5 -my-3 px-5 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-end group">
                                    <Link key={slug} href="/blog/[slug]" as={`/blog/${slug}`}>
                                        <a className="text-xl group-hover:text-red-700">{title}</a>
                                    </Link>
                                    <div className="mt-2 text-xl group-hover:text-red-700">{date} {` `}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </Layout>
        </>
    )
}

export default BlogIndex

export async function getStaticProps() {
    const allPostsData = getSortedPosts()
    return {
        props: {
            allPostsData,
        },
    }
}