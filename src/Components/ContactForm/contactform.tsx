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
                    Car One{" "}
                  </option>
                  <option
                    value="otherOption"
                    className="ansbdhjn"
                    style={myFont.style}
                  >
                    Car two
                  </option>
                  <option
                    value="otherOption"
                    className="ansbdhjn"
                    style={myFont.style}
                  >
                    Car three
                  </option>
                  <option
                    value="otherOption"
                    className="ansbdhjn"
                    style={myFont.style}
                  >
                    Car four
                  </option>
                </select>
              </div>
              <div className="fr-inpit-acjkasn-box-ssan">
                <input
                  style={myFont.style}
                  className="Input-for-contact-andother-compo"
                  type="text"
                  placeholder="Number of Passenger"
                />
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
                  placeholder="Travel From"
                />
              </div>
              <div className="fr-inpit-acjkasn-box-ssan">
                <input
                  style={myFont.style}
                  className="Input-for-contact-andother-compo"
                  type="text"
                  placeholder="Travel To"
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
