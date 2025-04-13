import React, { useContext } from "react";
import Ichimlik1 from '../img/suv1.png'
import Ichimlik2 from '../img/suv2.png'
import Ichimlik3 from '../img/suv3.png'
import Ichimlik4 from '../img/suv4.jpg'
import Ichimlik5 from '../img/suv5.jpg'
import Ichimlik6 from '../img/suv6.png'
import { Suvlar } from '../Ap'
import { CartContext } from "../Components/CartContext";
import { useModal } from "../Components/ModalProvider";


const Ichimliklar = () => {
    const { addToCart } = useContext(CartContext); // 🛒 Savatni olish

    const {openModal} = useModal()
    return (
        <>
            <section className='py-4 '>
                <div className='w-full max-w-[1240px] px-5 mx-auto'>
                    <h2 className='font-bold text-[32px] text-yellow-400 leading-10 py-10'>Ichimliklar</h2>
                    <ul className='grid gap-5 grid-cols-1 suv-grid sm:grid-cols-2  md:grid-cols-3  hover:shadow  xl:grid-cols-4'>
                        {
                            Suvlar.map((suv) => {
                                return (
                                    <li key={suv.id} data-aos="fade-up" className='border border-indigo-50  rounded-lg flex flex-col items-center  justify-center '>

                                        <div className='p-5'>
                                            <button onClick={()=> openModal(suv)} className="mx-auto flex ">
                                                <img className=' w-[228px] h-[228px]' src={suv.img} alt={suv.name} />
                                            </button>

                                            <h3 className='text-[#696f7a] font-bold suv-name sm:text-center  text-2xl leading-7 mb-4 flex-grow '>{suv.name}</h3>
                                            <p className='font-medium text-sm font-f text-[#696f7a] suv-desc mb-4 flex-grow'>{suv.desc}</p>
                                            <div className='w-full flex items-center justify-between'>

                                                <span className='font-bold text-[22px] leading-5 mr-5 '>{suv.narxi}</span>
                                                <button onClick={() => addToCart(suv)} className="inline-block w-32 px-2 rounded-lg font-bold text-sm leading-7  bg-yellow-300 py-1 text-white"><span className='text-white text-center'>Savatga</span></button>
                                                

                                            </div>
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

export default Ichimliklar
