"use client";
import React from "react";
import Image from "../../node_modules/next/image";
import FirstArrow from "../../public/360_F_922418500_CmA5U5bXPkEg5QjXGokWwJ6ObsEjTxRT.jpg";
import SecoundArrow from "../../public/360_F_922418500_CmA5U5bXPkEg5QjXGokWwJ6ObsEjTxRT.jpg";
import FirstImageSec from "../../public/airortcabs.jpg";
import TwoImageSec from "../../public/fabcars-corporate-transfers-in-mumbai.webp";
import ThreeImageSec from "../../public/special_event.jpg";
import FourImageSec from "../../public/Outstation Taxi Service Pune.webp";
import BackForuth from "../../public/gettyimages-1337626553-640x640.jpg";
import Book from "../../public/appointment.png";
import Dollar from "../../public/money-banking.png";
import Carpick from "../../public/front-car.png";
import Standardcabs from "../../public/taxi13.png";
import Luxuxrycabs from "../../public/luxurycabsservice.webp";
import Maxycabs from "../../public/Vellfire.jpg";
import SUVcabs from "../../public/innova.png";
import BottomCar from "../../public/waesfgb.png";
import Check from "../../public/check.png";
import CustomerOne from "../../public/customepone.jpg";
import Customertwo from "../../public/customerthree.jpg";
import Customerthree from "../../public/customertwo.jpg";
import CrossImage from "../../public/crossimage.avif";
import Backgdneka from "../../public/soft-blue-red-gradient-wallpaper_789916-1458.avif";
import Call from "../../public/call.png";
import CheckSVG from "../../public/correct.svg";
import localFont from "next/font/local";
import { Navbar } from "../Components/Navbar/navbar";
import { Contactform } from "../Components/ContactForm/contactform";
import { Footer } from "../Components/Footer/footer";

