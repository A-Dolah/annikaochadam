import Image from 'next/image'

import dalbyGastisPic from '@public/gastis_sky_view.jpeg'

const LandingInitialInfo = () => (
  <section className="flex flex-col items-center text-center	gap-3 h-4/6">
    {/* <h1 className="text-6xl my-4">Annika och Adams bröllopssida</h1> */}
    <div className="w-10/12">
      <Image src={dalbyGastisPic} alt="Gästis sky view" priority placeholder="blur" />
    </div>
    <div>Info</div>
  </section>
)

export default LandingInitialInfo
