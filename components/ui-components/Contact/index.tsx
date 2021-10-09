import BorderFrame from '@components/BorderFrame'

const Contact = () => (
  <div className="bg-white w-full sm:w-10/12 xl:w-1/2 p-4 flex flex-col items-center">
    <p className="font-sans mt-6 mb-10 text-base xl:text-lg font-extralight">
      Om ni har några frågor, tveka inte att höra av er till oss eller våra toastmasters!.
    </p>
    <p className="mb-4 text-2xl xl:text-3xl font-extralight">Kontakt</p>

    <BorderFrame>
      <div className="flex-col justify-center items-center mt-4 text-center">
        <div className="text-gray-900 relative uppercase font-extralight text-lg sm:text-xl tracking-widest mx-2 whitespace-nowrap">
          Kontaktuppgifter till brudparet:
        </div>
        <div className="mt-4">
          <h3 className="mb-2">Email:</h3>
          <a className="font-extralight text-blue-500" href="mailto:adamochannika@gmail.com">
            adamochannika@gmail.com
          </a>
        </div>
        <div className="mt-4 mb-2">
          <h3 className="mb-2">Telefon:</h3>
          <p className="font-extralight">Annika: 073-057 83 17</p>
          <p className="font-extralight">Adam: 0736-49 90 79</p>
        </div>
        <div className="text-gray-900 mt-10 relative uppercase font-extralight text-lg sm:text-xl tracking-widest whitespace-nowrap">
          Kontaktuppgifter till toastmasters:
        </div>
        <div className="mt-4">
          <h3 className="mb-2">Email:</h3>
          <div>
            <span className="font-extralight">Sarah: </span>
            <a
              className="font-extralight text-blue-500"
              href="mailto:sarah.nilsson.dolah@gmail.com"
            >
              sarah.nilsson.dolah@gmail.com
            </a>
          </div>
          <div>
            <span className="font-extralight">Per: </span>
            <a className="font-extralight text-blue-500" href="mailto:per@gmail.com">
              per@gmail.com
            </a>
          </div>
        </div>
        <div className="mt-4 mb-2">
          <h3 className="mb-2">Telefon:</h3>
          <p className="font-extralight">Sarah: 073-875 79 00</p>
          <p className="font-extralight">Per: 070-544 84 96</p>
        </div>
      </div>
    </BorderFrame>
  </div>
)
export default Contact