const myFont = localFont({ src: "../../Fonts/Montserrat-Medium.ttf" });
const Homepage = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      {/* ------------- Section one -----------  */}
      {/* <div>
        <Image
          src={BackgroundImage}
          alt=""
          className="Backround-image-for-home-aifdsj"
        />

        <div className="displayflexat-ns ">
          <div className="header-layout-at-main-section">
            <div className="special-padding-nd-top-senkjc">
              <h1
                data-aos="fade-up"
                className="headr-for-webste-in-trensport-nalhotra"
                style={myFont.style}
              >
                Your Journey <br />
                Our Priority
              </h1>
              <div className="flx-indc-aikjdna">
                <p className="para-cete-rherd-aloknowa" data-aos="fade-up">
                  Welcome to Malhotra CityTrans Pvt Ltd, we specialize in
                  providing safe, reliable, and efficient transportation
                  solutions for corporate employees. Our advanced Employee
                  Transportation Management system ensures seamless travel
                  experiences, enhancing productivity while prioritizing
                  employee safety and convenience.
                </p>
              </div>
              <div className="flx-indc-aikjdna spamcieb-betwwedkj">
                <Link href={"/contactus"}>
                  <button
                    style={myFont.style}
                    className="button-for-cntct-us-sonf"
                    data-aos="fade-up"
                  >
                    Contact Us
                  </button>
                </Link>
                <Link href={"/aboutus"}>
                  <button
                    className="btn-frrr-knw-mre-at-sdjn"
                    data-aos="fade-up"
                    style={myFont.style}
                  >
                    Know More
                  </button>
                </Link>
              </div>
            </div>
          </div>{" "}
        </div>
      </div> */}
      <div className="bacjksa-ncl-abikal-ahja">
        <div>
          <Image src={Backgdneka} alt="" className="fixed-image-ataghdjhkwaj" />
        </div>
        <div
          className="displayflexat-ns extra-tp-marg-insdj clasdaik-white-heiskd"
          style={myFont.style}
        >
          <div className="header-layout-at-main-section">
            <div className="flx-of-two-coloms-in-mainsection tp-jkdwa-dlanwl">
              <div
                data-aos="fade-up"
                className="back-whte-ate-left-sebtocs-kjadm"
              >
                <div>
                  <div className="flx-aidkjn-awiledjkfds">
                    <h1 className="hdr-at-bx-in-left-section-sakbdj">
                      SERVICES ACROSS{" "}
                    </h1>
                    <h1 className="hdr-at-i-left-sred-section-ska">
                      All MAHARASHTRA CITIES
                    </h1>
                  </div>
                  <div>
                    <div className="mrg-tp-sect-ajkd-amd-adjdm">
                      <p className="iadwjk-ajeldnfa-wdkqdjn">From</p>
                      <div className="fr-inpit-acjkasn-box-ssan">
                        <input
                          style={myFont.style}
                          className="duhwad-akwj-input-at-akjawd"
                          type="text"
                          placeholder="Your Full Name"
                        />
                      </div>
                    </div>
                    <div className="mrg-tp-sect-ajkd-amd-adjdm">
                      <p className="iadwjk-ajeldnfa-wdkqdjn">To</p>
                      <div className="fr-inpit-acjkasn-box-ssan">
                        <input
                          style={myFont.style}
                          className="duhwad-akwj-input-at-akjawd"
                          type="text"
                          placeholder="Your Full Name"
                        />
                      </div>
                    </div>
                    <button
                      className="book-now-btn-at-left-sectiona-wdjka"
                      style={myFont.style}
                    >
                      Check Availability
                    </button>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="aidhk-width-awdjkad-adwjkam">
                <div className="fxlxj-fr-ajf-ahwukda">
                  <h1 className="fr-hedr-first-page-to-padln">
                    PUNE TO MUMBAI ONLY{" "}
                  </h1>
                  <h1 className="hdr-sned-jnad-backald">@ ₹12.75/km </h1>
                  <h1 className="fr-hedr-first-page-to-padln">Only</h1>
                </div>
                <p className="pajd-aukfjs-awdfnala-wdawodl-faoi">
                  At RoadTrip.co.in, we make travel stress-free with safe,
                  on-time rides for daily commutes, airport transfers,
                  outstation trips, and corporate travel – all backed by
                  well-maintained cars and professional drivers.
                </p>
                <div className="akdj-oadn-ajwkdanja">
                  <div className="flx-bx-at-left-sndka-cnca">
                    <Image
                      alt=""
                      className="img-fo-cheeck-at-left-akjf"
                      src={CheckSVG}
                    />
                    <p className="iadakdl-aodnlad-kajd">
                      Affordable & transparent pricing
                    </p>
                  </div>
                </div>
                <div className="akdj-oadn-ajwkdanja">
                  <div className="flx-bx-at-left-sndka-cnca">
                    <Image
                      alt=""
                      className="img-fo-cheeck-at-left-akjf"
                      src={CheckSVG}
                    />
                    <p className="iadakdl-aodnlad-kajd">
                      Wide range of cars – from budget to luxury
                    </p>
                  </div>
                </div>
                <div className="akdj-oadn-ajwkdanja">
                  <div className="flx-bx-at-left-sndka-cnca">
                    <Image
                      alt=""
                      className="img-fo-cheeck-at-left-akjf"
                      src={CheckSVG}
                    />
                    <p className="iadakdl-aodnlad-kajd">
                      Available 24/7, across multiple locations
                    </p>
                  </div>
                </div>
                <div>
                  <button className="btn-at-alkda-knmr-as">
                    Book Your Cab Now
                  </button>
                </div>
                <div>{/* <Image src={Swift} alt="" /> */}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bacjksa-ncl-abikal-ahja" id="about">
        <div
          className="displayflexat-ns extra-tp-marg-insdj"
          style={myFont.style}
        >
          <div className="header-layout-at-main-section">
            <div className="flx-of-two-coloms-in-mainsection">
              {" "}
              <div className="flx-of-two-coloms-in-mainsection adfsgrsews jus-cnakjnk">
                <Contactform />
                <div>
                  <div className="flx-hdr-in-styla-dad">
                    <h1 className="frdst-shedr-at-s-lestft-side">WE PROVIDE</h1>
                    <h1 className="clr-fll-tcxt-hdr-at-asdn">RELIABLE </h1>
                  </div>
                  <div className="flx-hdr-in-styla-dad">
                    <h1 className="frdst-shedr-at-s-lestft-side">AND </h1>
                    <h1 className="clr-fll-tcxt-hdr-at-asdn">TRUSTWORTHY</h1>
                  </div>
                  <div>
                    <h1 className="frdst-shedr-at-s-lestft-side">
                      CAB SERVICE IN
                    </h1>
                  </div>
                  <div>
                    <h1 className="frdst-shedr-at-s-lestft-side">INDIA</h1>
                  </div>
                  <p className="para-at-lefr-t-sde-djkadn">
                    Welcome to RoadTrip.co.in, your trusted partner in seamless
                    transportation. With years of experience in delivering
                    quality cab services, we’ve built our name on reliability,
                    comfort, and affordability.
                  </p>
                  <div className="flx-send-anldasfs">
                    <div className="flx-bx-at-left-sndka-cnca">
                      <Image
                        alt=""
                        className="img-fo-cheeck-at-left-akjf"
                        src={Check}
                      />
                      <h2 className="bx-xntnt-at-kajknad">
                        Easy online booking & quick confirmations
                      </h2>
                    </div>
                  </div>
                  <div className="flx-send-anldasfs">
                    <div className="flx-bx-at-left-sndka-cnca">
                      <Image
                        alt=""
                        className="img-fo-cheeck-at-left-akjf"
                        src={Check}
                      />
                      <h2 className="bx-xntnt-at-kajknad">
                        Flexible packages for hourly, daily & outstation trips
                      </h2>
                    </div>
                  </div>
                  <div className="flx-send-anldasfs">
                    <div className="flx-bx-at-left-sndka-cnca">
                      <Image
                        alt=""
                        className="img-fo-cheeck-at-left-akjf"
                        src={Check}
                      />
                      <h2 className="bx-xntnt-at-kajknad">
                        Hassle-free payment options (Cash, UPI, Cards)
                      </h2>
                    </div>
                  </div>
                  <div className="flx-send-anldasfs">
                    <div className="flx-bx-at-left-sndka-cnca">
                      <Image
                        alt=""
                        className="img-fo-cheeck-at-left-akjf"
                        src={Check}
                      />
                      <h2 className="bx-xntnt-at-kajknad">
                        Reliable, Safe, and Quality Service
                      </h2>
                    </div>
                  </div>
                  {/* <div>
                    <button className="btn-at-alkda-knmr-as">
                      Book Your Ride Today
                    </button>
                  </div> */}
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="back-round-at-hfand-ahdnal-nda">
        <div className="flx-of-two-coloms-in-mainsection">
          <div className="header-layout-at-main-section">
            <div>
              <div className="flx-in-fr-textbak-and">
                <h2
                  className="fnt-dsze-cnjoald-admdkwadmla"
                  style={myFont.style}
                >
                  OUR CAB{" "}
                </h2>
                <h2 className="doaa-dnakakds-awmrlfnaw" style={myFont.style}>
                  SERVICES
                </h2>
              </div>
              <div className="flx-in-fr-textbak-and">
                {" "}
                <p className="djadf-auwdna-aklc" style={myFont.style}>
                  HOW DO WE{" "}
                </p>
                <div className="a-abx-ahndma-akdbj-pmqklwdnqo">
                  <p
                    className="djadf-auwdna-aklc clr-aiuda-kwad"
                    style={myFont.style}
                  >
                    {" "}
                    STAND OUT{" "}
                  </p>
                </div>
                <p className="djadf-auwdna-aklc" style={myFont.style}>
                  FROM OTHERS
                </p>
              </div>
            </div>
            <div className="flx-anda-s-four-bx-ateb-ja">
              <div className="pad-ac-aidjn-awnd-ka-cadd" style={myFont.style}>
                <Image
                  src={FirstImageSec}
                  alt=""
                  className="img-at-sec-t-a-bx-afnak"
                />
                <div className="pddong-kad-awqwd-adakd ">
                  <h3>AIRPORT TRANSFER</h3>
                  <p className="para-addr-alkdnad-andam">
                    Enjoy timely, hassle-free airport pick-up and drop services
                    with comfort and safety guaranteed.
                  </p>
                  <button
                    className="dwadad-daldnkav-apdnadml-sv"
                    style={myFont.style}
                  >
                    Book Now
                  </button>
                </div>
              </div>
              <div className="pad-ac-aidjn-awnd-ka-cadd" style={myFont.style}>
                <Image
                  src={TwoImageSec}
                  alt=""
                  className="img-at-sec-t-a-bx-afnak"
                />
                <div className="pddong-kad-awqwd-adakd ">
                  <h3>CORPORATE TRANSFER</h3>
                  <p className="para-addr-alkdnad-andam">
                    Professional and reliable rides tailored for meetings,
                    office commutes, and business travel.
                  </p>
                  <button className="ad-jad-awdl-wdk" style={myFont.style}>
                    Book Now
                  </button>
                </div>
              </div>
              <div className="pad-ac-aidjn-awnd-ka-cadd" style={myFont.style}>
                <Image
                  src={ThreeImageSec}
                  alt=""
                  className="img-at-sec-t-a-bx-afnak"
                />
                <div className="pddong-kad-awqwd-adakd ">
                  <h3>EVENT TRANSFER</h3>
                  <p className="para-addr-alkdnad-andam">
                    Convenient transport for weddings, parties, and events so
                    you and your guests travel worry-free.
                  </p>
                  <button className="ad-jad-awdl-wdk" style={myFont.style}>
                    Book Now
                  </button>
                </div>
              </div>
              <div className="pad-ac-aidjn-awnd-ka-cadd" style={myFont.style}>
                <Image
                  src={FourImageSec}
                  alt=""
                  className="img-at-sec-t-a-bx-afnak"
                />
                <div className="pddong-kad-awqwd-adakd ">
                  <h3>Outstation Travel</h3>
                  <p className="para-addr-alkdnad-andam">
                    Enjoy stress-free long journeys with our reliable cabs.
                    Comfort, safety, and punctuality every mile.
                  </p>
                  <button className="ad-jad-awdl-wdk" style={myFont.style}>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mrgn-tp-akbfna-awdjkjsv-adlkj">
        <div
          className="displayflexat-ns extra-tp-marg-insdj"
          style={myFont.style}
        >
          <div className="header-layout-at-main-section">
            <div>
              <div>
                <div className="flx-in-fr-textbak-and">
                  <h2
                    className="fnt-dsze-cnjoald-admdkwadmla"
                    style={myFont.style}
                  >
                    HOW IT
                  </h2>
                  <h2 className="doaa-dnakakds-awmrlfnaw" style={myFont.style}>
                    WORKS
                  </h2>
                </div>
                <div className="flx-in-fr-textbak-and">
                  <div className="a-abx-ahndma-akdbj-pmqklwdnqo">
                    <p
                      className="djadf-auwdna-aklc clr-aiuda-kwad"
                      style={myFont.style}
                    >
                      {" "}
                      3 EASY STEPS
                    </p>
                  </div>
                  <p className="djadf-auwdna-aklc" style={myFont.style}>
                    TO HIRE A CAB
                  </p>
                </div>
                <div>
                  <div className="flx-aer-adhjaa-dadkjd-awdnl mrgnin-aiha-akjd">
                    <div>
                      <div className="flx-in-sjv-secebte-ra">
                        <div className="crcle-at-sectionds-adjnada-nskf">
                          <Image
                            src={Book}
                            alt=""
                            className="img-arkjnac-dkldnka"
                          />
                        </div>
                      </div>
                      <div className="flx-bx-wd-fjr-akda">
                        <h2 className="cla-hdr-jak-aakjdadn">
                          BOOK ONLINE OR <br />
                          BY PHONE, OR IN PERSON
                        </h2>
                        <p className="lsdcs-para-kadbjnd-adoil">
                          Once you have decided the date, <br />
                          inform us about your travel plans, date, time, <br />
                          and venue
                        </p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <Image
                          src={SecoundArrow}
                          alt=""
                          className="arrow-aimgha-at-afkjm"
                        />
                      </div>
                    </div>{" "}
                    <div>
                      <div className="flx-in-sjv-secebte-ra">
                        <div className="crcle-at-sectionds-adjnada-nskf">
                          <Image
                            src={Dollar}
                            alt=""
                            className="img-arkjnac-dkldnka"
                          />
                        </div>
                      </div>
                      <div className="flx-bx-wd-fjr-akda">
                        <h2 className="cla-hdr-jak-aakjdadn">
                          RECEIVE A PRICE <br />
                          QUOTE
                        </h2>
                        <p className="lsdcs-para-kadbjnd-adoil">
                          We'll provide you the most affordable cost <br />
                          for your requested vehicle and you can <br />
                          decide a suitable one.
                        </p>
                      </div>
                    </div>{" "}
                    <div>
                      <div>
                        <Image
                          src={FirstArrow}
                          alt=""
                          className="arrow-aimgha-at-afkjm"
                        />
                      </div>
                    </div>{" "}
                    <div>
                      <div className="flx-in-sjv-secebte-ra">
                        <div className="crcle-at-sectionds-adjnada-nskf">
                          <Image
                            src={Carpick}
                            alt=""
                            className="img-arkjnac-dkldnka"
                          />
                        </div>
                      </div>
                      <div className="flx-bx-wd-fjr-akda">
                        <h2 className="cla-hdr-jak-aakjdadn">
                          WAIT FOR OUR PICKUP
                          <br />
                          DRIVER
                        </h2>
                        <p className="lsdcs-para-kadbjnd-adoil">
                          After you agree with our quote. Sit back and <br />
                          relax while we take care of your transportation needs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="fxlaf-ajkbdad-adjks">
                    <button
                      className="dwadad-daldnkav-apdnadml-sv"
                      style={myFont.style}
                    >
                      Book A Ride
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bck-auef-adja-flsnadicbk-sjfbh">
        <div>
          <Image src={BackForuth} alt="" className="bckrnnd-ahjea-kbjD-HJQD" />
        </div>
        <div className="bck-wht-ahja-wdkjdnkalld">
          <div className="fuvjkde-wod-dbkq-dajkdw">
            <h2 className="fnt-dsze-cnjoald-admdkwadmla" style={myFont.style}>
              OUR CAB
            </h2>
            <h2 className="doaa-dnakakds-awmrlfnaw" style={myFont.style}>
              FLEETS
            </h2>
            <div className="daa-chkawdn-aeowldljn">
              <p className="djadf-auwdna-aklc" style={myFont.style}>
                BOOK NOW & GET THE
              </p>
              <div className="a-abx-ahndma-akdbj-pmqklwdnqo sffsdefrsv">
                <p
                  className="djadf-auwdna-aklc clr-aiuda-kwad"
                  style={myFont.style}
                >
                  BEST PRICE
                </p>
              </div>
            </div>
            <p style={myFont.style} className="hjad-jiqjkd-aklkndkca-adnda">
              From solo travelers to large corporate teams, our services are
              designed to meet every need. Whether you’re planning a quick city
              ride, a luxury car experience, or a long outstation trip,
              RoadTrip.co.in has the right solution for you.
            </p>
            <button
              style={myFont.style}
              className="brdr-btn-at-akjd-awkjjnf-wnd"
            >
              Book Now
            </button>
            <div>
              <Image
                src={BottomCar}
                alt=""
                className="car-at-btm-area-dakj-dwakdj"
              />
            </div>
          </div>
        </div>
        <div className="psdas-dhjadwkjnlk">
          <div>
            <div className="di-flx-fr-bx-adwn-awjkdn">
              <div className="bxk-white-at-fr-bx-ajdk">
                <Image
                  src={Standardcabs}
                  alt=""
                  className="img-of-cers-at-aodnlka"
                />
                <div className="fhv-flx-ain-takjdn">
                  <p className="fisjdk-back-dkaj" style={myFont.style}>
                    {" "}
                    Passenger: 4-5
                  </p>
                </div>
                <h3 className="jad-aowij-awnd-awdl" style={myFont.style}>
                  STANDARD CABS
                </h3>
              </div>
              <div className="bxk-white-at-fr-bx-ajdk">
                <Image
                  src={Luxuxrycabs}
                  alt=""
                  className="img-of-cers-at-aodnlka"
                />
                <div className="fhv-flx-ain-takjdn">
                  <p className="fisjdk-back-dkaj" style={myFont.style}>
                    {" "}
                    Passenger: 4-5
                  </p>
                </div>
                <h3 className="jad-aowij-awnd-awdl" style={myFont.style}>
                  LUXURY CABS
                </h3>
              </div>
            </div>
            <div className="di-flx-fr-bx-adwn-awjkdn">
              <div className="bxk-white-at-fr-bx-ajdk">
                <Image
                  src={Maxycabs}
                  alt=""
                  className="img-of-cers-at-aodnlka"
                />
                <div className="fhv-flx-ain-takjdn">
                  <p className="fisjdk-back-dkaj" style={myFont.style}>
                    {" "}
                    Passenger: 7-8
                  </p>
                </div>
                <h3 className="jad-aowij-awnd-awdl" style={myFont.style}>
                  STANDARD CABS
                </h3>
              </div>
              <div className="bxk-white-at-fr-bx-ajdk">
                <Image
                  src={SUVcabs}
                  alt=""
                  className="img-of-cers-at-aodnlka"
                />
                <div className="fhv-flx-ain-takjdn">
                  <p className="fisjdk-back-dkaj" style={myFont.style}>
                    {" "}
                    Passenger: 4-5
                  </p>
                </div>
                <h3 className="jad-aowij-awnd-awdl" style={myFont.style}>
                  SUV CABS
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="displayflexat-ns extra-asdfg-topadm" style={myFont.style}>
        <div className="header-layout-at-main-section">
          <div className="flx-of-two-coloms-in-mainsection">
            <div className="flx-in-fr-textbak-and">
              <h2 className="fnt-dsze-cnjoald-admdkwadmla" style={myFont.style}>
                CUSTOMER
              </h2>
              <h2 className="doaa-dnakakds-awmrlfnaw" style={myFont.style}>
                REVIEWS
              </h2>
            </div>
          </div>
          <div className="flx-in-fr-textbak-and">
            <p className="djadf-auwdna-aklc" style={myFont.style}>
              WHAT OUR CUSTOMER
            </p>
            <div className="a-abx-ahndma-akdbj-pmqklwdnqo">
              <p
                className="djadf-auwdna-aklc clr-aiuda-kwad"
                style={myFont.style}
              >
                SAY ABOUT US
              </p>
            </div>
          </div>
          <div className="pds-flxs-in-reviess-dnaljdcdaclj">
            <div className="pads-and-akjnda-odnlaodnawxz">
              <div className="dif-akdbj-hbdad-opqdjn-djdA"></div>
              <div style={myFont.style} className="whit-bxoa-djka-dwkwwjd">
                <div className="ehj-image-at-cutomer-flexs">
                  <div className="diadun-image-akdjn-at-customer-sre-vew">
                    <Image
                      src={CustomerOne}
                      alt=""
                      className="customer-imagers-at-s-custers-sevice"
                    />
                  </div>
                </div>
                <h3 className="hdr-of-clinetd-sibbdja">Rohit S. – Pune</h3>
                <p className="addd-oapn-awdndalvs-awdl">
                  "Booked RoadTrip.co.in for my airport transfer and was
                  impressed with the punctuality. The driver was professional,
                  and the ride was smooth. Highly recommended!" ⭐️⭐️⭐️⭐️⭐️
                </p>
              </div>
            </div>
            <div className="pads-and-akjnda-odnlaodnawxz">
              <div className="dif-akdbj-hbdad-opqdjn-djdA"></div>
              <div style={myFont.style} className="whit-bxoa-djka-dwkwwjd">
                <div className="ehj-image-at-cutomer-flexs">
                  <div className="diadun-image-akdjn-at-customer-sre-vew">
                    <Image
                      src={Customertwo}
                      alt=""
                      className="customer-imagers-at-s-custers-sevice"
                    />
                  </div>
                </div>
                <h3 className="hdr-of-clinetd-sibbdja">Amit Verma. – Pune</h3>
                <p className="addd-oapn-awdndalvs-awdl">
                  "My company regularly uses RoadTrip.co.in for corporate
                  transfers. Their drivers are courteous, reliable, and always
                  on schedule. A true stress-free experience." ⭐️⭐️⭐️⭐️⭐️
                </p>
              </div>
            </div>
            <div className="pads-and-akjnda-odnlaodnawxz">
              <div className="dif-akdbj-hbdad-opqdjn-djdA"></div>
              <div style={myFont.style} className="whit-bxoa-djka-dwkwwjd">
                <div className="ehj-image-at-cutomer-flexs">
                  <div className="diadun-image-akdjn-at-customer-sre-vew">
                    <Image
                      src={Customerthree}
                      alt=""
                      className="customer-imagers-at-s-custers-sevice"
                    />
                  </div>
                </div>
                <h3 className="hdr-of-clinetd-sibbdja"> Priya K. – Mumbai</h3>
                <p className="addd-oapn-awdndalvs-awdl">
                  "Booked an outstation trip with family, and the journey was
                  super comfortable. Car was clean, driver was polite, and
                  pricing was very fair." ⭐️⭐️⭐️⭐️⭐️
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="extra-asdfg-topad">
        <div className="imgakwd-display-jha-adbwd-awkdj-alwd">
          <Image src={CrossImage} alt="" className="imagda-wbdjamdnao-awdjbk" />
          <Image src={CrossImage} alt="" className="imagda-wbdjamdnao-awdjbk" />
          <Image src={CrossImage} alt="" className="imagda-wbdjamdnao-awdjbk" />
          <Image src={CrossImage} alt="" className="imagda-wbdjamdnao-awdjbk" />
        </div>
      </div>
      <div className="displayflexat-ns" style={myFont.style}>
        <div className="header-layout-at-main-section">
          <div className="flx-in-btm-befr-fotr-at">
            <div>
              <div className="a-abx-ahndma-akdbj-pmqklwdnqo WISKJDW-AJKDN ">
                <p className="djadf-auwdna-aklc clr-aiuda-kwad">
                  CALL US OR BOOK ONLINE
                </p>
              </div>
              <h2>BOOK YOUR CABFOR YOUR NEXT RIDE!</h2>
            </div>
            <div className="flx-in-fr-btn-at-ftr-uper-side">
              <button className="btn-at-btm-aoda-ndajm" style={myFont.style}>
                <Image src={Call} alt="" className="acla-scg-adnljda-adwlwkm" />
                <h2 className="fnt-szin-adwud-ajl">0401-256-963</h2>
              </button>
              <button className="btn-wht-othjd-adwjbnaw" style={myFont.style}>
                BOOK A RIDE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
export default Homepage;
