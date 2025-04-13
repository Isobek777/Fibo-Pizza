import React from 'react'
import Manzil from '../img/Manzil.svg'
import Manzil2 from '../img/Manzil2.svg'
import Manzil3 from '../img/Manzil3.svg'
import Manzil4 from '../img/Manzil4.svg'


import { Manzillar } from '../Ap'


const Contact = () => {
  return (
    <>
    <section className='py-14 mt-10   bg-[#E3ECF5] '>
      <div className='w-full max-w-[1240px] px-5 mx-auto'>
      <h6 className='font-bold text-3xl text-center text-yellow-400 mb-14'>To'lov va yetkazib berish</h6>
        <ul className='grid gap-12 mb-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
          {
            Manzillar.map((Manzil)=>{
              return(
                <li className='px-3 pt-10 pb-7 bg-white shadow rounded-xl flex flex-col items-center justify-center hover:-translate-y-5 transition duration-500 cursor-pointer relative'>
                  <div className='rounded-full absolute top-[-40px] p-5 bg-white'>
                    <img src={Manzil.img} alt="" />
                  </div>
                  
                <p className='font-bold text-sm text-center text-[#473E43]'>{Manzil.desc}</p>
              </li>
              )
              
            })
          }
        </ul>
        
        <div>
        <div className='w-full flex justify-center'>
                <div className='w-[1200px] rounded-lg '>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.588803794508!2d37.477642515926995!3d55.661360580528985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54da002656bc7%3A0xa799933657c1d4f!2z0L_RgC4g0JLQtdGA0L3QsNC00YHQutC-0LPQviwgODbQsiwg0JzQvtGB0LrQstCwLCAxMTk0MTU!5e0!3m2!1sru!2sru!4v1645970050041!5m2!1sru!2sru"
                                height="288"
                                className='w-full'
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
            </div>
        </div>
      </div>
    </section>



    </>
    

    
    
  )
}

export default Contact
