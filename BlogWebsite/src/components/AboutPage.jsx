import React from "react";

const AboutPage = () => {
  return (
    <div className="flex  flex-grow:2">
      <div className="flex-1  w-1/2 ">
        <img src="/AboutUs.png" alt="" className="p-10" />
      </div>
      <div className="flex-1  w-1/2  p-20">
        <p className="text-xl text-justify leading-6">
          Welcome to our vibrant blogging community! At [Your Blog Name], we are
          passionate storytellers, weaving narratives that inspire and resonate.
          Explore a diverse range of topics, from lifestyle and technology to
          travel and wellness. Our dedicated team of writers brings you engaging
          content that sparks curiosity and fosters a sense of connection.{" "}
          <br /> <br />
          Embrace the beauty of shared experiences and diverse perspectives.
          Join us on this enriching journey as we celebrate the art of
          expression and invite you to be a part of our growing community.
          Together, let's discover, learn, and share the stories that shape our
          world. Welcome to [Your Blog Name]!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;

// E:\Ecommerce Website Django\Bharat Vesion App React