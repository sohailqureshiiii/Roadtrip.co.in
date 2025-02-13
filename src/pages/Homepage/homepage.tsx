"use client";
import { useEffect, useState } from "react";
import { Navbar } from "../../Components/Navbar/navbar";
import { Footer } from "../../Components/Footer/footer";
import localFont from "next/font/local";
import TeamsImg from "../../../public/group.svg";
import ExperienceImg from "../../../public/quality.svg";
import SuccessImg from "../../../public/growth.svg";
import BackgroundImage from "../../../public/car-rental-wallpaper.jpg";
import ServiceImage from "../../../public/Professional-Transport.webp";
import Image from "next/image";
import ServiceComponent from "../../Components/FetureComponents/ServiceComponent";
import Link from "next/link";
const myFont = localFont({ src: "../../../Fonts/Montserrat-Medium.ttf" });
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

export const Homepage = () => {
  const [show, setShow] = useState(false);
  // FAQ----
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);
  const [faq5, setFaq5] = useState(false);
  // ----- Animation ----

  useEffect(() => {
    AOS.init({
      duration: "1000",
    });
  }, []);
  return (
    <>
      <Head>
        <meta
          name="description"
          content="The search for quality leads is never-ending, but with the right solutions, your business can reach the pinnacle of success."
        />
        <meta
          name="keywords"
          content="business, B2B, B2B Solutions, B2B services, lead generation, ROI,LEADS GENERATED,
          CAMPAIGNS,AdvertMssssssarketers,quality leads,20+ years of rich experience, best leads, 
          high-quality data,metrics,analytics,Marketing,DEMAND GENERATION, Sales Development, 
          Database Services, Digitaldeft Marketing ,Account Based Marketing, Content Marketing, 
          Event Promotion ,Marketing Qualified Lead (MQL), Appointment Generation, BANT Lead,
          Confirmed Call Back, Sales Qdualified Lead, Database Services, B2B List Building, Database Cleansing,
          Install Database, Digital Marketing, Email Marketing, Market Research, SEO Services"
        />
      </Head>
      <div style={myFont.style}>
        <Navbar />
        {/* ------------- Section one -----------  */}
        <div>
          <Image
            src={BackgroundImage}
            alt=""
            className="Backround-image-for-home-aifdsj"
          />

          <div className="displayflexat-ns ">
            <div className="header-layout-at-main-section">
              <div className="special-padding-nd-top-senkjc">
                <h1
                  className="headr-for-webste-in-trensport-nalhotra"
                  style={myFont.style}
                >
                  Your Journey <br />
                  Our Priority
                </h1>
                <div className="flx-indc-aikjdna">
                  <p className="para-cete-rherd-aloknowa">
                    Imagine the ease of managing all your corporate commute
                    needs all through a single, user-friendly app. From daily
                    employee office commutes to effortless visitor access and a
                    seamless parking solution – Routematic streamlines your
                    operations and empowers a happier, more productive
                    workforce.
                  </p>
                </div>
                <div className="flx-indc-aikjdna spamcieb-betwwedkj">
                  <Link href={"/contactus"}>
                    <button className="button-for-cntct-us-sonf">
                      Contact Us
                    </button>
                  </Link>
                  <Link href={"/aboutus"}>
                    <button className="btn-frrr-knw-mre-at-sdjn">
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
        <div>
          <div className="bur-colr-section-at-ssecound-sct  mrgin-tp-sjcnskc">
            <div className="displayflexat-ns " style={myFont.style}>
              <div className="header-layout-at-main-section">
                <p className="section-main-hdr-fr-wht-sec">
                  {" "}
                  Hello! Welcome to
                </p>
                <h1 className="hone-section-at-rodn-skk">MalhotraCityTrans</h1>
              </div>{" "}
            </div>
          </div>
          <div className="displayflexat-ns" style={myFont.style}>
            <div className="header-layout-at-main-section">
              <div className="flx-nin-two-compo-at-sbic">
                <div className="widht-for-para-section-at-secound-sect">
                  <p className="first-para-at-schl-sectio-sjkdjs">
                    Welcome to Malhotracitytrans, your trusted partner in smart
                    corporate transportation solutions. We specialize in
                    providing seamless, safe, and efficient employee transport
                    services tailored to meet the needs of businesses of all
                    sizes. Our technology-driven approach ensures that corporate
                    employees experience hassle-free, on-time, and secure
                    commutes every day.
                    <br />
                    With a strong commitment to reliability and innovation, we
                    aim to transform the way companies manage employee
                    transportation, offering advanced fleet solutions that
                    maximize efficiency, reduce costs, and enhance overall
                    workforce productivity.
                    <br /> At Malhotracitytrans, we believe that transportation
                    should never be a challenge for businesses or employees. Our
                    goal is to make corporate commuting effortless, allowing
                    employees to focus on their work while we take care of their
                    travel needs.
                    <br />
                    Through continuous innovation, advanced technology, and an
                    unwavering commitment to excellence, we are shaping the
                    future of employee transportation—one safe and reliable ride
                    at a time.
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
                      <p className="secound-line-of-sleft-sdide">
                        Staff Guarantee
                      </p>
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
        </div>
        <div className="displayflexat-ns back-wgite-firian">
          <div className="header-layout-at-main-section">
            <div className="extra-tp-marg-insdj" style={myFont.style}>
              <p className="third-para-header-at-ijnck" data-aos="fade-up">
                Why Choose Malhotracitytrans?
              </p>
              <h1 className="hone-large-title-fr-hdr-in-main-layout pad-left-for-hdr-in-mob only-center-this-dhr">
                Safe, Reliable, and Efficient
              </h1>
              <h1 className="hone-large-title-fr-hdr-in-main-layout pad-left-for-hdr-in-mob only-center-this-dhr">
                Transportation Solutions
              </h1>
            </div>
            <div className="efioefkls-esolk-dsk " style={myFont.style}>
              {" "}
              <div className="flx-section-wihtjd extra-tp-marg-insdj">
                <div className="flx-with-img-and-hdr-and-para">
                  <div className="flx-fr-im-of-hwye-dis">
                    <div className="border-for-backgrnd-img-left">
                      <Image
                        src={TeamsImg}
                        width={50}
                        height={50}
                        alt="Demandscoop"
                      />
                    </div>
                  </div>
                  <div>
                    <h5 className="hdr-at-three-section-of-why">
                      Safe & Secure Rides
                    </h5>
                    <p className="para-at-three-section-of-why-choose-us">
                      GPS-tracked cabs with trained and verified drivers.
                    </p>
                  </div>
                </div>
                <div className="flx-with-img-and-hdr-and-para">
                  <div className="flx-fr-im-of-hwye-dis">
                    <div className="border-for-backgrnd-img-left">
                      <Image
                        src={ExperienceImg}
                        width={50}
                        height={50}
                        alt="Demandscoop"
                      />
                    </div>{" "}
                  </div>
                  <div>
                    <h5 className="hdr-at-three-section-of-why">
                      On-Time, Every Time
                    </h5>
                    <p className="para-at-three-section-of-why-choose-us">
                      Punctual pickups and drop-offs with real-time tracking.
                    </p>
                  </div>
                </div>
                <div className="flx-with-img-and-hdr-and-para">
                  <div className="flx-fr-im-of-hwye-dis">
                    {" "}
                    <div className="border-for-backgrnd-img-left">
                      <Image
                        src={SuccessImg}
                        width={50}
                        height={50}
                        alt="Demandscoop"
                      />
                    </div>{" "}
                  </div>
                  <div>
                    <h5 className="hdr-at-three-section-of-why">
                      Cost-Effective & Scalable
                    </h5>
                    <p className="para-at-three-section-of-why-choose-us">
                      Customizable solutions to fit your business needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
        {/* ------- FAQ SECTION -------  */}
        <div
          className="displayflexat-ns extra-tp-paddidng-insdj back-wgite-firian"
          style={myFont.style}
        >
          <div className="header-layout-at-main-section">
            <h4 className="section-header-at-home-page-view" data-aos="fade-up">
              FREQUENTLY ASKED QUESTION
            </h4>
            <div className="width-large-at-vos" data-aos="fade-up"></div>
            <h4 className="got-ques-header-at-faqs" data-aos="fade-up">
              Got Questions ? We've Got Answers.{" "}
            </h4>
            <div>
              <div
                className="cntr-btwn-lines-at-faq-sec"
                data-aos="fade-up"
              ></div>
              <div
                data-aos="fade-up"
                className="flx-fr-faq-questionand-plus"
                onClick={() => setFaq1(!faq1)}
              >
                <p className="white-txt-at-faq-sect">
                  What services does Malhotracitytrans offer?
                </p>
                {faq1 ? (
                  <p className="white-txt-at-faq-sect extralarge-font">-</p>
                ) : (
                  <p className="white-txt-at-faq-sect extralarge-font">+</p>
                )}
              </div>
              {faq1 ? (
                <p className="faq-answer-at-faq-sectionsk">
                  We provide a range of corporate transportation solutions,
                  including scheduled employee shuttle services, on-demand cabs,
                  corporate carpooling, real-time tracking, and automated
                  scheduling. Our services are designed to ensure safe,
                  reliable, and cost-effective commutes for employees.
                </p>
              ) : null}
              <div
                className="cntr-btwn-lines-at-faq-sec"
                data-aos="fade-up"
              ></div>
              <div
                className="flx-fr-faq-questionand-plus"
                onClick={() => setFaq2(!faq2)}
                data-aos="fade-up"
              >
                <p className="white-txt-at-faq-sect">
                  How does the real-time tracking system work?
                </p>
                {faq2 ? (
                  <p className="white-txt-at-faq-sect extralarge-font">-</p>
                ) : (
                  <p className="white-txt-at-faq-sect extralarge-font">+</p>
                )}
              </div>
              {faq2 ? (
                <p className="faq-answer-at-faq-sectionsk">
                  Our vehicles are equipped with GPS tracking, allowing
                  employees and employers to monitor rides in real-time.
                  Employees receive live updates on arrival times, routes, and
                  driver details, ensuring a safe and transparent commuting
                  experience.
                </p>
              ) : null}
              <div
                className="cntr-btwn-lines-at-faq-sec"
                data-aos="fade-up"
              ></div>
              <div
                className="flx-fr-faq-questionand-plus"
                onClick={() => setFaq3(!faq3)}
                data-aos="fade-up"
              >
                <p className="white-txt-at-faq-sect">
                  How do you ensure employee safety during travel?
                </p>
                {faq3 ? (
                  <p className="white-txt-at-faq-sect extralarge-font">-</p>
                ) : (
                  <p className="white-txt-at-faq-sect extralarge-font">+</p>
                )}
              </div>
              {faq3 ? (
                <p className="faq-answer-at-faq-sectionsk">
                  Safety is our top priority. Our fleet includes verified and
                  trained drivers, live tracking, emergency panic buttons, and
                  24/7 customer support. We also implement route optimization
                  and regular vehicle maintenance to enhance travel security.
                </p>
              ) : null}
              <div
                className="cntr-btwn-lines-at-faq-sec"
                data-aos="fade-up"
              ></div>
              <div
                className="flx-fr-faq-questionand-plus"
                onClick={() => setFaq4(!faq4)}
                data-aos="fade-up"
              >
                <p className="white-txt-at-faq-sect">
                  Can we customize transportation plans based on our company’s
                  needs?
                </p>
                {faq4 ? (
                  <p className="white-txt-at-faq-sect extralarge-font">-</p>
                ) : (
                  <p className="white-txt-at-faq-sect extralarge-font">+</p>
                )}
              </div>
              {faq4 ? (
                <p className="faq-answer-at-faq-sectionsk">
                  Yes! We offer customized transportation plans tailored to your
                  business requirements, including shift-based commutes,
                  specific pickup and drop-off locations, and flexible
                  scheduling to match your employees' work hours.
                </p>
              ) : null}
              <div
                className="cntr-btwn-lines-at-faq-sec"
                data-aos="fade-up"
              ></div>
              <div
                className="flx-fr-faq-questionand-plus"
                onClick={() => setFaq5(!faq5)}
                data-aos="fade-up"
              >
                <p className="white-txt-at-faq-sect">
                  How can my company partner with Malhotracitytrans?
                </p>
                {faq5 ? (
                  <p className="white-txt-at-faq-sect extralarge-font">-</p>
                ) : (
                  <p className="white-txt-at-faq-sect extralarge-font">+</p>
                )}
              </div>
              {faq5 ? (
                <p className="faq-answer-at-faq-sectionsk">
                  Getting started is easy! Simply contact us via phone, email,
                  or our website, and our team will work with you to assess your
                  transportation needs, create a tailored plan, and ensure a
                  smooth onboarding process.
                </p>
              ) : null}
              <div
                className="cntr-btwn-lines-at-faq-sec"
                data-aos="fade-up"
              ></div>
            </div>
          </div>{" "}
        </div>
        <Footer />
      </div>{" "}
    </>
  );
};
