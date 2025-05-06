"use client";
import Image from "next/image";
import Link from "next/link";
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-1 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-1 max-w-[360px] lg:mb-16">
              <div className="flex justify-center items-center mt-0  rounded" style={{marginTop:"-40%", marginBottom:"-20%"}}>

<Link href="/">
  <div className="  w-full flex justify-center items-center">
    <img
      src="https://ik.imagekit.io/b6iqka2sz/assets/input-onlinepngtools-removebg-preview.png?updatedAt=1744642835143"
      alt="logo"
      className="w-full max-w-xs h-auto drop-shadow-[0_4px_8px_rgba(255,255,255,0.8)]"
    />
  </div>
</Link>

</div>



                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                Vertex Service bietet maßgeschneiderte Lösungen aus einer Hand. Persönlich. Flexibel. Professionell.
                </p>
                <div className="flex items-center space-x-4">
  {/* Facebook */}
  <a
    href="https://www.facebook.com/share/1C3anp5aVi/?mibextid=wwXIfr"
    aria-label="Facebook"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-body-color hover:text-white hover:bg-blue-600 transition"
  >
    <svg
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 24 24"
       xmlns="http://www.w3.org/2000/svg"
    >
       <path
                        d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z"
                        fill="currentColor"
                      />
    </svg>
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/_vertexservice_/?igsh=MTBkNDV2cnI2cnl5ZQ%3D%3D#"
    aria-label="Instagram"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-body-color hover:text-white hover:bg-pink-500 transition"
  >
    <svg
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5c0 3.3-2.45 5.75-5.75 5.75h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm0 2C5.95 4 4.5 5.45 4.5 7.25v9.5C4.5 18.55 5.95 20 7.75 20h8.5c1.8 0 3.25-1.45 3.25-3.25v-9.5C19.5 5.45 18.05 4 16.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2.1a2.9 2.9 0 100 5.8 2.9 2.9 0 000-5.8zm4.75-1.9a1.15 1.15 0 110 2.3 1.15 1.15 0 010-2.3z"/>
    </svg>
  </a>

  {/* YouTube (Google) */}
  <a
  href="#"
  aria-label="Letter"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-body-color hover:text-white hover:bg-blue-500 transition"
>
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 5.01-8-5.01V6h16zM4 18V8.489l7.445 4.653a1 1 0 001.11 0L20 8.489V18H4z"/>
  </svg>
</a>

</div>

              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
  <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
    Nützliche Links
  </h2>
  <ul>
    <li>
      <Link
        href="/blog"
        className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
      >
        Über uns
      </Link>
    </li>
    <li>
      <Link
        href="/"
        className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
      >
        Dienstleistungen
      </Link>
    </li>
    <li>
      <Link
        href="/about"
        className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
      >
        Kontakt
      </Link>
    </li>
  </ul>
</div>

            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
  <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
    AGB
  </h2>
  <ul>
    <li>
      <Link
        href="/"
        className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
      >
        Impressum
      </Link>
    </li>
    <li>
      <Link
        href="/"
        className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
      >
        Datenschutzrichtlinie
      </Link>
    </li>
    <li>
      <Link
        href="/"
        className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
      >
        Allgemeine Geschäftsbedingungen
      </Link>
    </li>
  </ul>
</div>

            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
  <div className="mb-12 lg:mb-16">
    <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
      Kontakt
    </h2>
    <ul>
      <li className="flex items-center mb-4 text-base text-body-color dark:text-body-color-dark">
        <MdEmail className="mr-2 text-xl" />
        <a href="mailto:vertexservice01@gmail.com">vertexservice01@gmail.com</a>
      </li>
      <li className="flex items-center mb-4 text-base text-body-color dark:text-body-color-dark">
        <MdPhone className="mr-2 text-xl" />
        <a href="tel:+1234567890">0178 4719815 <br/>
        0162 8203518</a>
      </li>
      <li className="flex items-center mb-4 text-base text-body-color dark:text-body-color-dark">
        <MdLocationOn className="mr-2 text-xl" />
        Weilerstraße 2, 88499 Riedlingen
      </li>
    </ul>
  </div>
</div>

          </div>

          <div className="h-px w-full bg-linear-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
  <p className="text-center text-base text-body-color dark:text-white">
    Copyright by{" "}
    <a
      href="http://uideck.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-primary"
    >
      <b>-Webroof</b>
    </a>
  </p>
</div>

        </div>
        <div className="absolute right-0 top-14 z-[-1]">
          <svg
            width="55"
            height="99"
            viewBox="0 0 55 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
            <mask
              id="mask0_94:899"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="99"
              height="99"
            >
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="#4A6CF7"
              />
            </mask>
            <g mask="url(#mask0_94:899)">
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="url(#paint0_radial_94:899)"
              />
              <g opacity="0.8" filter="url(#filter0_f_94:899)">
                <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_94:899"
                x="12.4852"
                y="-15.1763"
                width="82.7646"
                height="82.7646"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="10.5"
                  result="effect1_foregroundBlur_94:899"
                />
              </filter>
              <radialGradient
                id="paint0_radial_94:899"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
              >
                <stop stopOpacity="0.47" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-24 left-0 z-[-1]">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94:889)"
            />
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)"
            />
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)"
            />
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)"
              strokeWidth="0.7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_94:889"
                x1="-41"
                y1="21.8445"
                x2="36.9671"
                y2="59.8878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_94:889"
                x1="25.6675"
                y1="95.9631"
                x2="-42.9608"
                y2="20.668"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_94:889"
                x1="20.325"
                y1="-3.98039"
                x2="90.6248"
                y2="25.1062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_94:889"
                x1="18.3642"
                y1="-1.59742"
                x2="113.9"
                y2="80.6826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_94:889"
                x1="61.1098"
                y1="62.3249"
                x2="-8.82468"
                y2="58.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_94:889"
                x1="65.4236"
                y1="65.0701"
                x2="24.0178"
                y2="41.6598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
