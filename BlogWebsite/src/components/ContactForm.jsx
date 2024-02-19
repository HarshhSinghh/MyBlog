import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/blogend/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form data sent successfully");
        // You can handle success actions here
      } else {
        console.error("Failed to send form data");
        // You can handle error actions here
      }
    } catch (error) {
      console.error("Error sending form data", error);
      // Handle other errors here
    }

    // setFormData("");
  };

  return (
    <>
      <div className="flex   m-2   h-200">
        <div className="text-black text-[78px] font-bold   flex items-center justify-center p-20 b m-2">
          Contact US
        </div>
        <div className=" w-full">
          <form
            action=""
            method="post"
            className="flex flex-col  gap-5"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="text-lg font-bold mr-8">
                {" "}
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border w-full border-gray-300  font-black  rounded-md px-4 py-2 focus:outline-none  focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-lg font-bold mr-8">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-300 w-full rounded-md px-4 py-2 focus:outline-none  focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-lg font-bold mr-5">
                Message:
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="border border-gray-300 w-full rounded-md px-4 py-2 focus:outline-none  focus:border-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
