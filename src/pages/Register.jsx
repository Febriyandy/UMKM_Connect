import React, { useEffect, useState } from 'react';
import Foto from "../assets/images/login.png";
import Background from "../assets/images/bglogin.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    document.title = 'Register';
  }, []);

  return (
    <>
      <section className='w-full h-screen flex'>
        <div className='w-1/2 h-full'>
          <h1 data-aos="zoom-in" data-aos-duration="1000" className='font-body font-bold text-3xl text-primary px-20 pt-10'>UMKMConnect</h1>
          <div className='flex flex-col justify-center items-center'>
            <img data-aos="zoom-in" data-aos-duration="1000" src={Foto} className='w-3/5' alt="UMKMConnect" />
            <h1 data-aos="fade-down" data-aos-duration="1000" className='font-body font-bold text-2xl text-primary w-1/2 text-center'>
              Tingkatkan Usahamu bersama UMKMConnect
            </h1>
          </div>
        </div>
        <div className='w-1/2 h-full flex justify-center items-center relative'>
          <img src={Background} className='w-full h-full object-cover rounded-l-primary' alt="Background" />
          <div data-aos="zoom-in" data-aos-duration="1000" className='w-2/3 h-auto absolute font-body bg-opacity-25 bg-white p-10 rounded-lg'>
            <h1 className='font-bold text-2xl text-white'>Pendaftaran</h1>
            <h1 className='text-white'>Mohon isi data berikut dengan benar.</h1>
            <div className='flex flex-col'>
              <label className='font-semibold py-2 text-white'>Nama UMKM</label>
              <input 
                type="text" 
                className='py-2 rounded-lg outline-none px-3 placeholder-slate-400
                  focus:outline-none focus:border-[#ffbf71] focus:ring-2 focus:ring-[#ffbf71]' 
                placeholder='Masukkan nama UMKM anda' 
              />
              <label className='font-semibold py-2 text-white'>Email</label>
              <input 
                type="email" 
                className='py-2 rounded-lg outline-none px-3 placeholder-slate-400
                  focus:outline-none focus:border-[#ffbf71] focus:ring-2 focus:ring-[#ffbf71]' 
                placeholder='Alamat Email' 
              />
              <label className='font-semibold py-2 text-white'>Password</label>
              <div className='relative '>
                <input 
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange} 
                  className='py-2 w-full rounded-lg outline-none px-3 placeholder-slate-400
                  focus:outline-none focus:border-[#ffbf71] focus:ring-2 focus:ring-[#ffbf71]' 
                  placeholder='Masukkan password anda' 
                />
                <span
                  className="text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <label className='font-semibold py-2 text-white'>Konfirmasi Password</label>
              <div className='relative '>
                <input 
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange} 
                  className='py-2 w-full rounded-lg outline-none px-3 placeholder-slate-400
                  focus:outline-none focus:border-[#ffbf71] focus:ring-2 focus:ring-[#ffbf71]' 
                  placeholder='Konfirmasi password anda' 
                />
                <span
                  className="text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            
              <button className='mt-8 bg-white rounded-md py-2  font-bold   hover:text-primary'>Daftar Akun</button>
              <h1 className='pt-5'>Sudah punya akun?<a href="/Login" className='text-white'> Masuk sekarang</a></h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
