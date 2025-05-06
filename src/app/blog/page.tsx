// import SingleBlog from "@/components/Blog/SingleBlog";
// import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
const services = [
  {
    title: "Personalvermittlungsdienste",
    image:
      "https://careers.lidl.co.uk/images/variations/hero/9/8/3/5/129785389-1-en_UK/5575b49fb9e1-PS-Lidl-Jan2024-00863.jpg?lidlhosts=careers.lidl.co.uk",
    points: [
      "• Rekrutierung für Festanstellungen oder projektbezogene Rollen",
      "• Vorauswahl und Erstellung professioneller Kandidatenprofile",
      "• Veröffentlichung und Verwaltung von Stellenanzeigen",
      "• Direkte Kommunikation mit Arbeitgebern und Bewerbern",
    ],
  }
,  
{
  title: "Gebäudeservices",
  image:
    "https://i.pinimg.com/736x/59/5c/69/595c69ab9d7746220b84245ffb94304d.jpg",
  points: [
    "• Regelmäßige oder bedarfsorientierte Objektpflege",
    "• Kleine Reparaturen und Hausmeisterdienste",
    "• Reinigung von Treppenhäusern, Büros und Außenbereichen",
    "• Rasenmähen, Heckenschnitt, Laubentfernung",
    "• Entrümpelungen vor oder nach dem Umzug",
  ],
}
,
{
  title: "Umzugsservices",
  image:
    "https://www.brownboxmovers.com/wp-content/uploads/2016/02/Why-you-Need-Professional-Moving-Services.jpg",
  points: [
    "• Private und geschäftliche Umzüge",
    "• Möbelabbau ",
    "• Verpackungsservice auf Wunsch",
    "• Entrümpelung und Entsorgung",
    "• Umzugsservice lokal, deutschlandweit und europaweit",
  ],
}

];
export const metadata: Metadata = {
  title: "Vertex Service",
  description: "This is Blog Page for Startup Nextjs Template",
  // other metadata
};
const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
  e.currentTarget.style.transform = 'translateY(-5px)'
}

const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
  e.currentTarget.style.transform = 'translateY(0)'
}
const Blog = () => {
  return (
    <>
     // Parent component
     <Breadcrumb
  pageName="Dienstleistungen"
  description="Sie können diesen Abschnitt entweder auf einer Seite oder mit eigenen Unterseiten für jeden Servicebereich präsentieren."
/>

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '16px',
  padding: '20px'
}}>
  {[
    "https://ik.imagekit.io/b6iqka2sz/assets/WhatsApp%20Image%202025-04-13%20at%2020.36.40_e55e8eb2.jpg?updatedAt=1744579196073",
    "https://ik.imagekit.io/b6iqka2sz/assets/WhatsApp%20Image%202025-04-13%20at%2020.36.45_328a4a3d.jpg?updatedAt=1744579572747",
    "https://ik.imagekit.io/b6iqka2sz/assets/WhatsApp%20Image%202025-04-13%20at%2020.36.42_9357ea6b.jpg?updatedAt=1744579270421",
  ].map((src, i) => (
    <img
      key={i}
      src={src}
      alt={`Gallery ${i + 1}`}
      style={{
        width: '100%',
        height: '250px',
        objectFit: 'cover',
        borderRadius: '12px'
      }}
    />
  ))}
</div>
<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '16px',
  padding: '20px'
}}>
  {[
    "https://ik.imagekit.io/b6iqka2sz/assets/WhatsApp%20Image%202025-04-13%20at%2020.36.41_358566fb.jpg?updatedAt=1744579670978",
    "https://ik.imagekit.io/b6iqka2sz/assets/WhatsApp%20Image%202025-04-13%20at%2020.36.40_2ab9829c.jpg?updatedAt=1744579695594",
    "https://ik.imagekit.io/b6iqka2sz/assets/WhatsApp%20Image%202025-04-13%20at%2020.36.43_603d2317.jpg?updatedAt=1744579595356",
  ].map((src, i) => (
    <img
      key={i}
      src={src}
      alt={`Gallery ${i + 1}`}
      style={{
        width: '100%',
        height: '250px',
        objectFit: 'cover',
        borderRadius: '12px'
      }}
    />
  ))}
</div>

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
  

<div
  style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
    padding: "40px 20px",
  }}
>
  {services.map((service, index) => (
    <div
      key={index}
      style={{
        flex: "0 0 30%",
        minWidth: "500px",
        maxWidth: "400px",
        padding: "24px",
        borderRadius: "20px",
        backgroundColor: "#fff",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        transition: "transform 0.3s ease",
        cursor: "pointer",
      }}
    >
      <img
        src={service.image}
        alt={service.title}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
          borderRadius: "16px",
        }}
      />

      <h3
        style={{
          marginTop: "20px",
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#222",
        }}
      >
        {service.title}
      </h3>

      <ul
        style={{
          marginTop: "16px",
          fontSize: "1.1rem",
          color: "#555",
          lineHeight: "1.7",
          textAlign: "left",
          paddingLeft: "20px",
        }}
      >
        {service.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  ))}
</div>



          </div>












          {/* <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <a
                    href="#0"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                  >
                    Prev
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                  >
                    3
                  </a>
                </li>
                <li className="mx-1">
                  <span className="bg-body-color/15 text-body-color flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md px-4 text-sm">
                    ...
                  </span>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                  >
                    12
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Blog;
