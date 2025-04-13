import React from 'react'
import NewPizza from '../img/news-pizza.svg'
import NewPizza1 from '../img/news-pizza.svg'
import NewPizza2 from '../img/news-pizza.svg'
import NewPizza3 from '../img/news-pizza.svg'
import Swiper4 from '../Components/Swiper'
import Swiper1 from '../Components/Swiper1'


const Mahsulotlar = () => {
  return (
    <>
    <section data-aos="fade-up" className='pb-14 aos-init aos-animate bg-white'>
        <div className='w-full max-w-[1240px] px-5 mx-auto '>
          <div className='pb-10'>
            <Swiper1/>
          </div>
                
        
            <h3 className='text-2xl font-bold leading-7 mb-8'>Mahsulotlar</h3>
            <div className='grid gap-5  grid-cols-1  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  '>
              <button className='shadow-shadow py-[14px] pl-4 flex items-center hover:-translate-y-5 transition duration-500 ease-in-out border border-indigo-50 rounded-none'>
                <img className='mr-6 w-[71px]' src={NewPizza} alt="Pizza turlari" />
                <div className='flex flex-col items-start'>
                  <h4 className='text-xl text-black font-bold'>
                    Karbonara
                  </h4>
                  <span className='text-yellow-400 text-base font-extrabold'>12000</span>
                </div>
              </button>
    
              <button className='shadow-shadow py-[14px] pl-4 flex items-center hover:-translate-y-5 transition duration-500 ease-in-out border border-indigo-50 rounded-none'>
                <img className='mr-6 w-[71px]' src={NewPizza1} alt="Pizza turlari" />
                <div className='flex flex-col items-start'>
                  <h4 className='text-xl text-black font-bold'>
                    Oddiy pitsa
                  </h4>
                  <span className='text-yellow-400 text-base font-extrabold'>20000</span>
                </div>
              </button>
    
              <button className='shadow-shadow py-[14px] pl-4 flex items-center hover:-translate-y-5 transition duration-500 ease-in-out border border-indigo-50 rounded-none'>
                <img className='mr-6 w-[71px]' src={NewPizza2} alt="Pizza turlari" />
                <div className='flex flex-col items-start'>
                  <h4 className='text-xl text-black font-bold'>
                    Sutli kokteyl
                  </h4>
                  <span className='text-yellow-400 text-base font-extrabold'>14500</span>
                </div>
              </button>
    
              <button className='shadow-shadow py-[14px] pl-4 flex items-center hover:-translate-y-5 transition duration-500 ease-in-out border border-indigo-50 rounded-none'>
                <img className='mr-6 w-[71px]' src={NewPizza3} alt="Pizza turlari" />
                <div className='flex flex-col items-start'>
                  <h4 className='text-xl text-black font-bold'>
                    B-B-Q
                  </h4>
                  <span className='text-yellow-400 text-base font-extrabold'>8000</span>
                </div>
              </button>
            </div>
          </div>
          </section>

          <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    </>
    
  )
}

export default Mahsulotlar
