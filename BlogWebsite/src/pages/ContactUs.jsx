import React from "react";
import ContactForm from "../components/ContactForm";

const ContactUs = () => {
  return (
    <>
      <div className="px-4 py-40 bg-black mx-auto h-64">
        <div className="text-white text-center  ">
          <h1 className="text-5xl font-bold leading-snug  lg:text-7xl">
            Contact Page
          </h1>
        </div>
      </div>

      <ContactForm/>
    </>
  );
};

export default ContactUs;
