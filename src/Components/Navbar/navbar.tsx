"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MainLogo from "../../..//public/M-removebg-preview.png";
import Hamburger from "../../..//public/menu.png";
import NavModal from "../../Components/NavBarModal/NavBarModal";
import React, { useState } from "react";
import DropdownMenu from "../DropdownService/dropdownservice";
import localFont from "next/font/local";
const myFont = localFont({ src: "../../../Fonts/Montserrat-Medium.ttf" });

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="background-for-home-navigationbar" style={myFont.style}>
        <div className="layout-box-fr-navigation-sub-bx">
          <Link href="/">
            <div className="layout-box-fr-logo-in-jdwla">
              <Image
                src={MainLogo}
                alt="Logo"
                className="manana-logo-of-navbar-sejba"
              />
            </div>{" "}
          </Link>
          <div className="lx-in-ul-plus-list">
            <ul className="ul-list-for-navtion-at-home-screen-ajk">
              <li
                className={
                  router.pathname == "/"
                    ? "nav-tabs-links-at-Homescreen"
                    : "Inactive-nav-tabs-links-at-Homescreen"
                }
              >
                <Link href="/"> Home</Link>
              </li>
              <li
                className={
                  router.pathname == "/aboutus"
                    ? "nav-tabs-links-at-Homescreen"
                    : "Inactive-nav-tabs-links-at-Homescreen"
                }
              >
                <Link href="/aboutus"> About Us</Link>
              </li>
              <li className="Inactive-nav-tabs-links-at-Homescreen">
                <DropdownMenu
                  menu={<Link href="/services">Services</Link>}
                ></DropdownMenu>
              </li>
            </ul>
            <Link href="/contactus">
              <button
                style={myFont.style}
                className="btn-at-homepage-navbar-jsd"
                // style={myFont.style}
              >
                Contact us
              </button>
            </Link>
          </div>
          <div
            className="display-none-at-hamburger-iohs"
            onClick={() => setShow(true)}
          >
            <Image src={Hamburger} width={25} height={25} alt="logo" />
          </div>
        </div>
      </div>
      <NavModal visible={show} onClose={() => setShow(false)}></NavModal>
    </>
  );
};
