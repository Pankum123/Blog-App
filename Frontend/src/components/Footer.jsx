import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { Link} from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="border py-10 p-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Products</h2>
            <ul className="space-y-2">
              <li>
                <Link t0="#" className="text-gray-400 hover:text-blue-500">
                  Flutter
                </Link>
              </li>
              <li>
                <Link t0="#" className="text-gray-400 hover:text-blue-500">
                  React
                </Link>
              </li>
              <li>
                <Link t0="#" className="text-gray-400 hover:text-blue-500">
                  Android
                </Link>
              </li>
              <li>
                <Link t0="#" className="text-gray-400 hover:text-blue-500">
                  iOS
                </Link>
              </li>
            </ul>
          </div>
          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Design to code</h2>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-400 hover:text-blue-500">
                  Figma plugin
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-blue-500">
                  Templates
                </Link>
              </li>
            </ul>
          </div>

          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Comparison</h2>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-400 hover:text-blue-500">
                  DhiWise vs Anima
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-blue-500">
                  DhiWise vs Appsmith
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-blue-500">
                  DhiWise vs FlutterFlow
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-blue-500">
                  DhiWise vs Monday Hero
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-blue-500">
                  DhiWise vs Retool
                </Link>
              </li>

              <li>
                <Link to="#" className="text-gray-400 hover:text-blue-500">
                  DhiWise vs Bubble
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-blue-500">
                  DhiWise vs Figma Dev Mode
                </Link>
              </li>
            </ul>
          </div>
          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-400 hover:text-blue-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-blue-500">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-blue-500">
                  Career
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-blue-500">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-blue-500">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className=" container mx-auto bg-white  flex flex-col md:flex-row justify-between items-center p-4">
        <div className="text-xl font-semibold hidden md:flex">
          Blog<span className="text-blue-500 font-bold">App</span>
        </div>
        <div className="text-gray-400 text-sm hidden md:flex">
          <p>&copy; 2025 Tiku PVT. LTD. All rights reserved</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-4">
          <Link to="#">
            <FaGithub className="h-6" />
          </Link>
          <Link to="#">
            <BsYoutube className="h-6" />
          </Link>

          <Link to="#">
            <FaLinkedin className="h-6" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
