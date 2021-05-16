// import Image from 'next/image'

// const loader = ({ src, width, quality }) => {
//   return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`
// }

export default function Hero() {
    return (
        <>
        <section className="container mx-auto px-6 p-10 bg-hero bg-fixed">
          {/* <div className="flex flex-auto mb-20"> */}
            <div className="my-20">
              <h1 className="text-center sm:text-5xl text-3xl mb-8 font-bold text-gray-900">Mission driven, people focused</h1>
              <p className="text-center text-2xl sm:max-w-5xl mx-auto mb-8 leading-relaxed text-gray-600">We build innovative tech products and critical tech support to startups, enterprises, and organizations to solve their business challenges.</p>
            </div>
            {/* <div className="flex justify-center w-full md:w-1/2">
              <img src="images/hero.svg" alt="hero" width="550" height="550" className="" />
              <Image loader={loader} src="images/hero.svg" alt="hero" width="550" height="550" />
            </div>
            <div className="w-full md:w-1/2 mt-32">
              <h1 className="sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Mission driven, people focused
              </h1>
              <p className="mb-8 leading-relaxed text-gray-600">We build innovative tech products and critical tech support to startups, enterprises, and organizations to solve their business challenges.</p>
              <div className="flex justify-start">
                <button className="inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>
              </div>
            </div> */}
          {/* </div> */}
        </section>
        </>
    )
}