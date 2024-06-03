import React, {useEffect} from 'react'

const Notfound = () => {
  useEffect(() => {
    document.title = 'NotFound';
  }, []);
  return (
    <div>
        <h1 className='font-body font-bold text-3xl px-10 pt-10'>Oopss!!! <br />404 Not Found</h1>
        <h2 className='font-body pt-5 text-xl px-10'>
            Halaman yang anda tuju tidak tersedia
        </h2>
    </div>
  )
}

export default Notfound