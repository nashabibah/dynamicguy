// import Link from 'next/link'
// import Image from 'next/image'

// const loader = ({ src, width, quality }) => {
//   return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`
// }

export default function Brand() {
  return (
    <>
      <section className="md:container md:mx-auto py-20">
        <div className="flex flex-col text-center w-full">
          <h2 className="font-bold text-center uppercase text-2xl lg:text-4xl tracking-wider mb-10">Our Clients</h2>
        </div>
        <div className="flex flex-col text-center w-full">
          <ul className="flex flex-col flex-wrap items-center md:flex-row">
            <li className="px-4 py-2 m-2 flex-1">
              <img src="/images/brands/banglalink.svg" alt="Banglalink" />
            </li>
            <li className="px-4 py-2 m-2 flex-1">
              <img src="/images/brands/jti.svg" alt="Japan Tobacco International" />
            </li>
            <li className="px-4 py-2 m-2 flex-1">
              <img src="/images/brands/dghs.png" alt="Directorate General of Health Services" />
            </li>
            <li className="px-4 py-2 m-2 flex-1">
              <img src="/images/brands/thedailystar.svg" alt="The Daily Star" />
            </li>
            <li className="px-4 py-2 m-2 flex-1">
              <img src="/images/brands/palo.svg" alt="Prothom Alo" />
            </li>
            <li className="px-4 py-2 m-2 flex-1">
              <img src="/images/brands/ucbl.png" alt="United Commercial Bank Ltd" />
            </li>
            <li className="px-4 py-2 m-2 flex-1">
              <img src="/images/brands/leadsoft.png" alt="LeadSoft Bangladesh Limited" />
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}