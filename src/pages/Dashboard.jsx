import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import Foto from "../assets/images/foto1.png";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineChevronDown } from "react-icons/hi";
import Footer from "../components/footer";
import makanan from "../assets/images/makanan.png";
import minuman from "../assets/images/minuman.png";
import busana from "../assets/images/busana.png";
import kerajinan from "../assets/images/kerajinan.png";
import { Link } from "react-router-dom";
import darmo from "../assets/images/darmo.png";
import milkshake from "../assets/images/milkshake.png";
import hamidah from "../assets/images/hamidah.png";
import abinaya from "../assets/images/abinaya.png";
import mamalis from "../assets/images/mamalis.png";
import artikel1 from "../assets/images/artikel1.png";
import artikel2 from "../assets/images/artikel2.png";
import artikel3 from "../assets/images/artikel3.png";
import artikel4 from "../assets/images/artikel4.png";
import bgartikel from "../assets/images/bgartikel.png";

const Dashboard = () => {
  // Membuat Judul Halaman
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  const handleScroll = () => {
    const nextSection = document.getElementById("next-section");
    nextSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      {/* Navbar */}
      <section>
        <div className=" w-full h-auto bg-[#14142B] relative">
          <img
            src={Foto}
            className="opacity-35 h-screen w-full object-cover"
            alt=""
          />
          <div className="flex flex-col items-center h-full w-full absolute top-10 ">
            <h1
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="font-body font-bold text-white text-2xl text-center mt-24"
            >
              Selamat Datang di UMKMConnect <br /> Konsumennya Saja Sudah
              Digital, UMKM-nya Juga Dong
            </h1>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="relative w-1/2 mt-20"
            >
              <input
                type="text"
                className="w-full h-14 rounded-lg text-lg font-body outline-none p-4 pr-12"
                placeholder="Search...."
              />
              <IoIosSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl text-gray-500" />
            </div>
            <h2
              data-aos="fade-up"
              data-aos-duration="1000"
              className=" font-body text-white text-center w-3/4 mt-20"
            >
              UMKMConnect adalah jembatan bagi anda dan UMKM yang akan
              menghidupkan ekonomi lokal. Temukan beragam produk berkualitas
              dari UMKM seluruh Indonesia dengan mudah, dari kuliner lezat
              hingga kerajinan tangan unik, semuanya ada disini.
            </h2>
            <div
              className="bottom-14 cursor-pointer flex flex-col items-center  absolute animate__animated animate__fadeInUp animate__delay-1s"
              onClick={handleScroll}
            >
              <h1 className="font-body py-3 text-white">Scroll Kebawah</h1>
              <span class="relative flex h-10 w-6">
              <span class="animate-ping absolute inline-flex h-10 w-6 rounded-2xl bg-[#ffbf71] opacity-75"></span>
              <HiOutlineChevronDown className="text-2xl text-white mx-auto bg-primary w-6 h-10 rounded-2xl" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Kategori Produk */}
      <section
        id="next-section"
        className="h-96 w-full flex flex-col items-center font-body"
      >
        <h1 className="font-bold text-xl mt-10 pt-16">Kategori Produk</h1>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex mt-8 gap-20"
        >
          <div className="w-48 h-60 shadow-lg border rounded-xl p-4">
            <img
              src={makanan}
              className="w-full object-cover rounded-xl"
              alt=""
            />
            <div className="text-center py-3">
              <a href="/Makanan" className="text-xl font-bold text-primary">
                Makanan
              </a>
            </div>
          </div>
          <div className="w-48 h-60 shadow-lg border rounded-xl p-4">
            <img
              src={minuman}
              className="w-full object-cover rounded-xl"
              alt=""
            />
            <div className="text-center py-3">
              <a href="/Minuman" className="text-xl font-bold text-primary">
                Minuman
              </a>
            </div>
          </div>
          <div className="w-48 h-60 shadow-lg border rounded-xl p-4">
            <img
              src={busana}
              className="w-full object-cover rounded-xl"
              alt=""
            />
            <div className="text-center py-3">
              <a href="/Busana" className="text-xl font-bold text-primary">
                Busana
              </a>
            </div>
          </div>
          <div className="w-48 h-60 shadow-lg border rounded-xl p-4">
            <img
              src={kerajinan}
              className="w-full object-cover rounded-xl"
              alt=""
            />
            <div className="text-center py-3">
              <a href="/Kerajinan" className="text-xl font-bold text-primary">
                Kerajinan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partner UMKM */}
      <section className="h-96 mt-24 w-full flex flex-col items-center font-body">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-4/5 h-4/5 bg-primary rounded-2xl flex flex-col items-center"
        >
          <h1 className="font-bold text-white text-xl mt-10 ">Partner UMKM</h1>
          <div className="flex gap-10">
            <div className="w-40 h-56 p-4">
              <img src={darmo} alt="" />
              <div className="text-center py-3">
                <a href="/UMKM/Detail" className="text-lg font-bold text-white">
                  Warung Mbah Darmo
                </a>
              </div>
            </div>
            <div className="w-40 h-56  p-4">
              <img src={milkshake} alt="" />
              <div className="text-center py-3">
                <a href="" className="text-lg font-bold text-white">
                  Milkshake Tentang Kita
                </a>
              </div>
            </div>
            <div className="w-40 h-56  p-4">
              <img src={hamidah} alt="" />
              <div className="text-center py-3">
                <a href="" className="text-lg font-bold text-white">
                  Bucket Bunga Ibu Hamidah
                </a>
              </div>
            </div>
            <div className="w-40 h-56  p-4">
              <img src={abinaya} alt="" />
              <div className="text-center py-3">
                <a href="" className="text-lg font-bold text-white">
                  Kedai Abinaya
                </a>
              </div>
            </div>
            <div className="w-40 h-56  p-4">
              <img src={mamalis} alt="" />
              <div className="text-center py-3">
                <a href="" className="text-lg font-bold text-white">
                  Kedai Mamalis
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artikel Terbaru */}
      <h1 className="font-bold text-xl px-28 font-body">Artikel Terbaru</h1>
      <section className="h-auto my-10 w-full flex flex-col items-center font-body">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="grid grid-cols-4 gap-10"
        >
          <div className="w-64 h-96 rounded-2xl border border-[#DCDCDC] flex flex-col">
            <img
              src={artikel1}
              className="w-full rounded-2xl object-cover"
              alt=""
            />
            <div className="p-5 flex-grow flex flex-col">
              <h1 className="font-bold text-sm">
                Mengoptimalkan Pengelolaan Keuangan untuk Usaha Menengah Kebawah
              </h1>
              <h3 className="text-xs h-32 text-justify pt-3">
                Usaha menengah kebawah (UMKM) adalah tulang punggung ekonomi di
                banyak negara. Namun, seringkali UMKM menghadapi tantangan dalam
                mengelola keuangan mereka dengan efisien.
              </h3>
              <div className="text-center mt-auto">
                <a
                  href=""
                  className="font-body text-white px-16 rounded-xl py-2 bg-primary"
                >
                  Lihat Detail
                </a>
              </div>
            </div>
          </div>

          <div className="w-64 h-96 rounded-2xl border border-[#DCDCDC] flex flex-col">
            <img
              src={artikel2}
              className="w-full rounded-2xl object-cover"
              alt=""
            />
            <div className="p-5 flex-grow flex flex-col">
              <h1 className="font-bold text-sm">
                Tips Pengelolaan Keuangan Efektif untuk Usaha Menengah Kebawah
              </h1>
              <h3 className="text-xs h-32 text-justify pt-3">
                Pengelolaan keuangan yang efektif adalah salah satu kunci
                kesuksesan usaha menengah ke bawah. Dalam artikel ini, kita akan
                membahas beberapa tips dan praktik terbaik yang dapat membantu
                Anda mengelola...
              </h3>
              <div className="text-center mt-auto">
                <a
                  href="/Artikel/Detail"
                  className="font-body text-white px-16 rounded-xl py-2 bg-primary"
                >
                  Lihat Detail
                </a>
              </div>
            </div>
          </div>

          <div className="w-64 h-96 rounded-2xl border border-[#DCDCDC] flex flex-col">
            <img
              src={artikel3}
              className="w-full rounded-2xl object-cover"
              alt=""
            />
            <div className="p-5 flex-grow flex flex-col">
              <h1 className="font-bold text-sm">
                Strategi Membangun Dana Darurat Bisnis
              </h1>
              <h3 className="text-xs h-32 text-justify pt-3">
                Pentingnya memiliki dana darurat bisnis dan memberikan strategi
                praktis untuk membangunnya. Ini termasuk langkah-langkah untuk
                mengalokasikan dana darurat, menentukan jumlah yang sesuai, dan
                bagaimana menggunakannya dalam...
              </h3>
              <div className="text-center mt-auto">
                <a
                  href=""
                  className="font-body text-white px-16 rounded-xl py-2 bg-primary"
                >
                  Lihat Detail
                </a>
              </div>
            </div>
          </div>

          <div className="w-64 h-96 rounded-2xl border border-[#DCDCDC] flex flex-col">
            <img
              src={artikel4}
              className="w-full rounded-2xl object-cover"
              alt=""
            />
            <div className="p-5 flex-grow flex flex-col">
              <h1 className="font-bold text-sm">
                Cara Efektif Menggunakan Teknologi dalam Pengelolaan Keuangan
                Bisnis
              </h1>
              <h3 className="text-xs h-32 text-justify pt-3">
                Pebisnis usaha menengah kebawah dapat menggunakan teknologi
                terbaru dalam pengelolaan keuangan bisnis. Ini mencakup aplikasi
                keuangan, perangkat lunak akuntansi, dan alat digital lainnya
                yang dapat...
              </h3>
              <div className="text-center mt-auto">
                <a
                  href=""
                  className="font-body text-white px-16 rounded-xl py-2 bg-primary"
                >
                  Lihat Detail
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ajakan untuk Bergabung */}
      <section className="h-72 w-full flex bg-primary">
        <img src={bgartikel} className="w-full object-cover absolute" alt="" />
        <div className="relative flex items-center">
          <div>
            <img
              data-aos="zoom-in"
              data-aos-duration="1000"
              src={Foto}
              className="w-80 h-48 ml-32 mr-20 object-cover rounded-xl "
              alt=""
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <h1 className="font-body mb-6 font-bold text-2xl text-white">
              Siap berkembang bersama UMKMConnect?
            </h1>
            <Link
              to="/Login"
              className="font-body text-white border border-white rounded-lg py-2 px-4"
            >
              Gabung Sekarang
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Dashboard;
