import React from "react";
import Image from "../../node_modules/next/image";
import Check from "../../public/check.png";
import { Navbar } from "../Components/Navbar/navbar";
import { Contactform } from "../Components/ContactForm/contactform";
import { Footer } from "../Components/Footer/footer";
import localFont from "next/font/local";
import "../app/globals.css";

const myFont = localFont({ src: "../../Fonts/Montserrat-Medium.ttf" });
const service = () => {
  return (
    <>
      <Navbar />
      <div className="bacjksa-ncl-abikal-ahja" id="about">
        <div
          className="displayflexat-ns extra-tp-marg-insdj"
          style={myFont.style}
        >
          <div className="header-layout-at-main-section">
            <div className="flx-of-two-coloms-in-mainsection">
              {" "}
              <div className="flx-of-two-coloms-in-mainsection adfsgrsews jus-cnakjnk">
                {/* <Contactform /> */}
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
    </>
  );
};
export default service;
