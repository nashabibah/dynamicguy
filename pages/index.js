import Link from "next/link"
import Layout from "@components/Layout"
import Brand from "@components/Brand"


const Index = ({ posts, title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <section className="md:container md:mx-auto">
          <div className="bg-white py-12 lg:py-24 px-6 lg:px-24">
            <h2 className="text-center uppercase text-2xl lg:text-4xl tracking-wider mb-24">KYC OCR Extractor</h2>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2">
                <h3 className="font-medium text-3xl tracking-wide mb-6">Features</h3>
                <ul className="list-disc">
                  <li className="ml-5">Improve customer onboarding experiences</li>
                  <li className="ml-5">Reduce manual verification costs</li>
                  <li className="ml-5">Precise image to text conversion</li>
                  <li className="ml-5">Supports low resolution images</li>
                  <li className="ml-5">Supports for tilt images</li>
                  <li className="ml-5">Supports GIF, BMP, JPEG, TIFF or PNG as input</li>
                </ul>
                <Link href="https://kyc.dynamicguy.com/">
                  <a className="inline-flex items-center text-white bg-red-600 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded text-base mt-10">TRY KYC OCR API
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
              <div className="w-full md:w-1/2 p-2 mb-12">
                <img src="/images/id.gif" className="w-full h-56 object-cover" />
              </div>
            </div>

            <h2 className="text-center uppercase text-2xl lg:text-4xl tracking-wider my-10 sm:my-20">Use Cases</h2>
            <div className="flex flex-wrap">
              <div className="w-1/3 sm:w-1/6 p-2 mb-12 animation duration-200 ease-in-out hover:bg-green-100">
                <img src="/images/use-cases/id-card.svg" className="mb-8 p-5" />
                <p className="text-base text-center uppercase tracking-wider text-gray-700">ID/LICENSE Card</p>
              </div>
              <div className="w-1/3 sm:w-1/6 p-2 mb-12 animation duration-200 ease-in-out hover:bg-green-100">
                <img src="/images/use-cases/passport.svg" className="mb-9 p-5" />
                <p className="text-base text-center uppercase tracking-wider text-gray-700">Passport</p>
              </div>
              <div className="w-1/3 sm:w-1/6 p-2 mb-12 animation duration-200 ease-in-out hover:bg-green-100">
                <img src="/images/use-cases/invoice.svg" className="mb-9 p-5" />
                <p className="text-base text-center uppercase tracking-wider text-gray-700">Invoice</p>
              </div>
              <div className="w-1/3 sm:w-1/6 p-2 mb-12 animation duration-200 ease-in-out hover:bg-green-100">
                <img src="/images/use-cases/tax-form.svg" className="mb-7 p-5" />
                <p className="text-base text-center uppercase tracking-wider text-gray-700">Tax Form</p>
              </div>
              <div className="w-1/3 sm:w-1/6 p-2 mb-12 animation duration-200 ease-in-out hover:bg-green-100">
                <img src="/images/use-cases/income.svg" className="mb-9 p-5" />
                <p className="text-base text-center uppercase tracking-wider text-gray-700">Income Proof</p>
              </div>
              <div className="w-1/3 sm:w-1/6 p-2 mb-12 animation duration-200 ease-in-out hover:bg-green-100">
                <img src="/images/use-cases/more.svg" className="mb-8 p-5" />
                <p className="text-base text-center uppercase tracking-wider text-gray-700">Custom Document</p>
              </div>
            </div>
            {/* <div className="pt-5">
              <Link href="">
                <a className="block text-center text-red-600 hover:text-green-600 border-0 py-1 px-3 rounded text-3xl mt-4 md:mt-0 group">View all products
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 ml-1 inline-block transform duration-200 ease-in-out group-hover:translate-x-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </Link>
            </div> */}
          </div>
        </section>

        <section>
          <div className="mt-20 mb-10">
            <h2 className="font-bold text-center uppercase text-2xl lg:text-4xl tracking-wider mb-10">Success Cases</h2>
            <p className="text-gray-700 mx-auto max-w-2xl text-center leading-relaxed mb-5">We helped 100+ companies to progress with tech solutions.</p>
          </div>
          <div className="md:container md:mx-auto transition duration-200 bg-white hover:bg-green-100 py-6 px-6 mb-6 group">
            <div className="flex flex-wrap">
              <div className="w-full md:w-2/3 p-2">
                <h3 className="block text-xl font-black tracking-wider">The Daily Star</h3>
                <p className="text-gray-900 text-3xl my-4 mr-5">Rewrite of the website for most enjoyable user experience and scaling for millions of users</p>
                <span className="block text-sm text-left uppercase tracking-normal text-gray-400 mt-6">Development</span>
                <span className="block text-sm text-left uppercase tracking-normal text-gray-400">Scaling</span>
                <Link href="/cases/the-daily-star">
                  <a className="inline-block text-red-600 hover:text-green-600 text-base mt-6 tracking-wider">View case
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1 inline-block transform duration-200 ease-in-out group-hover:translate-x-1" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
              <div className="w-full md:w-1/3 p-2">
                <img src="/images/dailystar_thumbnail.jpg" className="w-full h-64 object-fill" />
              </div>
            </div>
          </div>
          <div className="md:container md:mx-auto transition duration-200 bg-white hover:bg-green-100 py-6 px-6 mb-6 group">
            <div className="flex flex-wrap">
              <div className="w-full md:w-2/3 p-2">
                <h3 className="block text-xl font-black tracking-wider">Prothom Alo</h3>
                <p className="text-gray-500 text-3xl my-4 mr-5">Integration backend with react frontend</p>
                <span className="block text-sm text-left uppercase tracking-normal text-gray-400 mt-6">Integration</span>
                <Link href="/cases/prothom-alo">
                  <a className="inline-block text-red-600 hover:text-green-600 text-base mt-6 tracking-wider">View case
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1 inline-block transform duration-200 ease-in-out group-hover:translate-x-1" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
              <div className="w-full md:w-1/3 p-2">
                <img src="/images/palo_thumbnail.jpg" className="w-full h-64 object-fill" />
              </div>
            </div>
          </div>
          <div className="container mx-auto">
            <Link href="/cases">
              <a className="inline-block text-red-600 hover:text-green-600 border-0 ml-4 rounded text-3xl group">View all cases
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 ml-1 inline-block transform duration-200 ease-in-out group-hover:translate-x-1" viewBox="0 0 24 24">
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
        <section className="">
          <div className="flex flex-row">
            <div className="flex w-1/2 group">
              <div className="flex items-center justify-center w-full py-10 bg-red-600 group-hover:bg-opacity-90">
                <div className="max-w-sm py-16 px-8">
                  <h2 className="text-4xl font-bold text-center tracking-wider text-white mb-5">KYC OCR Extractor</h2>
                  <Link href="https://kyc.dynamicguy.com/">
                    <a className="text-center block text-black bg-white border-0 py-2 px-4 focus:outline-none rounded text-base mt-10">TRY FOR FREE
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 ml-2 inline-block" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex w-1/2 group">
              <div className="flex items-center justify-center w-full py-10 bg-red-600 group-hover:bg-opacity-90">
                <div className="max-w-sm py-16 px-8">
                  <h2 className="text-4xl font-bold text-center tracking-wider text-white mb-5">COVID-19 AI Assistant</h2>
                  <Link href="https://corona.dynamicguy.com/">
                    <a className="text-center block text-black bg-white border-0 py-2 px-4 focus:outline-none rounded text-base mt-10">TRY FOR FREE
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 ml-2 inline-block" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
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
