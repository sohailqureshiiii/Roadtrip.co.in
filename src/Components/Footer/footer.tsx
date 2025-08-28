import Image from "next/image";
import React from "react";
import MainLogo from "../../../public/M-removebg-preview.jpeg";
import Link from "next/link";
import LinkedIn from "../../../public/linkedin.svg";
import Faceboook from "../../../public/facebook.svg";
import Twitter from "../../../public/social.svg";
import localFont from "next/font/local";
const myFont = localFont({ src: "../../../Fonts/Montserrat-Medium.ttf" });

export const Footer = () => {
  return (
    <>
      <div className="back-grond-for-footer-at-bottom-end">
        <div
          className="displayflexat-ns padding-toop-for-footer"
          style={myFont.style}
        >
          <div className="header-layout-at-main-section flxin-for-sdfg">
            <div className="white-box-with-background-on-footer-left">
              <div>
                <Image src={MainLogo} width={150} alt="" />
                <h2 className="header-at-footer-for-company-logo">
                  RoadTrip.co.in
                </h2>
                <div>
                  <p className="secound-para-header-at-footer-line">
                    “Safe, reliable, and comfortable <br /> cab services for
                    every journey.”
                  </p>
                </div>
              </div>
              <p className="folow-us-header-at-footer-in-botttom">Follow Us</p>
              <div className="flx-in-for-follow-btn-at-bottom-last-end">
                <Link href={"/"}>
                  <Image src={LinkedIn} width={20} alt="LinkedIn" />
                </Link>
                <Link href={"/"}>
                  <Image src={Faceboook} width={20} alt="Facebook" />
                </Link>
                <Link href={"/"}>
                  <Image src={Twitter} width={20} alt="Twitter" />
                </Link>
              </div>
            </div>
            <div className="padding-for-the-adress-and-other-opt-at-footer">
              <div
                className="flx-in-use-full-loink-and-servoces"
                style={myFont.style}
              >
                <div>
                  <div className="usefull-links-in-fotters-sectios-cjhs">
                    Useful Links
                  </div>
                  <div className="botom-line-of-luse-fil-links-snidr"></div>
                  <div>
                    <div className="links-name-at-footer-secctions-djs">
                      <Link href="/">Home</Link>
                    </div>
                    <div className="links-name-at-footer-secctions-djs">
                      <Link href="/service">Services</Link>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="usefull-links-in-fotters-sectios-cjhs">
                    Contact Us
                  </div>
                  <div className="botom-line-of-luse-fil-links-snidr"></div>
                  <div>
                    <div className="links-name-at-footer-secctions-djs">
                      <li>+91 98226 95309</li>
                    </div>
                    <div className="links-name-at-footer-secctions-djs">
                      <li>+91 92847 90752</li>
                    </div>
                    <div className="links-name-at-footer-secctions-djs">
                      <li>+91 94033 97445</li>
                    </div>
                    <div className="links-name-at-footer-secctions-djs">
                      <li>support@roadtrip.com</li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="displayflexat-ns">
          <div className="wid-sjdkf-wfw-wjepfw-rwsd">
            <div className="big-width-border-at-vskjskmf-dkf"></div>
            <div style={myFont.style}>
              <div className="dis-dss-sddjk-webksd-zcnd">
                <div className="tp-in-ftr-mobile-view-only">
                  <div>
                    <div className="flx-for-img-and-office-country">
                      <h2 className="service-header-at-footer-section">
                        Find Us
                      </h2>
                    </div>
                    <div>
                      <p className="adress-para-at-footer-sd">
                        Plot No. 75, Sarthank Green Society, Gat No. 1487 Diamod
                        Water Park Road, Wagholi, Pune - 412207
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="displayflexat-ns" style={myFont.style}>
          <div className="wid-sjdkf-wfw-wjepfw-rwsd">
            <div className="big-width-border-at-vskjskmf-dkf"></div>
          </div>
        </div>
        <div className="displayflexat-ns" style={myFont.style}>
          <div className="wid-sjdkf-wfw-wjepfw-rwsd">
            <p className="udsjdoicsklslkm">
              © Copyright 2025. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
