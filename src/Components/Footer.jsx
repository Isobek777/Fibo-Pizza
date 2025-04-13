import React from 'react'
import HeaderLogo from '../img/header-logo.svg'
import Social from '../img/social1.svg'
import Social2 from '../img/social2.svg'
import Social3 from '../img/social3.svg'
import Social4 from '../img/social4.svg'
import Social5 from '../img/social5.svg'
import Social6 from '../img/social6.svg'
import { Link } from 'react-router'
import '../Font-f.css'


const Footer = () => {
  return (
    <footer className='py-10 bg-white font-f '>
      <div className='w-full max-w-[1245px] px-5 mx-auto'>
        <div className=' justify-between lg:flex'>
            <div className=''>
                <Link className='w-20'> <img className='' src={HeaderLogo} alt="" /></Link>
                   
                    <div className='flex space-x-14 mb-6 mt-5'>
                        <p className='text-base font-f font-bold leading-8'>Kaloriya tarkibi va tarkibi</p>
                        <p className='text-base font-f font-bold leading-8'>Yuridik ma'lumotlar</p>
                    </div>
                    <h3 className='font-bold text-base leading-8 mb-4'>Bizning ijtimoiy tarmoqlarimiz</h3>

                    
                    {/* ijtimoiy tarmoqlar */}
                    <div className='grid grid-cols-2 mb-12'>
                        <div className='flex flex-col'>
                            <a  target='_blank' className='text-base font-f  leading-7 font-semibold' href="https://www.youtube.com/">Youtube</a>
                            <a target='_blank' className='text-base font-f leading-7 font-semibold' href="https://www.instagram.com/">Instagram</a>
                        </div>
                        <div className='flex flex-col'>
                            <a  target='_blank' className='text-base font-f leading-7 font-semibold' href="https://www.facebook.com/">Facebook</a>
                            <a target='_blank' className='text-base font-f leading-7 font-semibold' href="https://vk.com/">ВКонтакте</a>
                        </div>
                    </div>
            </div>
            <div className='w-full lg:w-1/2 bg-white items-center'>
            <h3 className='font-bold text-sm '>Hali ham savollaringiz bormi? Va biz doimo aloqadamiz:</h3>
            <div className='grid grid-cols-4 py-10 gap-4 '>
                <a  className='py-3 px-5 flex justify-center items-center border border-emerald-700 rounded-xl' href="https://www.whatsapp.com/">
                    <img className='w-[30px]' src={Social} alt="" />
                </a>

                <a className='py-2 px-5 flex justify-center items-center border border-emerald-700 rounded-xl' href="https://www.skype.com/">
                    <img className='w-[30px]' src={Social2} alt="" />
                </a>
                
                <a className='py-2 px-5 flex justify-center items-center border border-emerald-700 rounded-xl' href="https://www.messenger.com/">
                    <img className='w-[30px]' src={Social3} alt="" />
                </a>

                <a className='py-2 px-5 flex justify-center items-center border border-emerald-700 rounded-xl' href="https://t.me/valijonov_omadbek">
                    <img className='w-[30px]' src={Social4} alt="" />
                </a>

                <a className='py-2 px-5 flex justify-center items-center border border-emerald-700 rounded-xl' href="https://www.facebook.com/">
                    <img className='w-[30px]' src={Social5} alt="" />
                </a>
                
                <a className='py-2 px-5 flex justify-center items-center border border-emerald-700 rounded-xl' href="https://vk.com/">
                <img className='w-[30px]' src={Social6} alt="" />
                </a>

                <a className='py-2 px-5 flex justify-center items-center border border-emerald-700 rounded-xl col-span-2' href="https://vk.com/">
                <span className='text-sm leading-4 font-f font-bold '>Bizga Yozing</span>
                </a>
            </div>

            <div className='flex flex-col space-y-4'>
                <span className='text-yellow-300 font-bold text-[26px] font-f'>998 97 016 2929</span>
                <a className='inline-block py-2 w-44 text-center bg-[#F3F3F7] rounded-3xl font-bold  text-sm leading-7 text-[#696F7A]' href="tel+998970162929">Qo'ng'iroq</a>
            </div>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
