import React, { useContext } from "react";
import { Pitsalar4 } from "../Ap";
import { CartContext } from "../Components/CartContext";
import { useModal } from "../Components/ModalProvider";

export const Pitsalar1 = () => {
    const { cart, addToCart } = useContext(CartContext); // 🛒 Savatni olish

    const {openModal} = useModal()
    return (
        <section className='py-4  bg-white'>
            <div className='w-full max-w-[1240px] px-5 mx-auto'>
                <h2 className='font-bold text-[32px] text-yellow-400  leading-10 py-10'>Pitsalar</h2>
                <ul className='grid gap-5 grid-cols-1 sm:grid-cols-2 hover:shadow  md:grid-cols-3 xl:grid-cols-4'>
                    {
                        Pitsalar4.map((pitsa) => {
                            return (
                                <li key={pitsa.id} data-aos="fade-up" className='border border-indigo-50 p-5 rounded-lg flex flex-col items-center  justify-center'>
                                    <button onClick={()=>openModal(pitsa)} className='disabled sm:cursor-pointer '>
                                        <img className='w-full max-w-[228px] h-[228px]' src={pitsa.img} lt="pitsalar" />
                                    </button>
                                    <h3 className='font-bold text-2xl leading-7 mb-4 flex-grow text-[#696f7a]'>{pitsa.nomi}</h3>
                                    <p className='font-medium text-sm mb-4 text-[#696f7a]'>{pitsa.desc}</p>

                                    <div className='w-full flex items-center justify-between'>
                                        <span className='font-bold text-[22px] leading-5 mr-5 '>{pitsa.narxi}</span>
                                        <button onClick={() => addToCart(pitsa)} className='w-32 py-1 right-full text-center rounded-lg font-bold text-sm leading-7 bg-yellow-400 text-white'>Savatga</button>
                                    </div>
                                </li>
                            )

                        })
                    }



                </ul>

            </div>
        </section>
    );
};

export default Pitsalar1;
