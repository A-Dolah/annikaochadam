import BorderFrame from '@components/BorderFrame'

const FAQ = () => (
  <div className="bg-white w-full sm:w-10/12 xl:w-1/2 p-2 flex flex-col items-center">
    <p className="font-sans mt-6 text-base xl:text-lg font-extralight text-center">
      Här samlar vi matnyttig information om bröllopshelgen. Denna sida kommer att uppdateras
      löpande.
    </p>

    <p className="mb-4 text-2xl xl:text-3xl font-extralight mt-8">Klädsel</p>
    <BorderFrame>
      <div className="flex-col justify-center items-center text-center">
        <div className="italic font-extralight text-center">
          Till bröllopet har vi valt klädkoden &quot;mörk kostym&quot;. Det innebär i grova drag att
          om man vill ha på sig kostym brukar den ha en mörk färg (t.ex. mörkblå, mörkbrun eller
          mörkgrå). Skorna ska traditionellt vara svarta, men detta har Adam brutit mot flera
          gånger. Slips eller fluga passar fint till mörk kostym! Bär man hellre klänning eller kjol
          brukar den vara av lite finare tyg och täcka knäna.
        </div>
      </div>
    </BorderFrame>

    <p className="mb-4 text-2xl xl:text-3xl font-extralight mt-8">Barn</p>
    <BorderFrame>
      <div className="flex-col justify-center items-center text-center">
        <div className="italic font-extralight text-center">
          Barn är varmt välkomna till grillfesten på fredagen den 27 maj. På lördagen den 28 maj
          tror vi däremot att barnen har det roligare hos sina barnvakter. <br />
          Undantag: Ammande barn är välkomna hela helgen.
        </div>
      </div>
    </BorderFrame>

    <p className="mb-4 text-2xl xl:text-3xl font-extralight mt-8">Boende</p>
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

    <p className="mb-4 text-2xl xl:text-3xl font-extralight mt-8">Gåvor</p>
    <BorderFrame>
      <div className="flex-col justify-center items-center text-center">
        <div className="italic font-extralight text-center">Mer info kommer inom kort</div>
      </div>
    </BorderFrame>
  </div>
)
export default FAQ
