import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <img
                src="https://personal-polen.de/wp-content/uploads/2019/02/handwerker-aus-polen.jpg"
                alt="about image"
                className="drop-shadow-three dark:hidden dark:drop-shadow-none rounded"
              />
              <img
                src="https://personal-polen.de/wp-content/uploads/2019/02/handwerker-aus-polen.jpg"
                alt="about image"
                
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none rounded"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
          <div className="max-w-[470px]">
  <div className="mb-9">
    <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
      Personalvermittlung
    </h3>
    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
      Ob in der IT, im Handwerk oder im Büro – wir finden die richtigen Mitarbeiter für Ihr Unternehmen.
    </p>
  </div>
  <div className="mb-9">
    <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
      Gebäudeservices
    </h3>
    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
    Wir bieten Ihnen einen umfassenden Gebäudeservice aus einer Hand: Von der regelmäßigen Reinigung über Hausmeisterdienste bis hin zur Pflege von Außenanlagen. Sauberkeit, Sicherheit und Werterhalt Ihrer Immobilie stehen bei uns im Fokus
    </p>
  </div>
  <div className="mb-1">
    <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
      Umzugsdienstleistungen
    </h3>
    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
      Wir kümmern uns um alles – damit Sie es nicht tun müssen.
    </p>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
