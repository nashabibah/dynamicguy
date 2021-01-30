import Layout from '@components/Layout'
import Hero from "@components/Hero"
import Brand from "@components/Brand"
import getPosts from '@utils/getPosts'


const Index = ({ posts, title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <Hero />

        <section>
          <div className="bg-white py-12 lg:py-24 px-6 lg:px-24">
            <div class="py-5">
              <h2 class="text-center uppercase text-2xl lg:text-4xl tracking-wider mb-12">Case Studies</h2>
              <p class="text-gray-700 mx-auto max-w-2xl text-center leading-relaxed mb-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.</p>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/3 p-2 mb-12">
                <a href="#" class="block mb-8 bg-black hover:opacity-75">
                  <img src="https://images.unsplash.com/photo-1457296898342-cdd24585d095?w=800" class="w-full h-64 object-cover" />
                </a>
                <a href="#" class="block text-base text-left uppercase tracking-wider text-gray-700">Homegrown Fruits</a>
              </div>
              <div className="w-full md:w-1/3 p-2 mb-12">
                <a href="#" class="block mb-8 bg-black hover:opacity-75">
                  <img src="https://images.unsplash.com/photo-1457296898342-cdd24585d095?w=800" class="w-full h-64 object-cover" />
                </a>
                <a href="#" class="block text-base text-left uppercase tracking-wider text-gray-700">Homegrown Fruits</a>
              </div>
              <div className="w-full md:w-1/3 p-2 mb-12">
                <a href="#" class="block mb-8 bg-black hover:opacity-75">
                  <img src="https://images.unsplash.com/photo-1457296898342-cdd24585d095?w=800" class="w-full h-64 object-cover" />
                </a>
                <a href="#" class="block text-base text-left uppercase tracking-wider text-gray-700">Homegrown Fruits</a>
              </div>
            </div>
          </div>
        </section>

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
