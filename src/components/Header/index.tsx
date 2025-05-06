"use client";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  return (
    <>
      <header
      style={{background:"#1e232e"}}
        className={`header top-0 left-0 z-40 flex w-full items-center   ${
          sticky
            ? "dark:bg-gray-dark dark:shadow-sticky-dark shadow-sticky fixed z-9999 bg-white/80 backdrop-blur-xs transition"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-100 max-w-full  xl:mr-5" style={{marginTop:"-6%", marginBottom:"-7%"}}>
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
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="ring-primary absolute top-1/2 right-4 block translate-y-[-50%] rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
  id="navbarCollapse"
  className={`navbar border-body-color/50 dark:border-body-color/20 dark:bg-dark absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-white px-2 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
    navbarOpen
      ? "visibility top-full opacity-100"
      : "invisible top-[120%] opacity-0"
  }`}
>
  <ul className="block  lg:flex lg:space-y-0 lg:space-x-20" >
    {menuData.map((menuItem, index) => (
      <li key={index} className="group relative">
        {menuItem.path ? (
          <Link
            href={menuItem.path}
            className={`flex py-1 text-xl font-bold lg:mr-0 lg:inline-flex  lg:py-1 ${
              usePathName === menuItem.path
                ? "text-primary dark:text-white"
                : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
            }`}
          >
            {menuItem.title}
          </Link>
        ) : (
          <>
            <p
              onClick={() => handleSubmenu(index)}
              className="text-dark text-xl font-bold group-hover:text-primary flex cursor-pointer items-center justify-between py-2 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 dark:text-white/70 dark:group-hover:text-white"
            >
              {menuItem.title}
              <span className="pl-3">
                <svg width="25" height="24" viewBox="0 0 25 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </p>
            <div
              className={`submenu dark:bg-dark relative top-full left-0 rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                openIndex === index ? "block" : "hidden"
              }`}
            >
              {menuItem.submenu.map((submenuItem, subIndex) => (
                <Link
                  href={submenuItem.path}
                  key={subIndex}
                  className="text-dark text-lg font-bold hover:text-primary block rounded-sm py-2.5 lg:px-3 dark:text-white/70 dark:hover:text-white"
                >
                  {submenuItem.title}
                </Link>
              ))}
            </div>
          </>
        )}
      </li>
    ))}
  </ul>
</nav>

              </div>
           
<div className="flex items-center justify-end ">
{/* Social Icons */}
<div className="flex items-center gap-3 lg:flex hidden">
  <Link
    href="https://www.facebook.com/share/1C3anp5aVi/?mibextid=wwXIfr"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="bg-white rounded-full p-3 shadow hover:shadow-md transition">
      <FaFacebookF className="text-base text-blue-600 hover:text-blue-800" />
    </div>
  </Link>

  <Link
    href="https://www.instagram.com/_vertexservice_/?igsh=MTBkNDV2cnI2cnl5ZQ%3D%3D#"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="bg-white rounded-full p-3 shadow hover:shadow-md transition">
      <FaInstagram className="text-base text-pink-500 hover:text-pink-600" />
    </div>
  </Link>
</div>




  {/* Sign Up Button */}
  {/* <Link
  style={{ background: "#246292" }}
  href="/signup"
  className="ease-in-up shadow-btn hover:shadow-btn-hover hover:bg-primary/90 hidden rounded-full px-8 py-3 text-base font-medium text-white transition duration-300 md:block md:px-9 lg:px-6 xl:px-9"
>
  Jetzt buchen
</Link> */}


  {/* Theme Toggle */}
  {/* <div>
    <ThemeToggler />
  </div> */}
</div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
