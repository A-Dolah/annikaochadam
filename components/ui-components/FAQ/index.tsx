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
          tror vi däremot att barnen har det roligare hos sina barnvakter.
        </div>
        <div className="italic font-extralight text-center mt-4">
          Undantag: ammande barn är givetvis välkomna
        </div>
      </div>
    </BorderFrame>

    <p className="mb-4 text-2xl xl:text-3xl font-extralight mt-8">Boende</p>
    <BorderFrame>
      <div className="flex-col justify-center items-center text-center">
        <div className="italic font-extralight text-center">
          För er som reser och behöver boende rekommenderar vi att ni bor i Lund. Det enda
          hotellalternativ som finns i Dalby är Gästis men dessa rum håller tyvärr på att renoveras.
        </div>
        <div className="italic font-extralight text-center mt-4">
          Det finns många olika hotellalternativ i Lund i olika prisklasser. Vi har efterforskat
          lite och kan rekommendera följande alternativ:
        </div>
        <div className="text-center mt-4">
          <a
            href="https://www.millasvilla.se/se"
            target="_blank"
            className="font-bold text-md hover:text-blue-800"
            rel="noreferrer"
          >
            &middot; Millas Villa
          </a>
        </div>
        <div className="italic font-extralight text-center text-xs">
          {` `}
          Verkar passa bra om man vill bo fler i grupp. Använd rabattkod &apos;REGULAR&apos; för 10%
          rabatt
        </div>
        <div className="text-center mt-4">
          <a
            href="https://lillahotellet.com/sv/double/"
            target="_blank"
            className="font-bold text-md hover:text-blue-800"
            rel="noreferrer"
          >
            &middot; Lilla Hotellet
          </a>
          <div className="italic font-extralight text-center text-xs">
            {` `}
            Mysigt botiquehotell mitt i Lund
          </div>
        </div>
        <div className="text-center mt-4">
          <a
            href="https://www.bestwestern.se/booking-path/hotel-details/best-western-plus-hotel-planetstaden-lund-88253"
            target="_blank"
            className="font-bold text-md hover:text-blue-800"
            rel="noreferrer"
          >
            &middot; Best Western Planetstaden
          </a>
          <div className="italic font-extralight text-center text-xs">
            {` `}
            Hotell i utkanten av Lund i riktining mot Dalby
          </div>
        </div>
        <div className="text-center mt-4">
          <a
            href="https://www.grandilund.se/"
            target="_blank"
            className="font-bold text-md hover:text-blue-800"
            rel="noreferrer"
          >
            &middot; Grand Hotel Lund
          </a>
          <div className="italic font-extralight text-center text-xs">
            {` `}
            För den som vill lyxa till det
          </div>
        </div>
      </div>
    </BorderFrame>

    <p className="mb-4 text-2xl xl:text-3xl font-extralight mt-8">Resa</p>
    <BorderFrame>
      <div className="flex-col justify-center items-center text-center">
        <div className="italic font-extralight text-center">
          För er som inte reser med egen bil är det smidigaste sättet att ta sig till Lund/Dalby att
          åka tåg.
        </div>
        <div className="italic font-extralight text-center mt-4">
          Om ni bor långt ifrån kan man även flyga till Sturup (Malmö Airport). Därifrån kan man ta
          sig till Lund med flygbuss, eller till Dalby med taxi. Det finns också möjlighet att bli
          hämtade på flygplatsen – hör av er till oss om ni behöver skjuts.
        </div>
        <div className="italic font-extralight text-center mt-4">
          Vi kommer att anordna eventuellt resande under bröllopsdagen mellan kyrka och festlokal.
        </div>
      </div>
    </BorderFrame>

    <p className="mb-4 text-2xl xl:text-3xl font-extralight mt-8">Gåvor</p>
    <BorderFrame>
      <div className="flex-col justify-center items-center text-center">
        <div className="italic font-extralight text-center">
          Vi är otroligt tacksamma för att ni vill komma och förgylla vår dag, och vi förväntar oss
          inga gåvor utöver er närvaro.
        </div>
        <div className="italic font-extralight text-center mt-4">
          Vill man ändå ge oss en gåva önskar vi bidrag till vår bröllopsresa. Detta kan sättas in
          på konto hos Handelsbanken med clearingnummer: 6318 och kontonummer 340 799 498.
        </div>
      </div>
    </BorderFrame>
  </div>
)
export default FAQ
