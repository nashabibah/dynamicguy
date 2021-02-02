import Link from 'next/link'
import Layout from '@components/Layout'
import Hero from "@components/Hero"
import Brand from "@components/Brand"


const Index = ({ posts, title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <Hero />

        <section className="py-20">
          <div className="bg-white py-12 lg:py-24 px-6 lg:px-24">
            <div className="py-5">
              <h2 className="text-center uppercase text-2xl lg:text-4xl tracking-wider mb-12">KYC OCR Extractor</h2>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 p-2 mb-12">
                <h3 className="font-medium text-3xl tracking-wide mb-6">Features</h3>
                <ul className="list-disc">
                  <li className="ml-5">Improve customer onboarding experiences</li>
                  <li className="ml-5">Reduce manual verification costs</li>
                  <li className="ml-5">Precise image to text conversion</li>
                  <li className="ml-5">Keeps the layout and formatting</li>
                  <li className="ml-5">Automatically rotate images</li>
                  <li className="ml-5">Supports low resolution images</li>
                  <li className="ml-5">Supports GIF, BMP, JPEG, TIFF or PNG as input</li>
                </ul>
                <Link href="https://kyc.dynamicguy.com/">
                  <a className="inline-flex items-center text-white bg-red-600 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded text-base mt-10">KYC OCR API
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
              <div className="w-full md:w-1/2 p-2 mb-12">
                <img src="images/id.gif" className="w-full h-56 object-cover" />
              </div>
            </div>

            <div className="py-5">
              <h2 className="text-center uppercase text-2xl lg:text-4xl tracking-wider mb-12">Use Cases</h2>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/3 p-2 mb-12">
                <a href="#" className="block mb-8 bg-black">
                  <img src="images/nid-smart-card.jpg" className="w-full h-56 object-cover" />
                </a>
                <a href="#" className="block text-base text-left uppercase tracking-wider text-gray-700">National ID Card</a>
              </div>
              <div className="w-full md:w-1/3 p-2 mb-12">
                <a href="#" className="block mb-8 bg-black">
                  <img src="images/passport.jpg" className="w-full h-56 object-cover" />
                </a>
                <a href="#" className="block text-base text-left uppercase tracking-wider text-gray-700">Passport</a>
              </div>
              <div className="w-full md:w-1/3 p-2 mb-12">
                <a href="#" className="block mb-8 bg-black">
                  <img src="images/driving-license.jpg" className="w-full h-56 object-cover" />
                </a>
                <a href="#" className="block text-base text-left uppercase tracking-wider text-gray-700">Driving License</a>
              </div>
            </div>
            <div className="pt-5">
              <Link href="">
                <a className="text-center block text-red-600 hover:text-green-600 border-0 py-1 px-3 rounded text-3xl mt-4 md:mt-0">View all products
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 ml-2 inline-block" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="py-5">
            <h2 className="font-bold text-center uppercase text-2xl lg:text-4xl tracking-wider mb-10">Success Cases</h2>
            <p className="text-gray-700 mx-auto max-w-2xl text-center leading-relaxed mb-5">We helped 100+ companies to progress with tech solutions.</p>
          </div>
          <div className="bg-white py-6 px-6 mb-6">
            <div className="flex flex-wrap">
              <div className="w-full md:w-2/3 p-2">
                <h3 className="block text-xl font-black tracking-wider">The Daily Star</h3>
                <span className="block text-base text-left uppercase tracking-normal text-gray-400 mt-4">Development</span>
                <span className="block text-base text-left uppercase tracking-normal text-gray-400">Scaling</span>
                <p className="text-gray-500 text-3xl my-6">Rewrite of the backend and frontend</p>
                <Link href="">
                  <a className="inline-block text-red-600 hover:text-green-600 text-base mt-6 tracking-wider">View case
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1 inline-block" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
              <div className="w-full md:w-1/3 p-2">
                <a href="#" className="block bg-black">
                  <img src="images/dailystar_thumbnail.jpg" className="w-full h-64 object-fill" />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white py-6 px-6 mb-6">
            <div className="flex flex-wrap">
              <div className="w-full md:w-2/3 p-2">
                <h3 className="block text-xl font-black tracking-wider">Prothom Alo</h3>
                <span className="block text-base text-left uppercase tracking-normal text-gray-400 my-4">Integration</span>
                <p className="text-gray-500 text-3xl my-6">Integration backend with react frontend</p>
                <Link href="">
                  <a className="inline-block text-red-600 hover:text-green-600 text-base mt-6 tracking-wider">View case
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1 inline-block" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
              <div className="w-full md:w-1/3 p-2">
                <a href="#" className="block bg-black">
                  <img src="images/palo_thumbnail.jpg" className="w-full h-64 object-fill" />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-5">
            <Link href="">
              <a className="block text-red-600 hover:text-green-600 border-0 ml-4 rounded text-3xl">View all cases
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 ml-2 inline-block" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </Link>
          </div>
        </section>

        {/* <section className="py-20">
          <div className="bg-white py-12 lg:py-24 px-6 lg:px-24">
            <div className="py-5">
              <h2 className="text-center uppercase text-2xl lg:text-4xl tracking-wider mb-12">Success Cases</h2>
              <p className="text-gray-700 mx-auto max-w-2xl text-center leading-relaxed mb-5">We have helped 100+ companies to progress with tech solutions. </p>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/3 p-2 mb-12">
                <a href="#" className="block mb-8 bg-black">
                  <img src="https://images.unsplash.com/photo-1457296898342-cdd24585d095?w=800" className="w-full h-64 object-cover" />
                </a>
                <a href="#" className="block text-base text-left uppercase tracking-wider text-gray-700">Banglalink</a>
              </div>
              <div className="w-full md:w-1/3 p-2 mb-12">
                <a href="#" className="block mb-8 bg-black">
                  <img src="https://images.unsplash.com/photo-1457296898342-cdd24585d095?w=800" className="w-full h-64 object-cover" />
                </a>
                <a href="#" className="block text-base text-left uppercase tracking-wider text-gray-700">Japan Tobacoo Industries</a>
              </div>
              <div className="w-full md:w-1/3 p-2 mb-12">
                <a href="#" className="block mb-8 bg-black">
                  <img src="https://images.unsplash.com/photo-1457296898342-cdd24585d095?w=800" className="w-full h-64 object-cover" />
                </a>
                <a href="#" className="block text-base text-left uppercase tracking-wider text-gray-700">The Daily Star</a>
              </div>
            </div>
            <div className="pt-5">
              <Link href="/cases">
                <a className="text-center block text-red-600 hover:text-green-600 border-0 py-1 px-3 rounded text-3xl mt-4 md:mt-0">View all cases
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 ml-2 inline-block" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                </Link>
            </div>
          </div>
        </section> */}
        <Brand />
      </Layout>
    </>
  )
}

export default Index

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
