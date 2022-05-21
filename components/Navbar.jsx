import React, { useState } from "react";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    // <div classNameName="container h-20 bg-black mx-auto p-5">
    //   <div>
    //     <Link href="/">
    //       <img
    //         classNameName="w-44 object-contain cursor-pointer"
    //         src="https://i.ibb.co/KVyJJRZ/llogo-white-e1612294391942.webp"
    //       />
    //     </Link>
    //   </div>
    //   <div>
    //     <input />
    //   </div>
    // </div>

    <div className="w-full shadow-md top-0 left-0 fixed">
      <div className="md:flex items-center justify-between bg-slate-900 py-4 md:px-10 px-7">
        <div>
          <Link href="/">
            <img
              className="w-40 object-contain cursor-pointer"
              src="https://i.ibb.co/KVyJJRZ/llogo-white-e1612294391942.webp"
            />
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-white text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </div>
        <ul
          className={`md:flex md:items-center text-gray-400 md:pb-0 pb-12 absolute md:static bg-slate-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-0" : "top-[-490px]"
          } md:opacity-100`}
        >
          <li className="md:ml-8 text-l hover:text-white duration-500 md:my-0 my-7 font-poppins">
            <Link href="/">HOME</Link>
          </li>
          <li className="md:ml-8 text-l hover:text-white duration-500 md:my-0 my-7 font-poppins">
            <Link href="/">SHOP</Link>
          </li>
          <li className="md:ml-8 text-l hover:text-white duration-500 md:my-0 my-7 font-poppins">
            <Link href="/">CATEGORY</Link>
          </li>
          <li className="md:ml-8 text-l hover:text-white duration-500 md:my-0 my-7 font-poppins">
            <Link href="/">LOGIN / REGISTER</Link>
          </li>
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>{" "}
            Cart (0)
          </Button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
