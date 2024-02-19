import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="py-4  pt-16 mx-auto sm:max-w-xl md-max-w-full md:px-24 lg:px-4 lg:max-w-screen-xl ">
        <div>
          <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4  ">
            <div>
              <p className="font-medium tracking-wide text-gray-300 ">
                {" "}
                Category
                <ul className="mt-2 ">
                  <li>
                    {" "}
                    <a
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-orange-500"
                    >
                      {" "}
                      News{" "}
                    </a>
                  </li>

                  <li>
                    {" "}
                    <a
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-orange-500"
                    >
                      {" "}
                      World{" "}
                    </a>
                  </li>

                  <li>
                    {" "}
                    <a
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-orange-500"
                    >
                      {" "}
                      Games{" "}
                    </a>
                  </li>

                  <li>
                    {" "}
                    <a
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-orange-500"
                    >
                      {" "}
                      References{" "}
                    </a>
                  </li>
                </ul>
              </p>
            </div>

            <p className="font-medium tracking-wide text-gray-300 ">
              {" "}
              Cherry
              <ul className="mt-2 ">
                <li>
                  {" "}
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-orange-500"
                  >
                    {" "}
                    Media{" "}
                  </a>
                </li>

                <li>
                  {" "}
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-orange-500"
                  >
                    {" "}
                    Brochure{" "}
                  </a>
                </li>

                <li>
                  {" "}
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-orange-500"
                  >
                    {" "}
                    Non Profit{" "}
                  </a>
                </li>

                <li>
                  {" "}
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-orange-500"
                  >
                    {" "}
                    Project{" "}
                  </a>
                </li>
              </ul>
            </p>

            <p className="font-medium tracking-wide text-gray-300 ">
              {" "}
              Apple
              <ul className="mt-2 ">
                <li>
                  {" "}
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-orange-500"
                  >
                    {" "}
                    Web{" "}
                  </a>
                </li>

                <li>
                  {" "}
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-orange-500"
                  >
                    {" "}
                    Ecommerce{" "}
                  </a>
                </li>

                <li>
                  {" "}
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-orange-500"
                  >
                    {" "}
                    Bussiness{" "}
                  </a>
                </li>

                <li>
                  {" "}
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-orange-500"
                  >
                    {" "}
                    Entertainment{" "}
                  </a>
                </li>
              </ul>
            </p>

            <p className="font-medium tracking-wide text-gray-300 ">
              {" "}
              Bussiness
              <ul className="mt-2 my-3 ">
                <li className="">
                  {" "}
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-orange-500"
                  >
                    {" "}
                    Personal{" "}
                  </a>
                </li>

                <li>
                  {" "}
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-orange-500"
                  >
                    {" "}
                    WIki{" "}
                  </a>
                </li>

                <li>
                  {" "}
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-orange-500"
                  >
                    {" "}
                    Forum{" "}
                  </a>
                </li>

                <li>
                  {" "}
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-orange-500"
                  >
                    {" "}
                    Projects{" "}
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div className=" flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row ">
          <p className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
            Copy @Harshdeep Singh
          </p>

          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href=""
              className="text-gray-500 transition-all duration-300 hover:text-orange-500"
            >
              {" "}
              <FaTwitter></FaTwitter>{" "}
            </a>

            <a
              href=""
              className="text-gray-500 transition-all duration-300 hover:text-orange-500"
            >
              {" "}
              <FaInstagram></FaInstagram>{" "}
            </a>

            <a
              href=""
              className="text-gray-500 transition-all duration-300 hover:text-orange-500"
            >
              {" "}
              <FaFacebook/>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
