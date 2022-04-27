import BorderFrame from '@components/BorderFrame'
import AttendForm from '@containers/AttendForm'

const OSA = () => (
  <div className="bg-white w-full sm:w-10/12 xl:w-1/2 pb-4 flex flex-col items-center">
    <p className="font-sans mt-6 mb-10 text-base xl:text-lg font-extralight text-center">
      Anmälan via denna sida är nu stängd. Hör av dig till{` `}
      <a className="font-extralight text-blue-500" href="mailto:perwikman89@gmail.com">
        annika.adam.toastmasters@gmail.com{` `}
      </a>
      om du skulle vilja uppdatera något i din tidigare gjorda anmälan
    </p>
    <p className="mb-4 text-2xl xl:text-3xl font-extralight">OSA</p>

    <BorderFrame>
      <AttendForm />
    </BorderFrame>
  </div>
)
export default OSA
