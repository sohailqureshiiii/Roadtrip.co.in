import React from "react";
import { Footer } from "../Components/Footer/footer";
import { Navbar } from "../Components/Navbar/navbar";
import localFont from "next/font/local";
const myFont = localFont({ src: "../../Fonts/Montserrat-Medium.ttf" });
import "../app/globals.css";
import Car from "../../public/car.png";
import Plane from "../../public/flight.png";
import Event from "../../public/calendar.png";
import Location from "../../public/location.png";
import Image from "next/image";

const services = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div
        className="section-fourth-backgrnd-blckush-tyoe-sjnd"
        style={myFont.style}
      >
        <div className="main-section-for-bottom-tooasm">
          <p className="testinmoai-sibcjse">Our Services</p>
          <h3 className="secound-hdr-at-ieronlsdh">Our Key Services</h3>
          <div className="flx-in-fr-testimonial-parts-at-sectio">
            <div className="container-at-testimon-white-badck">
              <div className="flxinfr-jhed-fjsfkad">
                <Image
                  src={Car}
                  alt=""
                  className="img-at-vghjsc-adjcn-naj-asd"
                />
              </div>
              <h2 className="student-name-in-testimonial">
                Employee Transport Services
              </h2>
              <p className="paras-text-at-testimonial-sectuoas-sdsfd">
                A happy and satisfied employee results into higher profits. We
                make sure your employee reaches office safely and ontime,
                always.
              </p>
            </div>
            <div className="container-at-testimon-white-badck">
              <div className="flxinfr-jhed-fjsfkad">
                <Image
                  src={Plane}
                  alt=""
                  className="img-at-vghjsc-adjcn-naj-asd"
                />
              </div>
              <h2 className="student-name-in-testimonial">Airport Transfers</h2>
              <p className="paras-text-at-testimonial-sectuoas-sdsfd">
                We provide affordable and on time airport transfers without
                compromising on the safety of our customer.
              </p>
            </div>
          </div>
          <div className="flx-in-fr-testimonial-parts-at-sectio">
            <div className="container-at-testimon-white-badck">
              <div className="flxinfr-jhed-fjsfkad">
                <Image
                  src={Location}
                  alt=""
                  className="img-at-vghjsc-adjcn-naj-asd"
                />
              </div>
              <h2 className="student-name-in-testimonial">Local/outstation</h2>
              <p className="paras-text-at-testimonial-sectuoas-sdsfd">
                Travel We aim to help you create beautiful memories while
                exploring India. Travel with us today.
              </p>
            </div>
            <div className="container-at-testimon-white-badck">
              <div className="flxinfr-jhed-fjsfkad">
                <Image
                  src={Event}
                  alt=""
                  className="img-at-vghjsc-adjcn-naj-asd"
                />
              </div>
              <h2 className="student-name-in-testimonial">
                Event Transport Management
              </h2>
              <p className="paras-text-at-testimonial-sectuoas-sdsfd">
                We are a one stop solution for all your event transportation
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="dewrgtdf-poqwdanklx">
        <Footer />
      </div>
    </>
  );
};

export default services;
