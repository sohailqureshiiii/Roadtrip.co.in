import React from "react";
import { Navbar } from "../Components/Navbar/navbar";
import "../app/globals.css";
const myFont = localFont({ src: "../../Fonts/Montserrat-Medium.ttf" });
import localFont from "next/font/local";
import { Footer } from "../Components/Footer/footer";
import Link from "next/link";

const aboutus = () => {
  return (
    <>
      <Navbar />
      {/* ------------------  */}
      <div
        className="displayflexat-ns special-padding-nd-top-senkjc"
        style={myFont.style}
      >
        <div className="header-layout-at-main-section">
          <h1 className="hone-large-title-fr-hdr-in-main-layout">
            Welcome to Malhotracitytrans
          </h1>
          <h1 className="hone-large-title-fr-hdr-in-main-layout">
            Smart Employee Transportation Solutions
          </h1>
          <p className="para-at-main-layout-atnew-sec">
            At Malhotracitytrans, we specialize in providing safe, reliable, and
            efficient transportation solutions for corporate employees. Our
            advanced Employee Transportation Management system ensures seamless
            travel experiences, enhancing productivity while prioritizing
            employee safety and convenience.
          </p>
          <div className="displayflexat-ns">
            <Link href={"/services"}>
              <button className="button-fr-srvices-pagr-athds-jhdsn">
                Explore Service
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* --------------  */}
      <div className="bur-colr-section-at-ssecound-sct  mrgin-tp-sjcnskc">
        <div className="displayflexat-ns " style={myFont.style}>
          <div className="header-layout-at-main-section">
            <p className="section-main-hdr-fr-wht-sec"> Hello! Welcome to</p>
            <h1 className="hone-section-at-rodn-skk">MalhotraCityTrans</h1>
          </div>{" "}
        </div>
      </div>
      <div className="displayflexat-ns" style={myFont.style}>
        <div className="header-layout-at-main-section padding-ionlude-for-mobile-view-sds">
          <div className="flx-nin-two-compo-at-sbic">
            <div className="widht-for-para-section-at-secound-sect">
              <p className="first-para-at-schl-sectio-sjkdjs">
                Welcome to Malhotracitytrans, your trusted partner in smart
                corporate transportation solutions. We specialize in providing
                seamless, safe, and efficient employee transport services
                tailored to meet the needs of businesses of all sizes. Our
                technology-driven approach ensures that corporate employees
                experience hassle-free, on-time, and secure commutes every day.
                <br />
                With a strong commitment to reliability and innovation, we aim
                to transform the way companies manage employee transportation,
                offering advanced fleet solutions that maximize efficiency,
                reduce costs, and enhance overall workforce productivity.
                <br /> At Malhotracitytrans, we believe that transportation
                should never be a challenge for businesses or employees. Our
                goal is to make corporate commuting effortless, allowing
                employees to focus on their work while we take care of their
                travel needs.
                <br />
                Through continuous innovation, advanced technology, and an
                unwavering commitment to excellence, we are shaping the future
                of employee transportation—one safe and reliable ride at a time.
              </p>
            </div>
            <div className="third-left-top-minus-sect" style={myFont.style}>
              <div className="back-rnd-white-at-left-section">
                <p className="fc-facts-for-ajdksn">Achievements So Far</p>
                <div className="diply-cemntr-at-sction-for-whitelisb">
                  <div className="color-line-at-center-of-left-section"></div>
                </div>
                <div>
                  <p className="number-achienved-by-shools-sdjk">100%</p>
                  <p className="secound-line-of-sleft-sdide">Work Done!</p>
                  <p className="para-at-side-ltions"></p>
                </div>
                <div>
                  <p className="number-achienved-by-shools-sdjk">100%</p>
                  <p className="secound-line-of-sleft-sdide">Staff Guarantee</p>
                  <p className="para-at-side-ltions"></p>
                </div>
                <div>
                  <p className="number-achienved-by-shools-sdjk">100%</p>
                  <p className="secound-line-of-sleft-sdide">
                    Safety & Security
                  </p>
                  <p className="para-at-side-ltions"></p>
                </div>
                <div>
                  <p className="number-achienved-by-shools-sdjk">145+</p>
                  <p className="secound-line-of-sleft-sdide">
                    Professional Team
                  </p>
                  <p className="para-at-side-ltions"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------- */}
      <div className="scrolling_text" style={myFont.style}>
        <div className="text">
          <span>Working Hours : 07:00am to 05:30pm</span>
          <span> Phone : +91 98928 14653</span>
          <span> Email : Rfces.manage@gmail.com</span>
          <span> Address : Rehmat Ali Road, 1st Rabodi ,Thane(W)</span>
        </div>
        <div className="text">
          <span>Working Hours : 07:00am to 05:30pm</span>
          <span> Phone : +91 98928 14653</span>
          <span> Email : Rfces.manage@gmail.com</span>
          <span> Address : REHMAT ALI ROAD, 1st Rabodi ,THANE(W)</span>
        </div>
      </div>
      {/* ------------  */}
      <div className="vsion-and-aim-padding-top-extra">
        <div className="displayflexat-ns" style={myFont.style}>
          <div className="header-layout-at-main-section nonpading-area-fr-skjds">
            <h4
              className="section-header-at-about-page-view "
              data-aos="fade-up"
            >
              OUR VISION AND MISSION{" "}
            </h4>
            <div className="extra-border-with" data-aos="fade-up"></div>
          </div>
        </div>
        <div
          className="backgroud-orange-at-fourth-section-in-os"
          style={myFont.style}
        >
          <div className="displayflexat-ns">
            <div className="header-layout-at-main-section padding-bottom-at-orangesec">
              <div className="flx-for-misson-and-vison-section-area">
                <div data-aos="fade-up">
                  <h5 className="header-of-our-vision-white-clor">
                    OUR VISION
                  </h5>
                  <div className="border-section-white-down-at-vison"></div>
                  <p className="para-at-vision-sjks-sknd">
                    At Malhotracitytrans, our vision is to revolutionize
                    corporate transportation by offering smart, seamless, and
                    sustainable mobility solutions.
                  </p>
                </div>
                <div data-aos="fade-up" className="tp-moblr-skjdo">
                  <h5 className="header-of-our-vision-white-clor">
                    OUR MISSION
                  </h5>
                  <div className="border-section-white-down-at-vison"></div>
                  <p className="para-at-vision-sjks-sknd">
                    Our mission is to simplify corporate transportation through
                    cutting-edge technology, operational excellence, and a
                    customer-first approach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------  */}

      <Footer />
    </>
  );
};

export default aboutus;
