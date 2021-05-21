// const rehypePrism = require('@mapbox/rehype-prism')

const withMDX = require("@next/mdx")({
    extension: /\.(md|mdx)$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: []
    }
})

module.exports = withMDX({
    future: {
        webpack5: true,
    },
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"]
})