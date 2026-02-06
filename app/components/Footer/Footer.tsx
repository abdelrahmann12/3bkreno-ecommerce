import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import abkrenoLogo from "../../../public/3bkreno_logo-removebg-preview.png";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="">
      <div className="columns flex items-center justify-around bg-blue-500 py-5 px-2">
        <div className="f-col flex flex-col gap-3">
          <div className="logo rounded-3xl">
            <Image src={abkrenoLogo} width={80} alt="3bkreno logo"></Image>
          </div>
          <div className="address flex gap-2 items-center">
            <MapPin width={20} />
            <p>شكري القوتلي ش خلف البنك الاهلي </p>
          </div>
          <div className="contact flex gap-2 items-center">
            <Phone width={20}></Phone>
            <p>0402239824</p>
          </div>
          <div className="mail flex gap-2 items-center">
            <Mail width={20} />
            <p>Contact Us</p>
          </div>
          <div className="social flex items-center gap-3 ">
            <Link
              href="https://www.facebook.com/3bkrenotoys?locale=ar_AR"
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-black transition-all duration-300 hover:bg-black"
            >
              <FaFacebookF className="text-black transition-colors duration-300 group-hover:text-white" />
            </Link>

            <Link
              href="https://www.instagram.com/3bkrenotoys/"
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-black transition-all duration-300 hover:bg-black"
            >
              <FaInstagram className="text-black transition-colors duration-300 group-hover:text-white" />
            </Link>

            <Link
              href="https://twitter.com"
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-black transition-all duration-300 hover:bg-black"
            >
              <FaTwitter className="text-black transition-colors duration-300 group-hover:text-white" />
            </Link>

            <Link
              href="https://www.tiktok.com/@3bkreno.kidsarea"
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-black transition-all duration-300 hover:bg-black"
            >
              <FaTiktok className="text-black transition-colors duration-300 group-hover:text-white" />
            </Link>
          </div>
        </div>
        <div className="s-col flex flex-col">
          <div className="heading">
            <h3 className=" text-2xl pb-3">About Us</h3>
            <ul className="flex flex-col gap-2">
              <li>About Us</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <div className="t-col flex flex-col">
          <div className="heading">
            <h3 className=" text-2xl pb-3">My Account</h3>
            <ul className="flex flex-col gap-2">
              <li>Login</li>
              <li>Order History</li>
              <li>Affiliates</li>
              <li>Newsletter</li>
              <li>Gift Certificate</li>
            </ul>
          </div>
        </div>
        <div className="f-col flex flex-col">
          <div className="heading">
            <h3 className=" text-2xl pb-3">Customer Service</h3>
            <ul className="flex flex-col gap-2">
              <li>Contact Us</li>
              <li>Store Locations</li>
              <li>Our Brands</li>
              <li>Site Map</li>
              <li>Delivery information</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
