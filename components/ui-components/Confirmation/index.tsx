import cn from 'classnames'
import Link from 'next/link'

const Confirmation = () => (
  <div className="w-11/12 md:w-8/12 flex flex-col items-center justify-start mt-32 text-center h-full">
    <h2 className="mb-6 text-2xl xl:text-3xl font-extralight">Tack för Din anmälan!</h2>
    <p className="font-extralight">
      Du borde få en bekräftelse på din angivna epostadress inom kort. Om Du har några frågor, tveka
      in att höra av Dig!
    </p>
    <div className="flex-col items-center justify-center mt-16">
      <Link href="/">
        <a className="w-full hadow cursor-pointer focus:shadow-outline focus:outline-none text-white bg-black py-2 px-4 font-extralight">
          Tillbaka till startsidan
        </a>
      </Link>
      <div className="flex justify-center items-center h-24">
        <p className="italic ">eller</p>
      </div>
      <Link href="/osa">
        <a className="w-full shadow cursor-pointer text-white bg-black py-2 px-4 whitespace-nowra font-extralight">
          Anmäl ytterligare gäst
        </a>
      </Link>
    </div>
  </div>
)

export default Confirmation
