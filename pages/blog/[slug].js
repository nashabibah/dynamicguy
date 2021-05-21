import Link from 'next/link'
import matter from 'gray-matter'
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { getAllPostSlugs, getPostdata } from '@utils/posts'
import MdxCpntList from '@components/MdxCpntList'
import Layout from '@components/Layout'

const components = MdxCpntList

export default function Posts({ source, frontMatter }) {
    return (
        <Layout pageTitle={frontMatter.title}>
            <div className="flex flex-col justify-center items-center py-5 md:py-20 px-5">
                <div className="back">
                    ←{' '}
                    <Link href="/blog">
                        <a>Back to post list</a>
                    </Link>
                </div>
                <div className="prose lg:prose-xl">
                    <h1>{frontMatter.title}</h1>
                    <MDXRemote {...source} components={components} lazy />
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostSlugs()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postContent = await getPostdata(params.slug)
    const { data, content } = matter(postContent)
    const mdxSource = await serialize(content, {
        components,
        scope: data
    })

    return {
        props: {
            source: mdxSource,
            frontMatter: data
        }
    }
}