import Layout from '@components/Layout'
import Hero from "@components/Hero"

const About = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <Hero />
        <div className="container mx-auto pb-20">
          <div className="flex flex-col sm:flex-row justify-center items-center px-20 mb-20">
            <div className="w-full md:w-1/3">
              <h3 className="text-3xl">Why Dynamic Guy?</h3>
            </div>
            <div className="w-full md:w-2/3">
              <p>We are a team of strategy, design and development experts united by our passion for building human-centered, outcomes focused software. From concept to launch we apply startup-style customer development and agile engineering to creating new products and areas of business.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center px-20 mb-20">
            <div className="w-full md:w-1/3">
              <h3 className="text-3xl">What we offer?</h3>
            </div>
            <div className="w-full md:w-2/3">
              <p>From whiteboarding new concepts to long-term support, we work with startups and large multi-national enterprises to develop new applications, software, services and platforms.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center px-20">
            <div className="w-full md:w-1/3">
              <h3 className="text-3xl">Our values</h3>
            </div>
            <div className="w-full md:w-2/3">
              <p>Our goals during this phase is to define the idea, understand your business goals and the needs of your users. We may conduct stakeholder interviews, outline technical and business requirements, do a competitor analysis and run a technology audit. This groundwork is step one in the product design and development process. Once we identified the problem we’re solving and who the users are we can begin prototyping ideas and testing assumptions.</p>
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
