import { FC } from 'react'

const ScheduleaHeader = ({ text }: { text: string }) => (
  <>
    <div className="border-b w-32 border-gray-600 mr-5 h-0" />
    <div className="text-gray-900 relative uppercase font-thin  text-lg sm:text-xl tracking-widest mx-2 whitespace-nowrap">
      {text}
    </div>
    <div className="border-b w-32 border-gray-600 ml-5 h-0" />
  </>
)

interface ItemProps {
  time: string
  happening: string
  description: string
}

const ScheduleItem: FC<ItemProps> = ({ time, happening, description }) => (
  <>
    <span className="text-base font-thin w-32 whitespace-nowrap">{time}</span>
    <div>
      <div className="flex flex-col space-between gap-2">
        <span className="text-base">{happening}</span>
        <span className="text-sm italic font-thin">{description}</span>
      </div>
    </div>
    <div className="w-32" />
  </>
)

const ScheduleComponent = () => (
  <div className="bg-white w-11/12 lg:w-1/2 p-4 flex flex-col items-center">
    <p className="mt-12 mb-8 text-base xl:text-lg font-thin text-center">
      På bröllopet kommer Vi att samla vänner och familj från många olika delar av Sverige och
      världen. Vi kommer därför att ta tillfället i akt att fira och umgås under två dagar.
    </p>
    <p className="mb-2 text-2xl xl:text-3xl font-thin ">Preliminärt Schema</p>

    <div className="border-black shadow-sm border p-8 w-full">
      <div className="flex items-center justify-between mt-4">
        <ScheduleaHeader text="Fredag den 27 maj" />
      </div>
      <div className="flex items-start justify-between gap-8 my-4">
        <ScheduleItem
          time="16.00 – 22.00"
          happening="Grillfest, Tetravägen 74 Dalby"
          description="Adams föräldrar bjuder in till grillfest i deras trädgård i Dalby. Här bjuds det på mat och dryck varvat med olika aktiviteter. Kom när det passar och gå när det känns rätt!"
        />
      </div>

      <div className="flex items-center justify-between mt-12">
        <ScheduleaHeader text="Lördag den 28 maj" />
      </div>
      <div className="flex items-start justify-between gap-8 my-4">
        <ScheduleItem
          time="14.00 – 25.00"
          happening="Vigsel, Dalby eller Torna Hällestad Kyrka"
          description="Vigsel kommer troligen att ske i Dalby Kyrka, alldeles intill festlokal Dalby Gästgiveri. Detta kan dock komma att ändras till Torna Hällestad Kyrka om församlingen beslutar om renovering av Dalby Kyrka."
        />
      </div>
    </div>
  </div>
)
export default ScheduleComponent
