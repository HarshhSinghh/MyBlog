import React from "react";

const Modal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full  flex items-center justify-center  left-0 h-full ${
        isOpen ? " " : "hidden"
      }  `}
    >
      <div className="modal-container   ">
        <div className="bg-indigo-200 text-center  p-5 h-96 rounded  shadow-md lg:w-[500px]">
          <h1 className="mb-5">Login Form Here</h1>
          <form action="">
            <div>
              {/* <label htmlFor=""></label> */}
              <div className="flex items-center justify-center">
                {/* <label htmlFor="Email" className="mr-2">
                  Email
                </label> */}
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Please enter Email Here"
                  className="w-full  rounded text-black border border-[e0e0e0] py-2 px-5 text-base  mt-6 "
                />
              </div>

              <div className="flex items-center justify-center">
                {/* <label htmlFor="Email" className="mr-2">
                  Password
                </label> */}

                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Please enter Email Here"
                  className="w-full  rounded text-black border border-[e0e0e0] py-2 px-5 text-base  mt-6 "
                />
              </div>
              <div>
                <button className="hover:shadow:md rounded-md bg-[#6a64f1] hover:bg-orange-600 mt-5 py-3 px-8 text-base font-semibold">
                  Login
                </button>
              </div>

              <div>
                <button
                  onClick={onClose}
                  className="hover:shadow:md rounded-md bg-[#6a64f1] hover:bg-orange-600 mt-5 py-3 px-5 text-base font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
