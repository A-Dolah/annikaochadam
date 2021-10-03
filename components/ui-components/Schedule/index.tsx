import { SvgIconProps } from '@material-ui/core/SvgIcon'

import { FC } from 'react'

import BorderFrame from '@components/BorderFrame'

import BarbecueIcon from '@components/Icons/Barbecue'
import ChurchIcon from '@components/Icons/Church'
import DiningIcon from '@components/Icons/Dining'
import MingleIcon from '@components/Icons/Mingle'
import PartyIcon from '@components/Icons/Party'
import TeaIcon from '@components/Icons/Tea'

import useWindowSize from '@hooks/useWindowSize'

const ScheduleHeader = ({ text }: { text: string }) => {
  const { width } = useWindowSize()

  return (
    <>
      {(width as unknown as number) > 640 && (
        <div className="border-b w-32 border-gray-600 mr-5 h-0" />
      )}
      <div className="text-gray-900 relative uppercase font-thin text-lg sm:text-xl tracking-widest mx-2 whitespace-nowrap">
        {text}
      </div>
      {(width as unknown as number) > 640 && (
        <div className="border-b w-32 border-gray-600 ml-5 h-0" />
      )}
    </>
  )
}

interface ItemProps {
  time: string
  happening: string
  description: string
  icon: React.ReactElement<SvgIconProps>
}

const ScheduleItem: FC<ItemProps> = ({ time, happening, description, icon }) => {
  const { width } = useWindowSize()

  return (
    <div className="flex flex-col md:flex-row items-center text-center md:text-left md:items-start justify-between gap-4 md:gap-8 my-8 md:my-4 pb-4 sm:pb-0 border-b sm:border-none">
      <span className="text-base font-thin w-32 whitespace-nowrap">{time}</span>
      {(width as unknown as number) < 768 && (
        <div className="w-auto sm:w-32 self-center flex justify-center">{icon}</div>
      )}
      <div className="md:w-64">
        <div className="flex flex-col items-center md:items-start gap-2 max-w-sm">
          <span className="text-base md:whitespace-nowrap">{happening}</span>
          <span className="text-sm italic font-thin">{description}</span>
        </div>
      </div>
      {(width as unknown as number) >= 768 && (
        <div className="w-auto sm:w-32 self-center flex justify-center">{icon}</div>
      )}
    </div>
  )
}

const Schedule = () => (
  <div className="bg-white w-full sm:w-10/12 xl:w-1/2 p-4 flex flex-col items-center">
    <p className="font-sans mt-12 mb-8 text-base xl:text-lg font-thin text-center">
      På bröllopet kommer Vi att samla vänner och familj från många olika delar av Sverige och
      världen. Vi kommer därför att ta tillfället i akt att fira och umgås under två dagar.
    </p>
    <p className="mb-2 text-2xl xl:text-3xl font-thin ">Preliminärt Schema</p>

    <BorderFrame>
      <div className="flex items-center justify-between mt-4">
        <ScheduleHeader text="Fredag den 27 maj" />
      </div>
      <ScheduleItem
        time="16.00 – 23.00"
        happening="Grillfest, Tetravägen 74 Dalby"
        description="Adams föräldrar bjuder in till grillfest i deras trädgård i Dalby. Här bjuds det på mat och dryck varvat med aktiviteter. Kom när det passar och gå när det känns rätt!"
        icon={<BarbecueIcon width={42} height={42} />}
      />

      <div className="flex items-center justify-between mt-12">
        <ScheduleHeader text="Lördag den 28 maj" />
      </div>
      <ScheduleItem
        time="14.00 – 15.30"
        happening="Vigsel, Dalby eller Torna Hällestad Kyrka"
        description="Vigsel kommer troligen att ske i Dalby Kyrka, alldeles intill festlokalen Dalby Gästgiveri. Detta beror dock på om Dalby kyrka kommer att genomgå renovering eller inte. Om renovering sker kommer vi att ha vigsel i Torna Hällestad kyrka, 5 km bort."
        icon={<ChurchIcon width={42} height={42} />}
      />
      <ScheduleItem
        time="16.00 – 17.00"
        happening="Fördrink, Dalby Gästis trädgård"
        description="Mingla, ta bilder och njut av vädret!"
        icon={<MingleIcon width={42} height={42} />}
      />
      <ScheduleItem
        time="17.00 – 21.00"
        happening="Middag, Dalby Gästis Tingshus"
        description="Inne i det nyrenoverade Tingshuset bjuds det på bröllopsmiddag där tal och uppträdanden varvas med mat från krögarna Linnérs mat. Här är det Annikas bror Per och Adams syster Sarah som håller i rodret."
        icon={<DiningIcon width={42} height={42} />}
      />
      <ScheduleItem
        time="21.00 – 03.00"
        happening="Fest, Dalby Gästis Tingshus"
        description="Bord ut, musik in! Tingslokalen blir dansbana. Vi kommer även att anordna en lite lugnare avdelning med kaffevagn för de som föredrar det."
        icon={<PartyIcon width={42} height={42} />}
      />

      <div className="flex items-center justify-between mt-12">
        <ScheduleHeader text="Söndag den 29 maj" />
      </div>
      <ScheduleItem
        time="10.00 – 13.00"
        happening="Brunch, Dalby Gästis Restaurang"
        description="Här kan man komma förbi och säga hejdå."
        icon={<TeaIcon width={42} height={42} />}
      />
    </BorderFrame>
  </div>
)
export default Schedule
