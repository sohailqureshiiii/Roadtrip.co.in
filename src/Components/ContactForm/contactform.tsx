import React, { useState } from "react";
import localFont from "next/font/local";
const myFont = localFont({ src: "../../../Fonts/Montserrat-Medium.ttf" });

export const Contactform = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    carType: "someOption",
    travelers: "someOption",
    travelDate: "",
    pickupTime: "",
    pickupLocation: "",
    dropLocation: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiMessage, setApiMessage] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{7,15}$/;

  // Simple validation function
  const isFormValid = () => {
    if (!formData.fullName.trim()) return false;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) return false;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) return false;
    if (formData.carType === "someOption") return false;
    if (formData.travelers === "someOption") return false;
    if (!formData.travelDate.trim()) return false;
    if (!formData.pickupTime.trim()) return false;
    if (!formData.pickupLocation.trim()) return false;
    if (!formData.dropLocation.trim()) return false;
    if (!formData.notes.trim()) return false;
    return true;
  };

  const handleChange = (
     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid()) return;
    setApiMessage("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const json = await res.json();
      alert(json.message || (res.ok ? "We have received your details and will contact you soon." : "Failed to send message."));

      if (res.ok) {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          carType: "someOption",
          travelers: "someOption",
          travelDate: "",
          pickupTime: "",
          pickupLocation: "",
          dropLocation: "",
          notes: "",
        });
      }
    } catch {
      alert("Failed to send message. Please try again after some time.");
    }
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit}>
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
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="flx-insk-dak-alkncak-ckam">
            <div className="fr-inpit-acjkasn-box-ssan">
              <input
                style={myFont.style}
                className="Input-for-contact-andother-compo"
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="fr-inpit-acjkasn-box-ssan">
              <input
                style={myFont.style}
                className="Input-for-contact-andother-compo"
                type="text"
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flx-insk-dak-alkncak-ckam">
            <div className="fr-inpit-acjkasn-box-ssan">
              <select
                className="Input-for-contact-andother-compo"
                style={myFont.style}
                name="carType"
                value={formData.carType}
                onChange={handleChange}
              >
                <option value="someOption">Sedan- Hatchback - 3 People</option>
                <option value="Sedan plus- Sedan - 4 People">Sedan plus- Sedan - 4 People</option>
                <option value="Ertiga- SUV - 6 People">Ertiga- SUV - 6 People</option>
                <option value="InnovaCrysta- Prime SUV - 6 People">InnovaCrysta- Prime SUV - 6 People</option>
              </select>
            </div>
            <div className="fr-inpit-acjkasn-box-ssan">
              <select
                className="Input-for-contact-andother-compo"
                style={myFont.style}
                name="travelers"
                value={formData.travelers}
                onChange={handleChange}
              >
                <option value="someOption">Select Number of Travelers</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="6">6</option>
              </select>
            </div>
          </div>
          <div className="flx-insk-dak-alkncak-ckam">
            <div className="fr-inpit-acjkasn-box-ssan">
              <input
                style={myFont.style}
                className="Input-for-contact-andother-compo"
                type="date"
                placeholder="Date of Travel"
                name="travelDate"
                value={formData.travelDate}
                onChange={handleChange}
              />
            </div>
            <div className="fr-inpit-acjkasn-box-ssan">
              <input
                style={myFont.style}
                className="Input-for-contact-andother-compo"
                type="time"
                placeholder="Pick up Time"
                name="pickupTime"
                value={formData.pickupTime}
                onChange={handleChange}
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
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleChange}
              />
            </div>
            <div className="fr-inpit-acjkasn-box-ssan">
              <input
                style={myFont.style}
                className="Input-for-contact-andother-compo"
                type="text"
                placeholder="Enter Drop Location"
                name="dropLocation"
                value={formData.dropLocation}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="fr-dsks-sjkds-mcks-vmk">
            <textarea
              style={myFont.style}
              placeholder="Driver Notes / Return Details"
              className="texta-afhbaew-mkamndla"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              style={myFont.style}
              className="bnt-css-fr-book-now-sta"
              type="submit"
              disabled={!isFormValid() || isSubmitting}
            >
              {isSubmitting ? (
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <div className="loader" />
                </div>
              ) : (
                "BOOK NOW"
              )}
            </button>

          </div>
        </div>
      </div>
    </form>
  );
};
