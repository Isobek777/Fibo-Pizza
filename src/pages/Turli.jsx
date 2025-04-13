import React, { useContext } from "react";
import { Different} from '../Ap'

import { CartContext } from "../Components/CartContext";
import { useModal } from "../Components/ModalProvider";

const Turli = () => {
   const { addToCart } = useContext(CartContext); // 🛒 Savatni olish

   const {openModal} = useModal()
  return (
    <>
    <section className='py-4'>
  <div className='w-full max-w-[1240px] px-5 mx-auto'>
    {/* Salatlar */}
    <h2 className='font-bold text-[32px] text-yellow-400 py-10'>Different</h2>
     <ul className='grid gap-5 grid-cols-1 sm:grid-cols-2 hover:shadow  md:grid-cols-3 xl:grid-cols-4'>
                        {
                            Different.map((differn) => {
                                return (
                                    <li key={differn.id} data-aos="fade-up" className='border border-indigo-50 p-5 rounded-lg flex flex-col items-center  justify-center'>
                                        <button onClick={()=>openModal(differn)} className='disabled sm:cursor-pointer '>
                                            <img className='w-full max-w-[228px] h-[228px]' src={differn.img} lt="differnlar" />
                                        </button>
                                        <h3 className='font-bold text-2xl leading-7 mb-4 flex-grow text-[#696f7a]'>{differn.nomi}</h3>
                                        <p className='font-medium text-sm mb-4 text-[#696f7a]'>{differn.desc}</p>
    
                                        <div className='w-full flex items-center justify-between'>
                                            <span className='font-bold text-[22px] leading-5 mr-5 '>{differn.narxi}</span>
                                            <button onClick={() => addToCart(differn)} className='w-32 py-1 right-full text-center rounded-lg font-bold text-sm leading-7 bg-yellow-400 text-white'>В корзину</button>
                                        </div>
                                    </li>
                                )
    
                            })
                        }
    
    
    
                    </ul>
  </div>
</section>

    </>
    
  )
}

export default Turli
