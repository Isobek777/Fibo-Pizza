import React, { useContext } from "react";
import { AntiPasti } from '../Ap'
import { CartContext } from "../Components/CartContext";
import { useModal } from "../Components/ModalProvider";

const Pasti = () => {
    const { cart, addToCart } = useContext(CartContext); // 🛒 Savatni olish

    const {openModal} = useModal()
  return (
    <section className='py-5  bg-white'>
                    <div className='w-full max-w-[1240px] px-5 mx-auto'>
                        <h2 className='font-bold text-[32px] text-yellow-400 leading-10 py-10'>Antipasti</h2>
                        <ul className='grid gap-7 grid-cols-1 sm:grid-cols-2  hover:shadow   xl:grid-cols-4'>
                            {
                                AntiPasti.map((pasti) => {
                                    return (
                                        <li key={pasti.id} data-aos="fade-up" className='p-5  border border-border flex flex-col items-center justify-center  border-indigo-50 rounded-lg '>
                                          <button onClick={()=> openModal(pasti)}>
                                            <img className='w-full max-w-[228px] h-[228px]' src={pasti.img} alt="" />
                                          </button>
                                                
                                                <h3 className='text-[#696f7a] font-bold text-2xl leading-7 mb-4 flex-grow '>{pasti.nomi}</h3>
                                            <p className='font-medium text-sm text-[#696f7a] mb-4 flex-grow'>{pasti.desc}</p>
                                            
                                            
        
                                            <div className='w-full flex items-center justify-between'>
                                                <span className='font-bold text-[22px] leading-5 mr-5 '>{pasti.narxi}</span>
                                                <button onClick={() => addToCart(pasti)} className='inline-block w-32 px-5 rounded-lg font-bold text-sm text-center leading-7 bg-yellow-300'><span className='text-white text-center'>Savatga</span></button>
                                                
        
                                            </div>
                                        </li>
                                    )
                                })
                            }
        
        
        
                        </ul>
        
                    </div>
                </section>
  )
}

export default Pasti
