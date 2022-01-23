const Footer = () => (
  <footer className="footer bg-white relative border-t border-black mx-2 sm:mx-11">
    <div className="px-6 flex-col items-center justify-center">
      <div className="mt-6 mb-3 text-center">
        <a
          href="https://dalbygastis.se/"
          target="_blank"
          className="font-extralight text-md hover:text-blue-800"
          rel="noreferrer"
        >
          Dalby Gästis
        </a>
      </div>

      <div className="mb-6 text-center">
        <a
          href="https://www.svenskakyrkan.se/dalby-forsamling/dalby-kyrka"
          target="_blank"
          className="font-extralight text-md hover:text-blue-800"
          rel="noreferrer"
        >
          Torna Hällestad kyrka
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
