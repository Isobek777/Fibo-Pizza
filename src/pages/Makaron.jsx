import React, { useContext } from "react";
import { Makaronlar } from '../Ap'
import { CartContext } from "../Components/CartContext";
import { useModal } from "../Components/ModalProvider";


const Makaron = () => {
      const { cart, addToCart } = useContext(CartContext); // 🛒 Savatni olish

      const {openModal} = useModal()
    return (
        <section className='py-4  bg-white'>
            <div className='w-full max-w-[1240px] px-5 mx-auto'>
                <h2 className='font-bold text-[32px] text-yellow-400  leading-10 py-10'>Makaronlar</h2>
                <ul className='grid gap-5 grid-cols-1 sm:grid-cols-2 hover:shadow  md:grid-cols-3 xl:grid-cols-4'>
                    {
                        Makaronlar.map((makaron)=>{
                            return(
                                <li key={makaron.id} data-aos="fade-up" className='border border-indigo-50 p-5 rounded-lg flex flex-col items-center  justify-center'>
                                <button onClick={()=> openModal(makaron)} className='disabled sm:cursor-pointer '>
                                    <img className='w-full max-w-[228px] h-[228px]' src={makaron.img} lt="Makaronlar" />
                                </button>
                                <h3 className='font-bold text-2xl leading-7 mb-4 flex-grow text-[#696f7a]'>{makaron.nomi}</h3>
                                <p className='font-medium text-sm mb-4 text-[#696f7a]'>{makaron.desc}</p>

                                <div className='w-full flex items-center justify-between'>
                                    <span className='font-bold text-[22px] leading-5 mr-5 '>{makaron.narxi}</span>
                                    <button onClick={() => addToCart(makaron)} className='w-32 py-1 right-full text-center rounded-lg font-bold text-sm leading-7 bg-yellow-400 text-white'>Savatga</button>
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

export default Makaron
