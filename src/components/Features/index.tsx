import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
  <section id="about" className="pt-5 pb-5" style={{ background: "#fff" }}>
  <div className="container">
    <div className="border-b border-body-color/[.15] dark:border-white/[.15] pb-0 md:pb-0 lg:pb-0">
      <div className="-mx-4 flex flex-wrap items-center">
        <div className="w-full px-4 lg:w-1/2">
          <h2
            style={{ color: '#1b2f41', fontWeight: '900' }}
            className="text-3xl sm:text-4xl md:text-5xl mb-4 "
          >
            Vertex Dienstleistung
          </h2>

          <h1
  style={{ color: '#333', fontSize:"25px" }}
  className="text-base leading-relaxed "
>
  Ob Sie zuverlässiges Personal, einen stressfreien Umzug oder gut gepflegte Immobilien benötigen – Vertex Service bietet maßgeschneiderte Lösungen aus einer Hand. Persönlich. Flexibel. Professionell.
</h1>


        </div>

        <div className="w-full px-4 lg:w-1/2">
          <div className="relative mx-auto aspect-25/24 max-w-[500px] lg:mr-0 rounded">
            <img
              src="https://ik.imagekit.io/b6iqka2sz/assets/ChatGPT%20Image%20Apr%2016,%202025,%2007_47_46%20PM.png?updatedAt=1744815312091"
              alt="about-image"
              className="mx-auto max-w-full rounded-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
            />
            <img
              src="https://ik.imagekit.io/b6iqka2sz/assets/ChatGPT%20Image%20Apr%2016,%202025,%2007_47_46%20PM.png?updatedAt=1744815312091"
              alt="about-image"
              className="mx-auto hidden max-w-full rounded-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
        <SectionTitle
  title="Wichtige Dienstleistungen"
  paragraph="Personalvermittlung, Umzugs- & Gebäudelösungen – vereinfacht. Zuverlässiges Personal, reibungslose Umzüge und umfassende Betreuung Ihrer Einrichtungen – alles individuell zugeschnitten, um Ihr Unternehmen schnell und effizient zu unterstützen."
  center
/>


          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
      <div style={{background:"#fff"}}>
      <div className="container" >
      <img src="https://ik.imagekit.io/b6iqka2sz/assets/Screenshot%202025-04-16%20035501.png?updatedAt=1744758539716" alt="" />
      </div>
      </div>
    </>
  );
};

export default Features;
