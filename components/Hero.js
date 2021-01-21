function Hero() {
    return (
        <>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto px-5">
            <div className="lg:flex md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Mission driven,
                <br className="hidden lg:inline-block" />people focused
              </h1>
              <p className="mb-8 leading-relaxed">We are building artificial intelligence and information product to solve organization, enterprise and startups business challenges.</p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              </div>
            </div>
            <div className="lg:max-w-sm md:w-1/3 w-1/2">
              <img alt="hero" src="images/hero.svg" />
            </div>
          </div>
        </section>
        </>
    )
}

export default Hero