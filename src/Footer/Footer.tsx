import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="flex flex-col bg-slate-700">
      <div className="flex items-center justify-between px-[10px] py-3 border-b-[1px]">
        <h2 className="text-[17px] font-sans ">SAROJ GT</h2>
        <div className="flex gap-[7px] items-center">
          <FacebookIcon />
          <XIcon />
          <InstagramIcon />
          <LinkedInIcon />
          <YouTubeIcon />
        </div>
      </div>
      <div className="flex w-full items-center justify-between px-[15px] py-[7px]">
        <div className="flex flex-col items-start justify-start ">
          <h3 className="text-[16px] text-white font-sans">Company</h3>
          <div className="flex flex-col items-start ">
            <Link to={""}>Home</Link>
            <Link to={""}>Contact us</Link>
            <Link to={""}>About us</Link>
            <Link to={""}>Get started</Link>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start ">
          <h3 className="text-[16px] text-white font-sans">Services</h3>
          <div className="flex flex-col items-start">
            <Link to={""}>Hotel Rent</Link>
            <Link to={""}>Ticket Booking</Link>
            <Link to={""}>Sales</Link>
            <Link to={""}>Marketing</Link>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start ">
          <h3 className="text-[16px] text-white font-sans">Account</h3>
          <div className="flex flex-col items-start">
            <Link to={""}>Profile</Link>
            <Link to={""}>My Account</Link>
            <Link to={""}>Preferences</Link>
            <Link to={""}>Purchase</Link>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start ">
          <h3 className="text-[16px] text-white font-sans">Top Hotels</h3>
          <div className="flex flex-col items-start">
            <Link to={""}>combolio Hotel</Link>
            <Link to={""}>Hotel Raj</Link>
            <Link to={""}>Dove Hotel</Link>
            <Link to={""}>Bang Hotel</Link>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start ">
          <h3 className="text-[16px] text-white font-sans">Suscribe</h3>
          <div className="flex flex-col gap-[10px]">
            <input type="email" placeholder="Enter Your Email" className="w-[200px] outline-none py-1 px-1" />
            <button className="w-[200px] text-blue-600 bg-gray-200 py-[5px] px-[10px] rounded-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <footer className=" flex items-center justify-between px-[30px] bg-[#5f4e2f] py-2">
        <h4 className="text-[14px] text-white">
          CopyWrite © SAROJGT. All rights reserved
        </h4>
        <span className="text-[14px] font-sans text-white">
          Privacy policy Terms & Condition
        </span>
      </footer>
    </div>
  );
};

export default Footer;
