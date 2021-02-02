// import Link from 'next/link'
// import Image from 'next/image'

// const loader = ({ src, width, quality }) => {
//   return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`
// }

function Brand() {
  return (
    <>
      <section className="my-20">
        <div className="flex flex-col text-center w-full mb-10">
          <h2 className="font-bold text-center uppercase text-2xl lg:text-4xl tracking-wider mb-10">Our Clients</h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">we worked with leading brand and organisation for tech support.</p>
        </div>
        <div className="flex flex-col text-center w-full mb-10">
          <ul className="flex flex-col flex-wrap items-center md:flex-row">
            <li className="w-28 px-4 py-2 m-5">
              <img src="images/banglalink_logo.svg" alt="Banglalink" />
            </li>
            <li className="w-32 px-4 py-2 m-5">
              <img src="images/jti_logo.svg" alt="Japan Tobacco International" />
            </li>
            <li className="w-64 px-4 py-2 m-5">
              <img src="images/dghs_logo.png" alt="Directorate General of Health Services" />
            </li>
            <li className="w-64 px-4 py-2 m-5">
              <img src="images/dailystar_logo.svg" alt="The Daily Star" />
            </li>
            <li className="w-60 px-4 py-2 m-5">
              <img src="images/palo_logo.svg" alt="Prothom Alo" />
            </li>
            <li className="w-40 px-4 py-2 m-5">
              <img src="images/ucbl_logo.png" alt="United Commercial Bank Ltd" />
            </li>
            <li className="w-40 px-4 py-2 m-5">
              <img src="images/leadsoft.png" alt="LeadSoft Bangladesh Limited" />
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Brand