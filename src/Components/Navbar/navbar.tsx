"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MainLogo from "../../../public/M-removebg-preview.jpeg";
import Hamburger from "../../..//public/menu.png";
import NavModal from "../../Components/NavBarModal/NavBarModal";
import React, { useState } from "react";
import Call from "../../../public/call.png";
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
            <button className="btn-at-btm-aoda-ndajm" style={myFont.style}>
              {" "}
              <Image
                src={Call}
                alt=""
                className="acla-scg-adnljda-adwlwkm"
              />{" "}
              +91 917554 5760
            </button>
            <Link href="/Services">
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
