import BorderFrame from '@components/BorderFrame'
import AttendForm from '@containers/AttendForm'

const OSA = () => (
  <div className="bg-white w-full sm:w-10/12 xl:w-1/2 p-4 flex flex-col items-center">
    <p className="font-sans mt-12 mb-8 text-base xl:text-lg font-thin text-center">
      Anmälan till bröllopet sker via formuläret nedan. Senaste datum för anmälan är 1 december
      2021.
    </p>
    <p className="mb-2 text-2xl xl:text-3xl font-thin ">OSA</p>

    <BorderFrame>
      <AttendForm />
    </BorderFrame>
  </div>
)
export default OSA