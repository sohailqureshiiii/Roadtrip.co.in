import React, { useState } from "react";
import Image from "../../node_modules/next/image";
import Check from "../../public/check.png";
import { Navbar } from "../Components/Navbar/navbar";
import { Contactform } from "../Components/ContactForm/contactform";
import { Footer } from "../Components/Footer/footer";
import ContactFromModal from "../Components/ContactFromModal/ContactFromMoadal";
import Wagnor from "../../public/download.png";
import SwiftDezire from "../../public/maruti-suzuki-dzire-500x261.jpg";
import Ertiga from "../../public/9c54909b-8c58-40e3-b72b-81205b97bf64-Maruti-Suzuki_Ertiga_Splendid-Silver_1_.png";
import Inova from "../../public/830_1709020312.jpg";
import localFont from "next/font/local";
import "../app/globals.css";

const myFont = localFont({ src: "../../Fonts/Montserrat-Medium.ttf" });
const service = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Navbar />
      <div>
        <h1 style={myFont.style} className="txt-ajda-adlj-lajd-aljndad-adkm">
          Our Fleets
        </h1>
      </div>
      <div className="flex-of-cars-inadka-d-wjkad">
        <div
          style={myFont.style}
          className="fakj-jakwd-kjadw-jkadw"
          onClick={() => setShow(true)}
        >
          <Image
            src={Wagnor}
            alt=""
            className="wagno-and-aldna-oawk-haal-kama"
          />
          <h1 className="hdr-of-cr-at-ajkd-adnd-jhdan">Sedan- Hatchback</h1>
          <p className="hdr-of-cr-at-ajkd-adnd-jhdan">Economy Cabs</p>
          <h2 className="hdr-of-cr-at-ajkd-adnd-jhdan"> ₹12/km</h2>
        </div>
        <div
          style={myFont.style}
          className="fakj-jakwd-kjadw-jkadw"
          onClick={() => setShow(true)}
        >
          <Image
            src={SwiftDezire}
            alt=""
            className="wagno-and-aldna-oawk-haal-kama"
          />
          <h1 className="hdr-of-cr-at-ajkd-adnd-jhdan">Sedan plus- Sedan</h1>
          <p className="hdr-of-cr-at-ajkd-adnd-jhdan">Premium Economy Cabs</p>
          <h2 className="hdr-of-cr-at-ajkd-adnd-jhdan"> ₹13/km</h2>
        </div>
        <div
          style={myFont.style}
          className="fakj-jakwd-kjadw-jkadw"
          onClick={() => setShow(true)}
        >
          <Image
            src={Ertiga}
            alt=""
            className="wagno-and-aldna-oawk-haal-kama"
          />
          <h1 className="hdr-of-cr-at-ajkd-adnd-jhdan">Ertiga- SUV</h1>
          <p className="hdr-of-cr-at-ajkd-adnd-jhdan">Perfect for Families</p>
          <h2 className="hdr-of-cr-at-ajkd-adnd-jhdan"> ₹15/km</h2>
        </div>
        <div
          style={myFont.style}
          className="fakj-jakwd-kjadw-jkadw"
          onClick={() => setShow(true)}
        >
          <Image
            src={Inova}
            alt=""
            className="wagno-and-aldna-oawk-haal-kama"
          />
          <h1 className="hdr-of-cr-at-ajkd-adnd-jhdan">
            InnovaCrysta- Prime SUV
          </h1>
          <p className="hdr-of-cr-at-ajkd-adnd-jhdan">Group Travel Frendly</p>
          <h2 className="hdr-of-cr-at-ajkd-adnd-jhdan"> ₹21/km</h2>
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
      <Footer />
      <ContactFromModal visible={show} onClose={() => setShow(false)} />
    </>
  );
};
export default service;
