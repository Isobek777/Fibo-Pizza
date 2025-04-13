import React, { useState } from 'react'
import Hamburger from 'hamburger-react'
import { Link, NavLink } from 'react-router'
location

export default function Hamburgergui() {
  const [open, setOpen] = useState(false)
  return (
    <div className='flex justify-end '>
      <Hamburger
        size={25}
        toggled={open}
        toggle={setOpen} />
      {open &&
        <div className='font-f fixed  hamburger-div z-50 pt-8  flex flex-col items-end justify-start overflow-auto h-screen  w-screen top-0 left-0  p-6 text-black bg-yellow-400   dark:text-black'>
          <header className='fixed flex flex-col items-end w-full '>
            <button className=' xl:hidden inline-block'>
               <Hamburger
            size={25}
            toggled={open}
            toggle={setOpen} />
            </button>

            <nav className='space-y-2 flex flex-col'>
              <ul className=' justify-between text-right space-y-1.5  text-4xl '>
              <li className="bg-transparent font-semibold  text-base">
                <Link onClick={()=>setOpen(false)} to="/"className="font-semibold  font-semibold text-base   textolor md:text-sm py-2 lg:px-3 ">
                  Bosh sahifa
                </Link>           
              </li>
              <li className="bg-transparent font-semibold   text-base ">
                <Link onClick={()=>setOpen(false)} to="/pitsalar" className="font-semibold  text-base py-2 lg:px-3 ">
                  Pitsalar
                </Link>
              </li>
              <li className="bg-transparent font-semibold   text-base ">
                <Link onClick={()=>setOpen(false)} to="/makaron" className="font-semibold  text-base py-2 lg:px-3 ">
                  Makaron
                </Link>
              </li>
              <li className="bg-transparent font-semibold   text-base ">
                <Link onClick={()=>setOpen(false)} to="/shorva" className="font-semibold  text-base py-2 lg:px-3 ">
                  Sho'rvalar
                </Link>
              </li>
              <li className="bg-transparent font-semibold   text-base ">
                <Link onClick={()=>setOpen(false)} to="/saladlar" className="font-semibol  text-base py-2 lg:px-3 ">
                  Saladlar
                </Link>
              </li>
              <li className="bg-transparent font-semibold   text-base ">
                <Link onClick={()=>setOpen(false)} to="/ichimliklar" className="font-semibold  text-base py-2 lg:px-3 ">
                  Ichimliklar
                </Link>
              </li>
              <li className="bg-transparent font-semibold   text-base ">
                <Link onClick={()=>setOpen(false)} to="/desertlar" className="font-semibold  text-base py-2 lg:px-3 ">
                  Desert
                </Link>
              </li>
              <li className="bg-transparent font-semibold   text-base ">
                <Link onClick={()=>setOpen(false)} to="/pasti" className="font-semibold   text-base py-2 lg:px-3 ">
                  AntiPasti
                </Link>
              </li>
              <li className="bg-transparent font-semibold   text-base ">
                <Link onClick={()=>setOpen(false)} to="/aksiya" className="font-semibold   text-base py-2 lg:px-3 ">
                  Aksiya
                </Link>
              </li>
              <li className="bg-transparent font-semibold   text-base ">
              <Link onClick={()=>setOpen(false)} to="/turli" className="font-semibold  text-base py-2 lg:px-3 ">
                  Turli
                </Link>
              </li>
              <li className="bg-transparent font-semibold   text-base ">
                <Link onClick={()=>setOpen(false)} to="/contact" className="font-semibold  text-base py-2 lg:px-3 ">
                  Manzil
                </Link>
              </li>

              
              </ul>
            </nav>
           
          </header>
        </div>}
    </div>

  )
}
