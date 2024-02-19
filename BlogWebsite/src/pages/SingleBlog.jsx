import React from "react";
import { useLoaderData } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const SingleBlog = () => {
  const data = useLoaderData();
  const {
    author,
    authorPic,
    category,
    content,
    image,
    tags,
    title,
    reading_time,
    published_date,
  } = data;

  return (
    <div className="flex items-center justify-center  ">
      <div className="py-40">
        <div>
          {/* <h1 className="bg-black text-white text-center">Single Blog Page</h1> */}
        </div>
        {/* blog Details */}
        <div className=" max-w-7xl  mx-auto my-12  flex flex-col md:flex-row gap-10 ">
          <div className="lg:w-2/4 mx-auto">
            <img src={image} alt="" className="w-full  mx-auto rounded" />
            <h2 className="text-3xl m-8 font-bold  text-blue-500 cursor-pointer  ">
              {title}
            </h2>
            <p className="mb-3 text-gray-500">
              {author} | {published_date}
            </p>

            <p className="mb-3 text-gray-500">{reading_time}</p>

            <p className=" text-gray-500">
              {content} Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Saepe repudiandae debitis facere, adipisci eligendi, rem
              quasi itaque libero totam voluptatem molestias, error enim
              deleniti similique vero cupiditate amet alias inventore sunt ipsum
              doloribus minima in natus exercitationem! Ab magni quod a iste
              aliquam? Voluptatem quod temporibus amet totam repellat? Eius,
              tenetur? Eligendi aspernatur quos fugit totam nihil. Ex ipsa
              repudiandae sit alias nulla, ad excepturi nam quia aut aspernatur
              ipsum nostrum? Aperiam porro culpa velit. Id eaque in fugit
              numquam delectus quibusdam, aut dicta nobis voluptatem assumenda
              repellendus, omnis quos obcaecati recusandae consequatur, aperiam
              soluta consequuntur officiis! Reiciendis in molestias mollitia
              labore illum vitae totam, commodi tempora aut ab, quisquam ea at
              dignissimos repellat error obcaecati, quod earum natus eaque
              facilis! Consequatur, architecto id atque corporis ipsa fugit
              beatae officiis voluptatibus, aspernatur, a quo. Eius vitae, iste
              sint repudiandae placeat tenetur tempore illum velit porro cum
              accusamus dolor, ipsa provident.
            </p>
          </div>

          <div className="lg:w-1/4">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
