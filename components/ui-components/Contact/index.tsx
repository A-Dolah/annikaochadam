import BorderFrame from '@components/BorderFrame'

const Contact = () => (
  <div className="bg-white w-full sm:w-10/12 xl:w-1/2 p-4 flex flex-col items-center">
    <p className="font-sans mt-12 mb-8 text-base xl:text-lg font-extralight text-center">
      Om ni har några frågor, tveka inte att höra av er till oss eller våra toastmasters!.
    </p>
    <p className="mb-2 text-2xl xl:text-3xl font-extralight">OSA</p>

    <BorderFrame>
      <div className="flex items-center justify-center justify-between mt-4">
        <div className="text-gray-900 relative uppercase font-extralight text-lg sm:text-xl tracking-widest mx-2 whitespace-nowrap text-center">
          Kontaktuppgifter till brudparet:
        </div>
      </div>
    </BorderFrame>
  </div>
)
export default Contact
