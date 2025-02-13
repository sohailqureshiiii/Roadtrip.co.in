import React from "react";
import localFont from "next/font/local";
import NewContactForm from "../Components/ContactForm/newContactForm";
import { Navbar } from "../Components/Navbar/navbar";
import { Footer } from "../Components/Footer/footer";
const myFont = localFont({ src: "../../Fonts/Montserrat-Medium.ttf" });

const contactus = () => {
  return (
    <div>
      <Navbar />
      <div className="displayflexat-ns " style={myFont.style}>
        <div className="header-layout-at-main-section">
          <NewContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default contactus;
