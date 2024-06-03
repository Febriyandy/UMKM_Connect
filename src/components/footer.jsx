import React from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary border border-t border-opacity-25 border-white text-white pt-8 relative bottom-0 font-body">
        <div className="justify-center flex gap-10">
          <div className=" w-56 mr-24 ">
            <h1 className="font-body font-bold text-xl text-white">
              UMKMConnect
            </h1>
            <p className="text-sm pt-5">
              Konsumennya Saja Sudah Digital, UMKM-nya Juga Dong
            </p>
          </div>
          <div className="mr-16">
            <h4 className="font-bold">Halaman</h4>
            <ul className="text-sm">
              <li className="py-2"><a href="#">Promo</a></li>
              <li className="py-2"><a href="#">Program</a></li>
            </ul>
          </div>
          <div className="mr-16">
            <h4 className="font-bold">Komunitas</h4>
            <ul className="text-sm">
              <li className="py-2"><a href="#">Event</a></li>
              <li className="py-2"><a href="#">Artikel</a></li>
            </ul>
          </div>
          <div className="mr-16">
            <h4 className="font-bold">Hubungi Kami</h4>
            <ul className="text-sm">
              <li className="py-2"><a href="#">Pusat Bantuan</a></li>
              <li className="py-2"><a href="#">Kontak</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Media Sosial</h4>
            <div className="flex mt-4 text-lg gap-3">
              <a href="#">
                <RiTwitterXLine />
              </a>
              <a href="#">
                <FaWhatsapp />
              </a>
              <a href="#">
                <AiOutlineYoutube />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pl-20 font-body border-t border-opacity-25 border-white">
          <p className="py-5">&copy; 2024 UMKMConnect All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
