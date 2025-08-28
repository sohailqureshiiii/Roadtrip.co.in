import React from "react";
import localFont from "next/font/local";
const myFont = localFont({ src: "../../../Fonts/Montserrat-Medium.ttf" });

export const Contactform = () => {
  return (
    <>
      <div>
        <div className="with-fr-cntct-form-ajd">
          <div className="clas-fr-jan-skla-dmalmalw" style={myFont.style}>
            <h2 className="hdr-fr-cntc-frm-ascnla">MAKE YOUR BOOKING</h2>
          </div>
          <div className="only-r-pding-area-cks">
            <div className="fr-inpit-acjkasn-box-ssan">
              <input
                style={myFont.style}
                className="Input-for-contact-andother-compo"
                type="text"
                placeholder="Your Full Name"
              />
            </div>
            <div className="flx-insk-dak-alkncak-ckam">
              <div className="fr-inpit-acjkasn-box-ssan">
                <input
                  style={myFont.style}
                  className="Input-for-contact-andother-compo"
                  type="text"
                  placeholder="Email Address"
                />
              </div>
              <div className="fr-inpit-acjkasn-box-ssan">
                <input
                  style={myFont.style}
                  className="Input-for-contact-andother-compo"
                  type="text"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="flx-insk-dak-alkncak-ckam">
              <div className="fr-inpit-acjkasn-box-ssan">
                <select
                  className="Input-for-contact-andother-compo"
                  style={myFont.style}
                >
                  <option
                    value="someOption"
                    className="ansbdhjn"
                    style={myFont.style}
                  >
                    Sedan - 3 People
                  </option>
                  <option
                    value="otherOption"
                    className="ansbdhjn"
                    style={myFont.style}
                  >
                    Sedan Plus - 4 People
                  </option>
                  <option
                    value="otherOption"
                    className="ansbdhjn"
                    style={myFont.style}
                  >
                    Ertiga - 6 People
                  </option>
                  <option
                    value="otherOption"
                    className="ansbdhjn"
                    style={myFont.style}
                  >
                    Innova Crysta 6 People
                  </option>
                </select>
              </div>
              <div className="fr-inpit-acjkasn-box-ssan">
                <select
                  className="Input-for-contact-andother-compo"
                  style={myFont.style}
                >
                  <option
                    value="someOption"
                    className="ansbdhjn"
                    style={myFont.style}
                  >
                    Select Number of Travelers
                  </option>
                  <option
                    value="someOption"
                    className="ansbdhjn"
                    style={myFont.style}
                  >
                    2
                  </option>
                  <option
                    value="otherOption"
                    className="ansbdhjn"
                    style={myFont.style}
                  >
                    3
                  </option>
                  <option
                    value="otherOption"
                    className="ansbdhjn"
                    style={myFont.style}
                  >
                    4
                  </option>
                  <option
                    value="otherOption"
                    className="ansbdhjn"
                    style={myFont.style}
                  >
                    6
                  </option>
                </select>
              </div>
            </div>
            <div className="flx-insk-dak-alkncak-ckam">
              <div className="fr-inpit-acjkasn-box-ssan">
                <input
                  style={myFont.style}
                  className="Input-for-contact-andother-compo"
                  type="text"
                  placeholder="Date of Travel"
                />
              </div>
              <div className="fr-inpit-acjkasn-box-ssan">
                <input
                  style={myFont.style}
                  className="Input-for-contact-andother-compo"
                  type="text"
                  placeholder="Pick up Time"
                />
              </div>
            </div>
            <div className="flx-insk-dak-alkncak-ckam">
              <div className="fr-inpit-acjkasn-box-ssan">
                <input
                  style={myFont.style}
                  className="Input-for-contact-andother-compo"
                  type="text"
                  placeholder="Enter Pickup Location"
                />
              </div>
              <div className="fr-inpit-acjkasn-box-ssan">
                <input
                  style={myFont.style}
                  className="Input-for-contact-andother-compo"
                  type="text"
                  placeholder="Enter Drop Location"
                />
              </div>{" "}
            </div>
            <div className="fr-dsks-sjkds-mcks-vmk">
              <textarea
                style={myFont.style}
                placeholder="Driver Notes / Return Details"
                className="texta-afhbaew-mkamndla"
              />
            </div>
            <div>
              <button style={myFont.style} className="bnt-css-fr-book-now-sta">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
