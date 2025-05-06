import React from "react";
const Contact = () => {
  return (
    <section id="contact" className="w-full py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-900">
    <div className="w-full px-4 mx-auto max-w-screen-xl">
      <div className="w-full px-4">
        <div
          className="rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px]"
          data-wow-delay=".15s"
        >
      <h2
  className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white text-center sm:text-left"
  style={{ textAlign: 'justify' }}
>
  Sprechen Sie mit uns – Wir freuen uns auf Ihre Nachricht!
</h2>

<p
  className="mb-8 text-base sm:text-lg md:text-xl font-medium text-body-color dark:text-gray-300 text-center sm:text-left"
  style={{ textAlign: 'justify' }}
>
  Unser Support-Team wird sich so schnell wie möglich per E-Mail bei Ihnen melden.
</p>



  
<form>
  <div className="-mx-4 flex flex-wrap">
    {/* Name */}
    <div className="w-full px-4 md:w-1/2">
      <div className="mb-8">
        <label htmlFor="name" className="mb-3 block text-lg font-medium text-dark dark:text-white">
          Ihr Name
        </label>
        <input
          type="text"
          placeholder="Geben Sie Ihren Namen ein"
          className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-4 text-lg text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two"
        />
      </div>
    </div>

    {/* Email */}
    <div className="w-full px-4 md:w-1/2">
      <div className="mb-8">
        <label htmlFor="email" className="mb-3 block text-lg font-medium text-dark dark:text-white">
          Ihre E-Mail
        </label>
        <input
          type="email"
          placeholder="Geben Sie Ihre E-Mail-Adresse ein"
          className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-4 text-lg text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two"
        />
      </div>
    </div>

    {/* Company */}
    <div className="w-full px-4 md:w-1/2">
      <div className="mb-8">
        <label htmlFor="company" className="mb-3 block text-lg font-medium text-dark dark:text-white">
          Firmenname
        </label>
        <input
          type="text"
          placeholder="Geben Sie den Namen Ihrer Firma ein"
          className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-4 text-lg text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two"
        />
      </div>
    </div>

    {/* Phone */}
    <div className="w-full px-4 md:w-1/2">
      <div className="mb-8">
        <label htmlFor="phone" className="mb-3 block text-lg font-medium text-dark dark:text-white">
          Telefonnummer
        </label>
        <input
          type="tel"
          placeholder="Geben Sie Ihre Telefonnummer ein"
          className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-4 text-lg text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two"
        />
      </div>
    </div>

    {/* Message */}
    <div className="w-full px-4">
      <div className="mb-8">
        <label htmlFor="message" className="mb-3 block text-lg font-medium text-dark dark:text-white">
          Ihre Nachricht
        </label>
        <textarea
          name="message"
          rows={5}
          placeholder="Geben Sie Ihre Nachricht ein"
          className="border-stroke w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-4 text-lg text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two"
        ></textarea>
      </div>
    </div>

    {/* Submit Button */}
    <div className="w-full px-4">
      <button
        style={{ background: "#246292" }}
        className="rounded-full px-9 py-4 text-2xl font-bold text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
      >
        Absenden
      </button>
    </div>
  </div>
</form>

  
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default Contact;
