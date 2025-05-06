'use client';

import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const SigninPage = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobPosition: '',
    location: '',
    cv: null,
  });

  const form = useRef<HTMLFormElement>(null);
  const [jobs, setJobs] = useState<any[]>([]);
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_xkndvdg', 'template_dhcx1a8', form.current, {
          publicKey: 'Hg1VoEMQJhOR_F9TA',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            alert('Email sent!');
            setFormData({
              jobTitle: '',
              jobPosition: '',
              location: '',
              cv: null,
            });
            if (form.current) form.current.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
            alert('Email failed to send.');
          }
        );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === 'cv' && files) {
      setFormData({ ...formData, cv: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const getJobList = async () => {
    try {
      const response = await fetch('http://localhost:5000/getproduct');
      const result = await response.json();
      setJobs(result);
    } catch (error) {
      console.error('Error fetching job data:', error);
    }
  };

  useEffect(() => {
    getJobList();
  }, []);
  return (
  <>
<div
  style={{
    position: "relative",
    marginTop: "7%", // This will be overridden by responsive class below
  }}
  className="mt-7 sm:mt-10 md:mt-16"
>
  {/* Responsive Image */}
  <img
    src="https://www.rumaenien-job.com/wp-content/uploads/2017/05/Fotolia_25995175_S.jpg"
    alt="Hero Image"
    style={{
      width: "100%",
      height: "300px", // smaller on phones
      objectFit: "cover",
      objectPosition: "top",
      imageRendering: "auto",
    }}
    className="sm:h-[400px] md:h-[450px] lg:h-[500px]" // Tailwind-controlled height
  />

  {/* Centered Text */}
  <div
    style={{
      position: "absolute",
      top: "20%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "#246292",
      textAlign: "center",
      textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
    }}
    className="w-[90%] sm:w-[80%]"
  >
    <div className="text-xl sm:text-2xl md:text-4xl font-bold">
      Dein Weg zu uns!
    </div>
    <div className="text-sm sm:text-lg font-medium mt-2">
      Mach deine Arbeitssuche zu unserer Aufgabe!
    </div>
  </div>

  {/* Wave Effect */}
  <svg
    style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "80px" }}
    viewBox="0 0 1440 320"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#ffffff"
      fillOpacity="1"
      d="M0,224L60,208C120,192,240,160,360,160C480,160,600,192,720,192C840,192,960,160,1080,144C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
    />
  </svg>
</div>


<div className="w-full flex flex-col justify-center items-center text-center">
  <img style={{marginTop:"-5%" , marginBottom:"-5%"}}
    src="https://ik.imagekit.io/b6iqka2sz/assets/input-onlinepngtools-removebg-preview.png?updatedAt=1744642835143"
    alt="logo"
    className="w-full max-w-xs h-auto drop-shadow-[0_4px_8px_rgba(255,255,255,0.8)]"
  />
<h1 className="mt-2 mb-5 text-white text-3xl">Hier sind unsere aktuellen Jobs.</h1>

</div>


<p></p>


<div
  style={{
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: 'auto',
    background: '#f5f5f5',
    padding: '24px',
    borderRadius: '12px',
    marginBottom: '5%',
  }}
>
  <div
    style={{
      maxHeight: '480px',
      overflowY: 'auto',
      paddingRight: '10px',
    }}
  >
    {jobs.map((job, index) => (
      <div
        key={index}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          padding: '20px',
          marginBottom: '16px',
          transition: 'transform 0.2s ease-in-out',
        }}
      >
        <div>
          <h2 style={{ margin: 0, color: '#246292', fontWeight: 'bold' }}>
            {job.jobtitle}
          </h2>
          <p style={{ margin: '4px 0', color: 'gray' }}>{job.jobposition}</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p
            style={{
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              color: 'gray',
              justifyContent: 'flex-end',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="30"
              viewBox="0 0 24 24"
              fill="#246292"
              style={{ marginRight: '6px' }}
            >
              <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5 14.5 7.6 14.5 9 13.4 11.5 12 11.5z" />
            </svg>
            {job.location}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              style={{
                backgroundColor: '#246292',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
              onClick={() => setShowPopup(true)}
            >
              Jetzt bewerben
            </button>
          </div>

          {showPopup && (
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                height: '100vh',
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backdropFilter: 'blur(1.1px)', // optional blur
                transition: 'all 0.3s ease',
                zIndex: 1000,
              }}
            >
              <div
                style={{
                  backgroundColor: 'white',
                  padding: '20px',
                  borderRadius: '10px',
                  width: '90%',
                  maxWidth: '400px', // Ensure max width
                }}
              >
                <h3 style={{ textAlign: 'center' }}>Apply for Job</h3>

                <form ref={form} onSubmit={sendEmail}>
                  <div style={{ marginBottom: '10px' }}>
                    <img
                      src="https://ik.imagekit.io/b6iqka2sz/assets/input-onlinepngtools-removebg-preview.png?updatedAt=1744642835143"
                      alt="logo"
                      style={{
                        width: '300px',
                        height: 'auto',
                        marginTop: '-30%',
                        marginBottom: '-25%',
                      }}
                    />

                    <label
                      style={{
                        marginRight: '60%',
                        fontWeight: 'bold',
                        color: 'black',
                      }}
                    >
                      Name Nachname:
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      required
                      style={{
                        color: 'black',
                        width: '100%',
                        padding: '8px',
                        marginTop: '4px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '10px' }}>
                    <label
                      style={{
                        marginRight: '70%',
                        fontWeight: 'bold',
                        color: 'black',
                      }}
                    >
                      Arbeitserfahrung:
                    </label>
                    <input
                      type="text"
                      name="jobPosition"
                      value={formData.jobPosition}
                      onChange={handleChange}
                      required
                      style={{
                        color: 'black',
                        width: '100%',
                        padding: '8px',
                        marginTop: '4px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '10px' }}>
                    <label
                      style={{
                        marginRight: '80%',
                        fontWeight: 'bold',
                        color: 'black',
                      }}
                    >
                      Wohnort:
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '8px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        color: 'black',
                      }}
                    />
                  </div>

                  <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <button
                      type="submit"
                      style={{
                        backgroundColor: '#246292',
                        color: 'white',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        marginRight: '10px',
                      }}
                    >
                      Absenden
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowPopup(false)}
                      style={{
                        backgroundColor: 'gray',
                        color: 'white',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '6px',
                        cursor: 'pointer',
                      }}
                    >
                      Schließen
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
</div>




<div className="flex flex-col items-center justify-center py-10 text-center bg-white ">
  <h1 className="text-4xl md:text-5xl font-semibold mt-0">
    <span className="text-orange-600" style={{ color: "#246292" }}>Wir finden deinen </span>
    <span className="text-gray-700">perfekten Job</span>
    <span className="text-gray-500 text-3xl"> )</span>
  </h1>
  <p className="text-gray-600 max-w-5xl text-lg md:text-xl leading-relaxed">
    War keine interessante Stelle für dich in unserem Bewerberportal?
    Gerne schauen wir nach etwas maßgeschneidertem für dich. Wir sind
    erstklassig vernetzt und haben regelmäßigen Kontakt zu den
    TOP-Unternehmen der Region. Lade uns deinen Lebenslauf hier hoch und
    nutze unsere Beziehungen um die für dich perfekte Stelle zu finden.
    Auch Direktvermittlungen in Unternehmen (ohne Zeitarbeit) gehören zu
    unserem Tagesgeschäft.
  </p>
</div>




</>

  
  );
};

export default SigninPage;
