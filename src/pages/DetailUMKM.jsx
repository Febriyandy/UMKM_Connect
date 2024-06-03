import React, {useEffect} from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Darmo from "../assets/images/darmo1.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import sate from "../assets/images/sate.png"
import gudeg from "../assets/images/gudeg.png"
import eskamud from "../assets/images/eskamud.png"
import escinjau from "../assets/images/escinjau.png"

const DetailUMKM = () => {
    useEffect(() => {
        document.title = 'Detail UMKM';
      }, []);
  return (
    <>
      <Navbar />
      <section className="w-full h-auto pt-20 pb-10 bg-white ">
        <div className="w-full h-full flex">
          <div className="w-1/2 h-full pl-20 pr-10 flex flex-col justify-center font-body">
            <h1 className="font-bold text-xl text-primary py-5">
              Warung Pak Darmo
            </h1>
            <h2 className="text-justify">
              Warung Sate Madura Pak Darmo merupakan tempat yang cocok bagi
              pecinta kuliner Indonesia yang menginginkan cita rasa otentik Sate
              Madura. Dibuka oleh Pak Darmo sejak tahun 1998, seorang penggemar
              masakan tradisional, kami menghadirkan sate Madura dengan cita
              rasa yang menggugah selera.
              <br /> <br /> Pak Darmo adalah seorang pengusaha kuliner yang
              berpengalaman dalam memasak Sate Madura. Beliau telah menggeluti
              dunia masak-memasak sejak beliau remaja, dan keahliannya dalam
              memadukan bumbu tradisional Madura membuat Sate Madura Pak Darmo
              menjadi favorit di kalangan pecinta kuliner.
              <br /> <br /> Jangan ragu untuk menghubungi kami atau datang
              langsung ke warung kami untuk menikmati sate Madura yang lezat dan
              pengalaman kuliner yang tak terlupakan!
            </h2>
          </div>
          <div className="w-1/2 h-full  px-5 flex flex-col justify-center font-body">
            <div className="w-11/12 mx-auto h-60 my-5 rounded-xl border border-[#DCDCDC] shadow-lg py-3 px-5">
              <h1 className="font-bold text-base text-primary">
                Informasi UMKM
              </h1>
              <div className="flex ">
                <img src={Darmo} className="w-36 h-36 rounded-lg mt-6 " alt="" />
                <div>
                  <h1 className=" pl-5 font-bold py-1">Warung Pak Darmo</h1>
                  <h1 className="flex pl-5 py-1 items-center">
                    <BsFillTelephoneFill className="text-primary text-xl mr-2" />
                    0813-2938-0092
                  </h1>
                  <h1 className="flex pl-5 py-1 items-center">
                    <MdOutlineMailOutline className="text-primary text-xl mr-2" />
                    pakdarmo@gmail.com
                  </h1>
                  <h1 className="flex pl-5 py-1 items-center">
                    <IoMdTime className="text-primary text-xl mr-2" />
                    Senin-Sabtu Buka Pukul 11.00-23.00 WIB
                  </h1>
                  <h1 className='flex pl-5 py-1 items-center'><IoLocationOutline className='text-primary text-2xl mr-2'/>Jl. Sultan Agung No.111, Wirogunan, Kec. Mergangsan</h1>
                </div>
              </div>
            </div>
            <h2 className="text-justify px-10 py-5">Kami bangga menjadi bagian dari komunitas kuliner lokal dan berusaha memberikan pengalaman kuliner yang istimewa kepada setiap pelanggan. Di Warung Sate Madura Pak Darmo, kami tidak hanya menyajikan makanan lezat, tetapi juga menghadirkan suasana hangat dan ramah bagi semua pengunjung.</h2>
          </div>
        </div>
        <h1 className="font-body font-bold text-lg text-primary px-20 py-5">Rekomendasi Menu</h1>
        <div className='h-auto w-full flex flex-col items-center justify-center'>
        <div className='grid grid-cols-4 gap-14 mx-auto'>
            <div className='w-60 h-80  rounded-xl border shadow-lg border-[#DCDCDC]'>
                <img src={sate} className='w-full h-2/5 object-cover rounded-xl' alt="" />
                <div className='px-5 pt-2 font-body'>
                    <h1 className='font-bold text-primary'>Sate Madura Pak Darmo</h1>
                    <h2 className='h-28 text-xs text-justify'>Sate daging sapi dengan bumbu Madura yang kaya rempah dan kuah kacang yang gurih. Rasakan sensasi kelezatan tradisional dari Madura di setiap tusukan sate</h2>
                    <div className='relative flex justify-center '>
                        <a href="/Makanan/Detail" className='absolute font-body text-sm text-white px-12 rounded-lg py-1  bg-primary'>Selengkapnya</a>
                    </div>
                </div>
            </div>
            <div className='w-60 h-80  rounded-xl border shadow-lg border-[#DCDCDC]'>
                <img src={gudeg} className='w-full h-2/5 object-cover rounded-xl' alt="" />
                <div className='px-5 pt-2 font-body'>
                    <h1 className='font-bold text-primary'>Gudeg Pak Darmo</h1>
                    <h2 className='h-28 text-xs text-justify'>Gudeg dengan cita rasa yang gurih dan manis membuat makanan legendaris ini sangat digemari oleh semua kalangan. Gudeg biasanya disajikan di lengkapi dengan nasi putih, telur dan daging ayam.</h2>
                    <div className='relative flex justify-center '>
                        <a className='absolute font-body text-sm text-white px-12 rounded-lg py-1  bg-primary'>Selengkapnya</a>
                    </div>
                </div>
            </div>
            <div className='w-60 h-80  rounded-xl border shadow-lg border-[#DCDCDC]'>
                <img src={eskamud} className='w-full h-2/5 object-cover rounded-xl' alt="" />
                <div className='px-5 pt-2 font-body'>
                    <h1 className='font-bold text-primary'>Es Kelapa Segar</h1>
                    <h2 className='h-28 text-xs text-justify'>Es Kelapa muda yang disajikan dengan es dan gula bisa menjadi menu takjil nikmat untuk berbuka puasa. Selain rasanya yang segar,air kelapa juga punya banyak manfaat bagi kesehatan tubuh.</h2>
                    <div className='relative flex justify-center '>
                        <a className='absolute font-body text-sm text-white px-12 rounded-lg py-1  bg-primary'>Selengkapnya</a>
                    </div>
                </div>
            </div>
            <div className='w-60 h-80  rounded-xl border shadow-lg border-[#DCDCDC]'>
                <img src={escinjau} className='w-full h-2/5 object-cover rounded-xl' alt="" />
                <div className='px-5 pt-2 font-body'>
                    <h1 className='font-bold text-primary'>Es Cincau Hijau Manis</h1>
                    <h2 className='h-28 text-xs text-justify'>Es cincau hijau dengan daunnya yang diremas dan dicampur dengan air matang. Es cincau hijau disajikan dengan gula merah dan santan serta parutan es batu yang menambah kesegaran.</h2>
                    <div className='relative flex justify-center '>
                        <a className='bottom-10 font-body text-sm text-white px-12 rounded-lg py-1  bg-primary'>Selengkapnya</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default DetailUMKM;
