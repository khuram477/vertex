import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vertex Service",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
   <div className="mt-16">
  <Breadcrumb 
    pageName="Kontaktseite"
    description="Lassen Sie uns reden – wir freuen uns darauf, von Ihnen zu hören!"
  />
</div>



      <Contact />
    </>
  );
};

export default ContactPage;
