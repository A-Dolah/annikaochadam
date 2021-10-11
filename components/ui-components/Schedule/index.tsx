import { SvgIconProps } from '@material-ui/core/SvgIcon'

import { FC } from 'react'

import BorderFrame from '@components/BorderFrame'

import BarbecueIcon from '@components/Icons/Barbecue'
import ChurchIcon from '@components/Icons/Church'
import DiningIcon from '@components/Icons/Dining'
import MingleIcon from '@components/Icons/Mingle'
import PartyIcon from '@components/Icons/Party'

import useWindowSize from '@hooks/useWindowSize'

const ScheduleHeader = ({ text }: { text: string }) => {
  const { width } = useWindowSize()

  return (
    <>
      {(width as unknown as number) > 640 && (
        <div className="border-b w-32 border-gray-600 mr-5 h-0" />
      )}
      <h2 className="text-gray-900 relative uppercase font-extralight text-lg sm:text-xl tracking-widest mx-2 whitespace-nowrap">
        {text}
      </h2>
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
      <span className="text-base font-extralight w-32 whitespace-nowrap">{time}</span>
      {(width as unknown as number) < 800 && (
        <div className="w-auto sm:w-32 self-center flex justify-center">{icon}</div>
      )}
      <div className="md:w-64">
        <div className="flex flex-col items-center md:items-start gap-2 max-w-sm">
          <span className="text-base md:whitespace-nowrap">{happening}</span>
          <span className="text-sm italic font-extralight">{description}</span>
        </div>
      </div>
      {(width as unknown as number) >= 800 && (
        <div className="w-auto sm:w-32 self-center flex justify-center">{icon}</div>
      )}
    </div>
  )
}

const Schedule = () => (
  <div className="bg-white w-full sm:w-10/12 xl:w-1/2 pb-4 flex flex-col items-center">
    <p className="font-sans mt-6 mb-10 text-base xl:text-lg font-extralight text-center">
      Till bröllopet samlas vänner och familj från många olika delar av Sverige och världen. Vi
      passar därför på att umgås och fira hela helgen. Här finner Ni det{` `}
      preliminära schemat!
    </p>
    <h2 className="mb-6 text-2xl xl:text-3xl font-extralight text-center">
      Schema för bröllopshelgen
    </h2>

    <BorderFrame>
      <div className="flex items-center justify-center sm:justify-between mt-4">
        <ScheduleHeader text="Fredag den 27 maj" />
      </div>
      <p className="mt-2 mb-4 font-extralight text-center italic">Klädsel: Midsommar i maj</p>
      <ScheduleItem
        time="16.00 – 23.00"
        happening="Grillfest, Tetravägen 74 Dalby"
        description="Det anordnas grillfest i Adams föräldrars trädgård. Här bjuds det på mat och dryck och en match boule för den som känner för det. Kom när det passar och gå när det känns rätt!"
        icon={<BarbecueIcon width={42} height={42} />}
      />

      <div className="flex items-center justify-between mt-8">
        <ScheduleHeader text="Lördag den 28 maj" />
      </div>
      <p className="mt-2 mb-4 font-extralight text-center italic">Klädsel: Mörk kostym</p>
      <ScheduleItem
        time="14.00 – 15.00"
        happening="Vigsel, Dalby (eller Torna Hällestad) Kyrka"
        description="Vigsel är planerad i Dalby kyrka, ett stenkast från festlokalen Dalby Gästis Tingshus. Dalby kyrka kan dock komma att genomgå renovering, då sker vigsel istället i grannbyn Torna Hällestads kyrka."
        icon={<ChurchIcon width={42} height={42} />}
      />
      <ScheduleItem
        time="15.30 – 16.30"
        happening="Fördrink, Dalby Gästis trädgård"
        description="Innan bröllopsmiddagen samlas vi i Dalby Gästis härliga trädgård för bubbel, snittar, mingel och bilder."
        icon={<MingleIcon width={42} height={42} />}
      />
      <ScheduleItem
        time="17.00 – 20.30"
        happening="Middag, Dalby Gästis Tingshus"
        description="I det nyrenoverade Tingshuset har vi bröllopsmiddagen. Här finns möjlighet att hålla tal och/eller uppträda. Här är det Annikas bror Per och Adams syster Sarah som håller i rodret – stäm gärna av tal- och uppträdanden med dem!"
        icon={<DiningIcon width={42} height={42} />}
      />
      <ScheduleItem
        time="21.00 – 02.00"
        happening="Fest, Dalby Gästis Tingshus"
        description="Baren öppnar, borden åker ut och musiken kommer in! Vi kommer även att anordna en lite lugnare avdelning med kaffevagn för de som föredrar det."
        icon={<PartyIcon width={42} height={42} />}
      />

      <div className="flex items-center justify-between mt-12">
        <ScheduleHeader text="Söndag den 29 maj" />
      </div>
      <p className="italic font-extralight text-center mt-8">Mer info kommer</p>
      {/* <ScheduleItem
        time="10.00 – 13.00"
        happening="Möjlighet till avsked, Dalby Gästis Hotell"
        description='Detta är inte en "officiell" del av bröllopshelgen, men Vi (Annika och Adam) kommer att befinna oss på Dalby Gästis under söndagen för att ta farväl och tacka för helgen. Kom om Ni har vägarna förbi innan Er hemresa!'
        icon={<TeaIcon width={42} height={42} />}
      /> */}
    </BorderFrame>
  </div>
)
export default Schedule
