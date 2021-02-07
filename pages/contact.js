import Layout from '@components/Layout'

const About = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <div className="px-8 py-5 flex flex-col justify-center items-center">
          <h1 className="max-w-md">We’d love to get in touch with you and hear your ideas and questions. We strive to grow and improve constantly and your feedback is valuable for us.</h1>

          <div className="w-full max-w-md py-10">
            <h2 className="text-2xl font-bold">Contact us to build the right product</h2>
            <div class="grid grid-cols-1 gap-6">
              <form action="">
                <label class="block mt-5">
                  <span class="text-gray-700">Name</span>
                  <input type="text" class="mt-1 block w-full rounded-md bg-green-300 border-transparent focus:border-green-300 focus:bg-white focus:ring-0" placeholder="John Doe" />
                </label>
                <label class="block mt-5">
                  <span class="text-gray-700">Email</span>
                  <input type="email" class="mt-1 block w-full rounded-md bg-green-300 border-transparent focus:border-green-300 focus:bg-white focus:ring-0" placeholder="john@example.com" />
                </label>
                <label class="block mt-5">
                  <span class="text-gray-700">What type of services is it?</span>
                  <select class="block w-full mt-1 rounded-md bg-green-300 border-transparent focus:border-green-300 focus:bg-white focus:ring-0">
                    <option>Software Design</option>
                    <option>Development</option>
                    <option>Scaling</option>
                    <option>Integration</option>
                    <option>Ecommerce</option>
                    <option>Other</option>
                  </select>
                </label>
                <label class="block mt-5">
                  <span class="text-gray-700">Message</span>
                  <textarea class="mt-1 block w-full rounded-md bg-green-300 border-transparent focus:border-green-300 focus:bg-white focus:ring-0" rows="3" spellcheck="false" data-gramm="false"></textarea>
                </label>
                <div className="mt-5 text-right">
                  <input class="w-full bg-red-600 hover:bg-green-600 text-white font-bold py-2 px-4 mb-6 rounded cursor-pointer" type="submit" />
                </div>
              </form>
            </div>
            </div>
          </div>
      </Layout>
    </>
  )
}

export default About

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
        props: {
        title: configData.default.title,
      description: configData.default.description,
    },
  }
}
