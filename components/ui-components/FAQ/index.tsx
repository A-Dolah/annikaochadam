import BorderFrame from '@components/BorderFrame'

const FAQ = () => (
  <div className="bg-white w-full sm:w-10/12 xl:w-1/2 p-2 flex flex-col items-center">
    <p className="font-sans mt-6 mb-10 text-base xl:text-lg font-extralight text-center">
      Här samlar vi matnyttig information om bröllopshelgen. Denna sida kommer att uppdateras
      löpande.
    </p>
    <p className="mb-4 text-2xl xl:text-3xl font-extralight">Boende</p>
    <BorderFrame>
      <div className="flex-col justify-center items-center text-center">
        <div className="italic font-extralight text-center">Mer info kommer inom kort</div>
      </div>
    </BorderFrame>

    <p className="mb-4 text-2xl xl:text-3xl font-extralight mt-8">Resa</p>
    <BorderFrame>
      <div className="flex-col justify-center items-center text-center">
        <div className="italic font-extralight text-center">Mer info kommer inom kort</div>
      </div>
    </BorderFrame>

    <p className="mb-4 text-2xl xl:text-3xl font-extralight mt-8">Klädsel</p>
    <BorderFrame>
      <div className="flex-col justify-center items-center text-center">
        <div className="italic font-extralight text-center">Mer info kommer inom kort</div>
      </div>
    </BorderFrame>

    <p className="mb-4 text-2xl xl:text-3xl font-extralight mt-8">Gåvor</p>
    <BorderFrame>
      <div className="flex-col justify-center items-center text-center">
        <div className="italic font-extralight text-center">Mer info kommer inom kort</div>
      </div>
    </BorderFrame>
  </div>
)
export default FAQ
