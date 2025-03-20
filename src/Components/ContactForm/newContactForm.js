import React, { useState } from "react";
import localFont from "next/font/local";
const myFont = localFont({ src: "../../../Fonts/Montserrat-Medium.ttf" });
import "../../app/globals.css";
import Name from "../../../public/user.svg";
import MainLogo from "../../../public/M-removebg-preview.png";
import Chat from "../../../public/chat.svg";
import Mail from "../../../public/mail.svg";
import Image from "next/image";

const NewContactForm = () => {
  return (
    <>
      <div className="main-box-of-ctnct-info-inpts-and-cnt" data-aos="fade-up">
        <div style={myFont.style} className="first-bx-f-left-ctn-dhjd">
          <div className="esr-white-line-in-side-ak">
            {" "}
            <Image src={MainLogo} height={120} width={180} />
            <p className="left-text-content-at-cnt-bx">
              Talk to our
              <br />
              Sales team
            </p>
          </div>
        </div>
        <div style={myFont.style} className="right-bx-of-a-inouts-iand-sjm">
          <div>
            <p className="fnt-sz-fr-cnt-us-akjd">Get In Touch</p>
            <p className="uyjs-sks-acs-wsdcsd-dc">
              Don't let questions linger we're just a click or call away. Reach
              out now, and let's embark on a journey of collaboration, turning
              your visions into reality.
            </p>
          </div>
          <div className="fr-mrgin-tp-sddjvdm">
            <div className="flx-in-input-at-cntx-btn-snd">
              <div className="brder-at-inpit-and-img-sect-isn">
                <input
                  placeholder="Full Name"
                  style={myFont.style}
                  className="input-fr-cnt-aph-snd"
                />
                <Image src={Name} />
              </div>
              <div className="brder-at-inpit-and-img-sect-isn">
                <input
                  placeholder="Bussiness Email"
                  style={myFont.style}
                  className="input-fr-cnt-aph-snd"
                />
                <Image src={Mail} height={30} />
              </div>
            </div>
            <div className="brder-at-inpit-and-img-sect-isn pad-top-akfkdos-fdk">
              <input
                placeholder="Subject"
                style={myFont.style}
                className="input-fr-cnt-aph-snd"
              />
            </div>
            <div className="fr-dsks-sjkds-mcks-vmk">
              <textarea
                placeholder="Write Message"
                className="for-textarea-at-cntx-sksjd"
              />
              <Image src={Chat} className="jhdes-fr-panc-sdk" />
            </div>
            <button style={myFont.style} className="send-msg-btn-st-ancjs-bcks">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewContactForm;
