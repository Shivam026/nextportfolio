import Logo from '@/components/Logo'
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import Link from 'next/link'
import React from 'react'
import Button from "@/components/Button";
import { useEffect, useState } from "react";
function Navbar() {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [responsiveNavVisible, setResponsiveNavVisible] = useState(false);
  const sectionLinks = [
    { name: "About", link: "/#about" },
    { name: "Experience", link: "/#experience" },
    { name: "Work", link: "/#work" },
    {
      name: "Contact",
      link: "/#contact",
    },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 100
        ? setNavbarVisible(true)
        : setNavbarVisible(false);
    });
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll(".nav-items-list-item-link");
    links.forEach((link) => {
      link.addEventListener("click", () => setResponsiveNavVisible(false));
    });
    const nav = document.querySelector(".nav-items");
    nav?.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    const html = document.querySelector("html");
    html?.addEventListener("click", (e) => {
      setResponsiveNavVisible(false);
    });
  }, []);

  useEffect(() => {
    const main = document.querySelector("main");
    if (responsiveNavVisible) {
      main?.classList.add("blur");
    } else {
      main?.classList.remove("blur");
    }
  }, [responsiveNavVisible]);
  return (
    <nav>
        <div className={`wrapper ${navbarVisible ? "blur-nav" : ""}`}>
            <div className="brand">
                <Link href="https://www.linkedin.com/in/shivamsharma026/">
                <Logo />
                </Link>
            </div>
            <div
          className="nav-responsive-toggle">
          {responsiveNavVisible ? (
            <CgClose
              onClick={(e) => {
                e.stopPropagation();
                setResponsiveNavVisible(false);
              }}
            />
          ) : (
            <GiHamburgerMenu
              onClick={(e) => {
                e.stopPropagation();
                setResponsiveNavVisible(true);
              }}
            />
          )}
        </div>
        <div
          className={`${responsiveNavVisible && "nav-responsive"} nav-items`}
        >
              <ul className="nav-items-list">
                {sectionLinks.map(({name , link})=>(
                  <li key={name} className='nav-items-list-item'>
                    <Link href={link} className='nav-items-list-item-link'>{name}</Link>
                  </li>

                ))}
              </ul>
              <div className="nav-items-button">
                <Button text='Resume' link="https://nextportfolio-s.vercel.app/resume.pdf"/>
              </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
