import { Aksiyalar } from '../Ap'
import { Link } from "react-router-dom";

const Aksiya = () => {
    return (
        <>
        <section className='py-10 '>
            <div className='w-full max-w-[1240px] px-5 mx-auto'>
                <h2 className='font-bold text-[32px] text-yellow-400 leading-10 py-10'>Aksiyalar</h2>
                <ul className='grid gap-7 grid-cols-1 sm:grid-cols-2 hover:shadow  xl:grid-cols-3'>
                    {
                        Aksiyalar.map((aksiya) => {
                            return (
                                <li key={aksiya.id} data-aos="fade-up" >
                                    <Link className='border  rounded-lg inline-block w-full h-full' to={`/stock/${aksiya.id}`}>
                                    <img className='w-full' src={aksiya.img} alt="" />
                                    <div className='p-5 '>
                                        
                                        <h3 className='text-[#696f7a] font-bold text-2xl leading-7 mb-4 flex-grow '>{aksiya.name}</h3>
                                    <p className='font-medium text-sm text-[#696f7a] mb-4 flex-grow'>{aksiya.desc}</p>
                                        
                            
                                    <button className="inline-block w-32 px-2 rounded-lg font-bold text-sm leading-7  bg-yellow-300 py-1 text-white">
                                        Tomosha qilish
                                    </button>
                                    </div>
                                    

                                    <div className='w-full flex items-center justify-between'>
                                        <span className='font-bold text-[22px] leading-5 mr-5 '>{aksiya.narxi}</span>

                                    </div>
                                    </Link>
                                    
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

export default Aksiya
