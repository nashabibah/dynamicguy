import Link from 'next/link'
import Layout from '@components/Layout'
import Brand from "@components/Brand"

export default function CaseList({ title, description }) {
    return (
        <>
            <Layout
                pageTitle={`${title} | Success Cases`}
                description={description}
            >

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
                                <a href="#" className="block bg-black">
                                    <img src="/images/palo_thumbnail.jpg" className="w-full h-64 object-fill" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <Brand />
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const configData = await import(`../../siteconfig.json`)

    return {
        props: {
            title: configData.default.title,
            description: configData.default.description,
        },
    }
}