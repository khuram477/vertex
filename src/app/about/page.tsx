import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vertex Service",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
  
  <div
  className="hidden sm:block"
  style={{
    position: 'relative',
    width: '100%',
    height: '400px',
    overflow: 'hidden',
    marginTop: '8%',
  }}
>
  {/* Blurred Background Image */}
  <img
    src="https://lirp.cdn-website.com/bc797f456574440d984c0b14687f1d53/dms3rep/multi/opt/715-480w.png"
    alt="About Banner"
    style={{
      width: '100%',
      height: '200%',
      objectFit: 'cover',
      display: 'block',
      transform: 'scale(1.1)', // slight zoom to avoid borders after blur
    }}
  />

  {/* White Overlay */}
  <div></div>

  {/* Centered Text */}
  <div
    style={{
      position: 'absolute',
      top: '50%',
      left: '30%',
      transform: 'translate(-50%, -50%)',
      color: '#1a3041',
      fontWeight: 'bold',
      textAlign: 'center',
      zIndex: 2,
      padding: '0 20px',
      whiteSpace: 'pre-wrap',
      textShadow: '2px 2px 4px rgba(0,0,0,0.7)', // makes text more readable
    }}
    className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl sm:px-4 md:px-6 lg:px-8 xl:px-12 whitespace-nowrap"
  >
    Wir bewegen Menschen <br className="hidden sm:block" /> Ideen & Projekte
  </div>
</div>


    <AboutSectionOne />



{/* -------------------------------------second card---------------------- */}
<section id="about" className="pt-16 md:pt-20 lg:pt-28">
  <div className="container">
    <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
      <div className="-mx-4 flex flex-wrap items-center">
        
        {/* Image Column */}
        <div className="w-full px-4 mb-10 lg:mb-0 lg:w-1/2">
          <div className="relative max-w-[500px] w-full h-[450px] mx-auto rounded overflow-hidden">
            <img
              src="https://ik.imagekit.io/b6iqka2sz/assets/ChatGPT%20Image%20Apr%2015,%202025,%2012_56_42%20AM.png?updatedAt=1744661016709"
              alt="about-image"
              className="w-full h-full object-cover rounded drop-shadow-three dark:hidden dark:drop-shadow-none"
            />
            <img
              src="https://ik.imagekit.io/b6iqka2sz/assets/ChatGPT%20Image%20Apr%2015,%202025,%2012_56_42%20AM.png?updatedAt=1744661016709"
              alt="about-image"
              className="w-full h-full object-cover rounded hidden dark:block drop-shadow-three dark:drop-shadow-none"
            />
          </div>
        </div>

        {/* Text Column */}
        <div className="w-full px-3 lg:w-1/2">
  <h1
    style={{  fontSize:"30px" }}
   
  >
    Wir sind ein junges und dynamisches Unternehmen mit einer klaren Mission – Service, der funktioniert. Mit Sitz in Riedlingen oder Ihrer Stadt bedienen wir Kunden in ganz Deutschland und darüber hinaus.
  </h1>
 
</div>


      </div>
    </div>
  </div>
</section>


{/* -------------------------------------first card---------------------- */}
<section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-3 lg:w-1/2">
            <h1
    style={{  fontSize:"30px" }}
   
  >
  Vertex Service steht für Erfahrung, Engagement und Qualität. Unser Team besteht aus erfahrenen Fachleuten mit Hintergrund in Personalvermittlung, Umzugslogistik und Facility Management.
</h1>


              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                
              </div>
            </div>

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                
              </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-25/24 max-w-[500px] lg:mr-0 rounded">
                <img
                  src="https://ik.imagekit.io/b6iqka2sz/assets/ChatGPT%20Image%20Apr%2015,%202025,%2012_39_30%20AM.png?updatedAt=1744659980355"
                  alt="about-image"
                  className="mx-auto max-w-full rounded drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <img
                  src="https://ik.imagekit.io/b6iqka2sz/assets/ChatGPT%20Image%20Apr%2015,%202025,%2012_39_30%20AM.png?updatedAt=1744659980355"
                  alt="about-image"
                  className="mx-auto hidden rounded max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    {/* <AboutSectionTwo /> */}
  </>
  
  
  
  );
};

export default AboutPage;
