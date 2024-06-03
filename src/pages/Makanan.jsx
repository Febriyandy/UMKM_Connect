import React, {useEffect} from 'react'
import Navbar from '../components/navbar'
import Foto from "../assets/images/makanan.png"
import { IoIosSearch } from "react-icons/io";
import sate from "../assets/images/sate.png"
import gudeg from "../assets/images/gudeg.png"
import pempek from "../assets/images/pempek.png"
import rendang from "../assets/images/rendang.png"
import bakso from "../assets/images/bakso.png"
import uduk from "../assets/images/uduk.png"
import nasgor from "../assets/images/liwet.png"
import siomay from "../assets/images/siomay.png"
import Footer from '../components/footer';

const Makanan = () => {
    useEffect(() => {
        document.title = 'Makanan';
      }, []);
  return (
    <>
    <Navbar/>
    <section>
        <div className=' w-full h-96 bg-[#14142B] relative'>
          <img src={Foto} className='opacity-35 h-96 w-full object-cover' alt="" />
          <div className='flex flex-col items-center h-full w-full absolute top-5 '>
            <h1 className='font-body font-bold text-white text-2xl text-center mt-20'>
            Selamat Datang di Pilihan Kuliner Kami!
            </h1>
            <div className='relative w-1/2 mt-10'>
              <input 
                type="text" 
                className='w-full h-14 rounded-lg text-lg font-body outline-none p-4 pr-12' 
                placeholder='Search....'
              />
              <IoIosSearch className='absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl text-gray-500'  />
            </div>
            <h2 className='font-body text-white text-center w-3/4 mt-10'>
            Nikmati ragam hidangan lezat dari para UMKM lokal kami. Dibuat dengan cinta dan keahlian, setiap hidangan membawa cita rasa yang unik dan menyenangkan. Temukan kelezatan baru dan dukung komunitas kami dengan setiap suapan!
            </h2>
          </div>
        </div>
      </section>
      <section className='h-auto w-full py-20 flex flex-col items-center justify-center'>
        <div className='grid grid-cols-4 gap-14'>
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
                        <a href='' className='absolute font-body text-sm text-white px-12 rounded-lg py-1  bg-primary'>Selengkapnya</a>
                    </div>
                </div>
            </div>
            <div className='w-60 h-80  rounded-xl border shadow-lg border-[#DCDCDC]'>
                <img src={rendang} className='w-full h-2/5 object-cover rounded-xl' alt="" />
                <div className='px-5 pt-2 font-body'>
                    <h1 className='font-bold text-primary'>Rendang Uda</h1>
                    <h2 className='h-28 text-xs text-justify'>Rendang makanan menjadi salah satu sajian utama di setiap Rumah Makan Padang. Rendang terbuat dari olahan daging yang dimasak dengan bumbu rempah dan cita rasa yang lezat.</h2>
                    <div className='relative flex justify-center '>
                        <a href='' className='absolute font-body text-sm text-white px-12 rounded-lg py-1  bg-primary'>Selengkapnya</a>
                    </div>
                </div>
            </div>
            <div className='w-60 h-80  rounded-xl border shadow-lg border-[#DCDCDC]'>
                <img src={pempek} className='w-full h-2/5 object-cover rounded-xl' alt="" />
                <div className='px-5 pt-2 font-body'>
                    <h1 className='font-bold text-primary'>Pempek Bu Tini</h1>
                    <h2 className='h-28 text-xs text-justify'>Pempek berbahan daging ikan dan tepung dengan rasa asam, manis, pedas, dan gurih. Pempek berbagai jenisnya, yaitu pempek lenjer, bulat, kulit ikan, dan kapal selam  yang berisi telur ayam.</h2>
                    <div className='relative flex justify-center '>
                        <a href='' className='absolute font-body text-sm text-white px-12 rounded-lg py-1  bg-primary'>Selengkapnya</a>
                    </div>
                </div>
            </div>
            <div className='w-60 h-80  rounded-xl border shadow-lg border-[#DCDCDC]'>
                <img src={bakso} className='w-full h-2/5 object-cover rounded-xl' alt="" />
                <div className='px-5 pt-2 font-body'>
                    <h1 className='font-bold text-primary'>Bakso Solo</h1>
                    <h2 className='h-28 text-xs text-justify'>Bakso berupa bola daging yang terbuat dari campuran daging sapi giling dan tepung tapioka disajikan dengan kuah kaldu dan diberi topping berupa mie, tahu, bawang goreng, dan seledri. </h2>
                    <div className='relative flex justify-center '>
                        <a href='' className='absolute font-body text-sm text-white px-12 rounded-lg py-1  bg-primary'>Selengkapnya</a>
                    </div>
                </div>
            </div>
            <div className='w-60 h-80  rounded-xl border shadow-lg border-[#DCDCDC]'>
                <img src={nasgor} className='w-full h-2/5 object-cover rounded-xl' alt="" />
                <div className='px-5 pt-2 font-body'>
                    <h1 className='font-bold text-primary'>Nasi Goreng Padang</h1>
                    <h2 className='h-28 text-xs text-justify'>Nasi Goreng Padang dari bumbu kari bercita rasa gurih, tidak menggunakan kecap manis. Rasanya asin, tetapi juga sedikit pedas dengan tambahan  kerupuk merah, seledri cincang.</h2>
                    <div className='relative flex justify-center '>
                        <a href='' className='absolute font-body text-sm text-white px-12 rounded-lg py-1  bg-primary'>Selengkapnya</a>
                    </div>
                </div>
            </div>
            <div className='w-60 h-80  rounded-xl border shadow-lg border-[#DCDCDC]'>
                <img src={siomay} className='w-full h-2/5 object-cover rounded-xl' alt="" />
                <div className='px-5 pt-2 font-body'>
                    <h1 className='font-bold text-primary'>Siomay Bu Tini</h1>
                    <h2 className='h-28 text-xs text-justify'>Siomay olahan tepung dan ikan tenggiri dengan tambahan kentang, kol, telur dan tahu yang dikukus. Siomay dengan bumbu kacang kental, perasan jeruk nipis dan tambahan kecap manis.</h2>
                    <div className='relative flex justify-center '>
                        <a href='' className='absolute font-body text-sm text-white px-12 rounded-lg py-1  bg-primary'>Selengkapnya</a>
                    </div>
                </div>
            </div>
            <div className='w-60 h-80  rounded-xl border shadow-lg border-[#DCDCDC]'>
                <img src={uduk} className='w-full h-2/5 object-cover rounded-xl' alt="" />
                <div className='px-5 pt-2 font-body'>
                    <h1 className='font-bold text-primary'>Nasi Uduk Barokah</h1>
                    <h2 className='h-28 text-xs text-justify'>Nasi yang dimasak dengan santan,  disajikan dengan lauk-pauk seperti ayam goreng, tempe, tahu, dan sambal kacang yang khas. Memiliki rasa gurih yang nikmat dan aroma harum santan.</h2>
                    <div className='relative flex justify-center '>
                        <a href='' className='bottom-10 font-body text-sm text-white px-12 rounded-lg py-1  bg-primary'>Selengkapnya</a>
                    </div>
                </div>
            </div>
            
        </div>
        <button className='text-center font-body font-bold text-primary py-1 px-7 rounded-xl mt-10 border-2 border-primary'>Lebih Banyak</button>
      </section>
      <Footer/>
    </>
  )
}

export default Makanan