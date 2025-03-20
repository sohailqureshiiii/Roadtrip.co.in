import React, { useEffect } from "react";
import { Navbar } from "../Components/Navbar/navbar";
import "../app/globals.css";
const myFont = localFont({ src: "../../Fonts/Montserrat-Medium.ttf" });
import localFont from "next/font/local";
import { Footer } from "../Components/Footer/footer";
import Link from "next/link";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";

const aboutus = () => {
  useEffect(() => {
    AOS.init({
      duration: "1000",
    });
  }, []);

  return (
    <>
      <Head>
        <title>
          About Us | Malhotra CityTrans - Corporate Transportation Experts
        </title>
        <meta
          name="description"
          content="Learn about Malhotra CityTrans, a leader in employee transportation management. Discover our mission, vision, and commitment to safe and efficient corporate travel."
        />
        <meta
          name="keywords"
          content="About Malhotra CityTrans Pvt Ltd, Employee Transport Solutions, Corporate Travel Management, Safe Employee Commutes, Corporate Mobility"
        />
      </Head>
      <Navbar />
      {/* ------------------  */}
      <div
        className="displayflexat-ns special-padding-nd-top-senkjc"
        style={myFont.style}
      >
        <div className="header-layout-at-main-section">
          <h1
            className="hone-large-title-fr-hdr-in-main-layout"
            data-aos="fade-up"
          >
            Welcome to Malhotra CityTrans Pvt Ltd
          </h1>
          <h1
            className="hone-large-title-fr-hdr-in-main-layout"
            data-aos="fade-up"
          >
            Smart Employee Transportation Solutions
          </h1>
          <p className="para-at-main-layout-atnew-sec" data-aos="fade-up">
            At Malhotra CityTrans Pvt Ltd, we specialize in providing safe,
            reliable, and efficient transportation solutions for corporate
            employees. Our advanced Employee Transportation Management system
            ensures seamless travel experiences, enhancing productivity while
            prioritizing employee safety and convenience.
          </p>
          <div className="displayflexat-ns">
            <Link href={"/services"}>
              <button
                className="button-fr-srvices-pagr-athds-jhdsn"
                data-aos="fade-up"
                style={myFont.style}
              >
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
            <h1 className="hone-section-at-rodn-skk">Malhotra CityTrans</h1>
          </div>{" "}
        </div>
      </div>
      <div className="displayflexat-ns" style={myFont.style}>
        <div className="header-layout-at-main-section padding-ionlude-for-mobile-view-sds">
          <div className="flx-nin-two-compo-at-sbic">
            <div className="widht-for-para-section-at-secound-sect">
              <p
                className="first-para-at-schl-sectio-sjkdjs"
                data-aos="fade-up"
              >
                Welcome to Malhotra CityTrans Pvt Ltd, your trusted partner in
                smart corporate transportation solutions since 2007. Previously
                known as Malhotra Tours and Travels, we have grown into a
                leading provider of seamless, safe, and efficient employee
                transport services, tailored to businesses of all sizes. Our
                fleet includes all types of vehicles, from BMWs and Mercedes to
                deluxe and outstation travel options, ensuring comfort and
                reliability. We proudly serve clients like Digicoption India Pvt
                Ltd, Jabil India Ltd, and Carraro India Ltd, providing
                nationwide corporate transport solutions, including Mathaly
                packages and all-India travel services. With a strong commitment
                to reliability and innovation, we aim to transform corporate
                transportation, offering advanced fleet solutions that maximize
                efficiency, reduce costs, and enhance workforce productivity. At
                Malhotracitytrans, we believe transportation should never be a
                challenge for businesses or employees. Our goal is to make
                corporate commuting effortless, allowing employees to focus on
                their work while we take care of their travel needs. Through
                continuous innovation, advanced technology, and an unwavering
                commitment to excellence, we are shaping the future of employee
                transportation—one safe and reliable ride at a time.
              </p>
            </div>
            <div className="third-left-top-minus-sect" style={myFont.style}>
              <div className="back-rnd-white-at-left-section">
                <p className="fc-facts-for-ajdksn" data-aos="fade-up">
                  Achievements So Far
                </p>
                <div className="diply-cemntr-at-sction-for-whitelisb">
                  <div
                    className="color-line-at-center-of-left-section"
                    data-aos="fade-up"
                  ></div>
                </div>
                <div data-aos="fade-up">
                  <p className="number-achienved-by-shools-sdjk">100%</p>
                  <p className="secound-line-of-sleft-sdide">Work Done!</p>
                  <p className="para-at-side-ltions"></p>
                </div>
                <div data-aos="fade-up">
                  <p className="number-achienved-by-shools-sdjk">100%</p>
                  <p className="secound-line-of-sleft-sdide">Staff Guarantee</p>
                  <p className="para-at-side-ltions"></p>
                </div>
                <div data-aos="fade-up">
                  <p className="number-achienved-by-shools-sdjk">100%</p>
                  <p className="secound-line-of-sleft-sdide">
                    Safety & Security
                  </p>
                  <p className="para-at-side-ltions"></p>
                </div>
                <div data-aos="fade-up">
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
      <div className="scrolling_text" style={myFont.style} data-aos="fade-up">
        <div className="text">
          <span> Phone : +91 98226 95309</span>
          <span> Email : support@malhotracitytrans.com</span>
          <span>
            {" "}
            Address : Plot No. 75, Sarthank Green Society, Gat No. 1487 Diamod
            Water Park Road, Wagholi, Pune - 412207
          </span>
        </div>
        <div className="text">
          <span> Phone : +91 92847 90752</span>
          <span> Email : support@malhotracitytrans.com</span>
          <span>
            {" "}
            Address : Plot No. 75, Sarthank Green Society, Gat No. 1487 Diamod
            Water Park Road, Wagholi, Pune - 412207
          </span>
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
