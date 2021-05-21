import Layout from '@components/Layout'

export default function DailyStar({ title, description }) {
    return (
        <>
            <Layout
                pageTitle={`${title} | The Daily Star`}
                description={description}
            >
                <div className="container m-auto px-5 py-10 sm:px-12 md:px-20 max-w-screen-xl">
                    <div className="text-center">
                        <img className="w-64 mx-auto" src="/images/brands/thedailystar.svg" alt="The Daily Star" />
                        <h2 className="text-5xl font-light mt-5 max-w-4xl mx-auto">Rewrite of the backend and frontend for great user experience</h2>
                    </div>
                    <div className="flex flex-wrap my-20">
                        <div className="w-full md:w-1/3 flex flex-wrap justify-center md:justify-start">
                            <div className="text-sm text-left uppercase tracking-normal text-gray-400 mt-6">
                                <h3 className="text-gray-900 font-bold">Services</h3>
                                <ul>
                                    <li>Development</li>
                                    <li>Scaling</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full md:w-2/3 flex flex-wrap justify-center md:justify-end">
                            <div className="flex flex-col justify-center items-center mr-5">
                                <div className="w-10 h-10">
                                    <img src="/images/cases/react.svg" className="w-full h-full" />
                                </div>
                                <p className="mt-2 text-center">React</p>
                            </div>
                            <div className="flex flex-col justify-center items-center mr-5">
                                <div className="w-10 h-10">
                                    <img src="/images/cases/nodejs.svg" className="w-full h-full" />
                                </div>
                                <p className="mt-2 text-center">Node.js</p>
                            </div>
                            <div className="flex flex-col justify-center items-center mr-5">
                                <div className="w-10 h-10">
                                    <img src="/images/cases/mysql.svg" className="w-full h-full" />
                                </div>
                                <p className="mt-2 text-center">MySQL</p>
                            </div>
                            <div className="flex flex-col justify-center items-center mr-5">
                                <div className="w-10 h-10">
                                    <img src="/images/cases/docker.svg" className="w-full h-full" />
                                </div>
                                <p className="mt-2 text-center">Docker</p>
                            </div>
                            <div className="flex flex-col justify-center items-center mr-5">
                                <div className="w-10 h-10">
                                    <img src="/images/cases/aws.svg" className="w-full h-full" />
                                </div>
                                <p className="mt-2 text-center">AWS</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="/images/dailystar_thumbnail.jpg" className="w-full" />
                    </div>
                </div>
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
        }
    }
}