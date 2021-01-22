import Image from 'next/image'

const loader = ({ src, width, quality }) => {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`
}

function Hero() {
    return (
        <>
        <section className="container mx-auto px-6 p-10">
          <div className="flex flex-wrap mb-20">
            <div className="flex justify-center w-full md:w-1/2">
              <Image loader={loader} src="images/hero.svg" alt="hero" width="550" height="550" />
            </div>
            <div className="w-full md:w-1/2 mt-32">
              <h1 className="sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Mission driven, people focused
              </h1>
              <p className="mb-8 leading-relaxed text-gray-600">We are building artificial intelligence and information product to solve organization, enterprise and startup business challenges.</p>
              <div className="flex justify-start">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}

export default Hero