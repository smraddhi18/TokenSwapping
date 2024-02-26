import React from "react";

//INTERNAL IMPORT 
import {Twitter, Facebook,Insta, Logo} from "./index";
const Footer = () => {
  const footerMenu = ["Features","Integrations","Pricing","FAQ"];
  const footerMenu2 = ["Privacy","Terms of Service"];
  return (
  <footer className="
  px-4 divide-y bg-[#1A1A1A]text-gray-100">
    <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
      <div className="lg:space-y-0">
        <a 
          rel="noopener noreferrer"
          href="#"
          className="flex justify-center space-x-3 lg:justify-start">

            <div className="flex items-center justify-center w-12 h-12 rounded-fullbg-violet-400">
              <Logo/>
            </div>

           <span className="self-center text-2xl font-semibold text-gray-50">
            Crypti Swap
            </span> 
          </a>
      </div>
      <div className="grid grid-cols-2 tet-sm gap-y-8 lg:w-2/3 sm:grid-cols-4">
        <div className="space-y-3">
          <h3 className="tracki uppercase text-[#7765F3]"> Product</h3>
          <ul className="space-y-1 text-gray-50">
            {footerMenu.map((menu,i)=>(
              <li key={i+1}>
                <a rel="noopener noreferrer"
                   href="#">
                    {menu}
                   </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </footer>
    );
};

export default Footer;
