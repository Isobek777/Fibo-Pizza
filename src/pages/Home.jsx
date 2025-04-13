import React from 'react'
import NewPizza from '../img/news-pizza.svg'
import NewPizza1 from '../img/news-pizza.svg'
import NewPizza2 from '../img/news-pizza.svg'
import NewPizza3 from '../img/news-pizza.svg'
import PPizza from '../img/mahsulot.png'
import Shokolod from '../img/moloko-sh.svg'
import barbeco from '../img/barbeco.svg'


const Home = () => {
  return (
    <>
    <section data-aos="fade-up" className='pb-14 aos-init aos-animate bg-white'>
        <div className='w-full max-w-[1240px] px-5 mx-auto '>
          
                  
            <h3 className='text-2xl font-bold leading-7 mb-8 home-h3 text-home '>Mahsulotlar</h3>
            <div className='grid gap-5   grid-cols-1  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  '>
              <button className='shadow-shadow py-[14px] pl-4 flex pizza-h-b items-center hover:-translate-y-5 transition duration-500 ease-in-out border border-indigo-50 rounded-none'>
              <img className='pizza-h-img mr-6 w-[71px] ' src={NewPizza1} alt="Pizza turlari" />
                <div className='flex flex-col items-start'>
                  <h4 className='text-xl text-black font-bold pizza-text-h'>
                    Karbonara
                  </h4>
                  <span className='text-yellow-400 text-base font-extrabold pizza-text-h-p'>12000</span>
                </div>
              </button>
    
              <button className='shadow-shadow py-[14px] pl-4 flex pizza-h-b items-center hover:-translate-y-5 transition duration-500 ease-in-out border border-indigo-50 rounded-none'>
                <img className='pizza-h-img mr-6 w-[71px]' src={PPizza} alt="Pizza turlari" />
                <div className='flex flex-col items-start'>
                  <h4 className='text-xl text-black font-bold pizza-text-h'>
                    Oddiy pitsa
                  </h4>
                  <span className='text-yellow-400 text-base font-extrabold pizza-text-h-p'>20000</span>
                </div>
              </button>
    
              <button className='shadow-shadow py-[14px] pl-4 flex pizza-h-b items-center hover:-translate-y-5 transition duration-500 ease-in-out border border-indigo-50 rounded-none'>
                <img className='pizza-h-img mr-6 w-[71px]' src={Shokolod} alt="Pizza turlari" />
                <div className='flex flex-col items-start'>
                  <h4 className='text-xl text-black font-bold pizza-text-h'>
                    Sutli kokteyl
                  </h4>
                  <span className='text-yellow-400 text-base font-extrabold pizza-text-h-p'>14500</span>
                </div>
              </button>
    
              <button className='shadow-shadow py-[14px] pl-4 flex pizza-h-b items-center hover:-translate-y-5 transition duration-500 ease-in-out border border-indigo-50 rounded-none'>
                <img className='pizza-h-img mr-6 w-[71px]' src={barbeco} alt="Pizza turlari" />
                <div className='flex flex-col items-start'>
                  <h4 className='text-xl text-black font-bold pizza-text-h'>
                    B-B-Q
                  </h4>
                  <span className='text-yellow-400 text-base font-extrabold pizza-text-h-p'>8000</span>
                </div>
              </button>
            </div>

            
          </div>
          </section>

          <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    </>
    
  )
}

export default Home

