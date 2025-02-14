import React from "react";
import localFont from "next/font/local";
import NewContactForm from "../Components/ContactForm/newContactForm";
import { Navbar } from "../Components/Navbar/navbar";
import { Footer } from "../Components/Footer/footer";
import Head from "next/head";
const myFont = localFont({ src: "../../Fonts/Montserrat-Medium.ttf" });

const contactus = () => {
  return (
    <div>
      <Head>
        <title>
          Contact Us | Malhotracitytrans - Connect for Employee Transportation
          Solutions
        </title>
        <meta
          name="description"
          content="Get in touch with Malhotracitytrans for customized employee transportation solutions. Reach us via phone, email, or visit us to learn more about our corporate mobility services."
        />
        <meta
          name="keywords"
          content="Contact Malhotracitytrans, Employee Transportation Support, Corporate Mobility Solutions, Get in Touch, Corporate Transport Enquiries"
        />
      </Head>
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
