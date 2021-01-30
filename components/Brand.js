// import Link from 'next/link'
// import Image from 'next/image'

// const loader = ({ src, width, quality }) => {
//   return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`
// }

function Brand() {
  return (
    <>
      <section className="text-gray-600 body-font my-20">
        <div class="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-5xl text-3xl text-center font-medium mb-5 text-gray-900 tracking-wide">
            Trusted by leading brand and organisation
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos consectetur ipsam voluptate perspiciatis reprehenderit nostrum sapiente. Sequi perferendis laboriosam ut aspernatur enim tempore quaerat pariatur.</p>
        </div>
        <div className="container px-5 py-5 mx-auto">
          <ul className="flex flex-col flex-wrap items-center md:flex-row">
            <li className="w-40 px-4 py-2 m-5">
              <a href="#" target="_blank">
                <img className="" src="images/jti_logo.svg" alt="Japan Tobacco International" />
              </a>
            </li>
            <li className="w-40 px-4 py-2 m-5">
              <a href="#" target="_blank">
                <img className="" src="images/dghs_logo.jpg" alt="Directorate General of Health Services" />
              </a>
            </li>
            <li className="w-40 px-4 py-2 m-5">
              <a href="#" target="_blank">
                <img className="" src="images/dailystar_logo.svg" alt="The Daily Star" />
              </a>
            </li>
            <li className="w-40 px-4 py-2 m-5">
              <a href="#" target="_blank">
                <img className="" src="images/palo_logo.svg" alt="Prothom Alo" />
              </a>
            </li>
            <li className="w-40 px-4 py-2 m-5">
              <a href="#" target="_blank">
                <img className="" src="images/ucbl_logo.png" alt="United Commercial Bank Ltd" />
              </a>
            </li>
            <li className="w-40 px-4 py-2 m-5">
              <a href="#" target="_blank">
                <img className="" src="images/banglalink_logo.svg" alt="Banglalink" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Brand