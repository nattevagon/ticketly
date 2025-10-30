import { TiketlyIcon } from "@/assets/images/logos"
import Image from "next/image"
import React from 'react'

const Footer = () => {
  return (
    <div className="container bg-gradient-to-r from-slate-900 to-slate-700 flex items-center py-8 m-0 w-full max-w-none">
      <footer className="footer text-primary-white p-4">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Customer Service</a>
          <a className="link link-hover">FAQ</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <Image
        className="invert brightness-0 mb-2 ml-4"
        src={TiketlyIcon.src}
        width={100}
        height={100}
        alt="LeagueLogo"
      />
    </div>
  )
}

export default Footer