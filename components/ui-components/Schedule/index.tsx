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
      Till br??llopet samlas v??nner och familj fr??n m??nga olika delar av Sverige och v??rlden. Vi
      passar d??rf??r p?? att umg??s och fira hela helgen. H??r finner Ni det{` `}
      prelimin??ra schemat!
    </p>
    <h2 className="mb-6 text-2xl xl:text-3xl font-extralight text-center">
      Schema f??r br??llopshelgen
    </h2>

    <BorderFrame>
      <div className="flex items-center justify-center sm:justify-between mt-4">
        <ScheduleHeader text="Fredag den 27 maj" />
      </div>
      <p className="mt-2 mb-4 font-extralight text-center italic">Kl??dsel: Midsommar i maj</p>
      <ScheduleItem
        time="16.00 ??? 23.00"
        happening="Grillfest, Tetrav??gen 74 Dalby"
        description="Det anordnas grillfest i Adams f??r??ldrars tr??dg??rd. H??r bjuds det p?? mat och dryck och en match boule f??r den som k??nner f??r det. Kom n??r det passar och g?? n??r det k??nns r??tt!"
        icon={<BarbecueIcon width={42} height={42} />}
      />

      <div className="flex items-center justify-center sm:justify-between mt-12">
        <ScheduleHeader text="L??rdag den 28 maj" />
      </div>
      <p className="mt-2 mb-4 font-extralight text-center italic">Kl??dsel: M??rk kostym</p>
      <ScheduleItem
        time="14.00 ??? 15.00"
        happening="Vigsel, Dalby kyrka"
        description="Efter mycket om och men ??r det nu best??mt att vigsel sker i Dalby kyrka som ligger ett stenkast fr??n Dalby G??stis."
        icon={<ChurchIcon width={42} height={42} />}
      />
      <ScheduleItem
        time="15.00 ??? 16.30"
        happening="F??rdrink, Dalby G??stis tr??dg??rd"
        description="Innan br??llopsmiddagen samlas vi i Dalby G??stis h??rliga tr??dg??rd f??r bubbel, snittar, mingel och bilder."
        icon={<MingleIcon width={42} height={42} />}
      />
      <ScheduleItem
        time="17.00 ??? 20.30"
        happening="Middag, Dalby G??stis Tingshus"
        description="I det nyrenoverade Tingshuset har vi br??llopsmiddagen. H??r finns m??jlighet att h??lla tal och/eller upptr??da. H??r ??r det Annikas bror Per och Adams syster Sarah som h??ller i rodret ??? st??m g??rna av tal- och upptr??danden med dem!"
        icon={<DiningIcon width={42} height={42} />}
      />
      <ScheduleItem
        time="21.00 ??? 02.00"
        happening="Fest, Dalby G??stis Tingshus"
        description="Baren ??ppnar, borden ??ker ut och musiken kommer in! Vi kommer ??ven att anordna en lite lugnare avdelning med kaffevagn f??r de som f??redrar det."
        icon={<PartyIcon width={42} height={42} />}
      />
      <ScheduleItem
        time="02.00 ??? sent"
        happening="Efterfest, Tetrav??gen 74 Dalby"
        description="F??r den som k??nner f??r lite ytterligare fest finns m??jlighet att g?? till samma plats d??r grillfesten var (15 min promenad) f??r efterfest."
        icon={<PartyIcon width={42} height={42} />}
      />

      <div className="flex items-center justify-center sm:justify-between mt-12">
        <ScheduleHeader text="S??ndag den 29 maj" />
      </div>
      <ScheduleItem
        time="11.00 ??? 13.00"
        happening="Brunch, Tetrav??gen 74 Dalby"
        description="En enklare brunch serveras hemma hos Adams f??r??ldrar. Brudparet ??r p?? plats fr??n och med kl. 10, den som vill och hinner kan komma f??rbi p?? kaffe och macka och kramas hejd??!"
        icon={<TeaIcon width={42} height={42} />}
      />
    </BorderFrame>
  </div>
)
export default Schedule
