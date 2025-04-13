import React, { useContext, useState } from "react";
import HeaderLogo from "../img/header-logo.svg";
import { CartContext } from "./CartContext";
import Swiper1 from "./Swiper1";
import { Link, NavLink } from "react-router-dom";
import Hamburger from "./Hamburger";
import { useLocation } from 'react-router-dom';
// img
import close from '../img/close.svg'
import { toast } from "react-toastify";
const Header = () => {
  const location = useLocation();

  const { cart, deleteItem } = useContext(CartContext); // Bu yerda cart va deleteItem olish

  const [openCart, SetOpenCart] = useState(false);
  const [quantities, setQuantities] = useState(() => {
    const initial = {};
    cart.forEach(item => {
      initial[item.id] = 0;
    });
    return initial;
  });

  const increment = (id) => {
    setQuantities(prev => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  

  const decrement = (id) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) - 1),
    }));
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.narxi * (quantities[item.id] || 1),
    0
  );



  return (
    <header className="py-7 ">
      <div className="w-full max-w-[1240px] px-5 mx-auto">
        <div className="flex justify-between items-center mb-5">
          <a href="/">
            <img width={80} height={59.13} src={HeaderLogo} alt="" />
          </a>

          <div className="space-x-7 flex items-center call-link">
            <a className="call-link-ch text-base Rsf w-44 py-2.5 inline-block mr-auto right-0 md:mr-[9%] sm:mr-[9%] absolute  text-center bg-[#F3F3F7] rounded-3xl leading-7 font-bold text-[#696F7A]" href="tel:+998970162929">Qo'ng'iroq</a>
          </div>

          {/* hamburger menyu */}
          <button className=" hidden hamburger ml-auto">
            <Hamburger />
          </button>
        </div>

        {/* Nav menyu */}
        <div className="flex justify-between w-full font-f">
          <nav className="w-full navbar">
            <ul className="flex justify-between space-x-1  py-3 px-5 lg:px-4 md:px-1 nav-ul rounded-xl lg:space-x-2 xl:space-x-3 bg-[#F3F3F7]">
              <li className="nav-links bg-transparent">
                <NavLink to="/" className={({ isActive }) =>
                  `font-semibold xl:text-base text-text-color-r lg:font-f text-sm py-2 lg:px-2 xl:px-3 ${isActive
                    ? "bg-white py-2 px-5 rounded-lg "
                    : ""
                  }`
                }>
                  Bosh sahifa
                </NavLink>
              </li>
              <li className="nav-links bg-transparent">
                <NavLink to="/pitsalar" className={({ isActive }) =>
                  `font-semibold xl:text-base text-text-color-r lg:font-f  text-sm py-2 lg:px-2 xl:px-3 ${isActive
                    ? "bg-white py-2 px-5 rounded-lg "
                    : ""
                  }`
                }>
                  Pitsalar
                </NavLink>
              </li>
              <li className="nav-links bg-transparent">
                <NavLink to="/makaron" className={({ isActive }) =>
                  `font-semibold xl:text-base text-text-color-r lg:font-f text-sm py-2 lg:px-2 xl:px-3 ${isActive
                    ? "bg-white py-2 px-5 rounded-lg "
                    : ""
                  }`
                }>
                  Makaron
                </NavLink>
              </li>
              <li className="nav-links bg-transparent">
                <NavLink to="/shorva" className={({ isActive }) =>
                  `font-semibold xl:text-base text-text-color-r lg:font-f text-sm py-2 lg:px-2 xl:px-3 ${isActive
                    ? "bg-white py-2 px-5 rounded-lg "
                    : ""
                  }`
                }>
                  Sho'rva
                </NavLink>
              </li>
              <li className="nav-links bg-transparent">
                <NavLink to="/saladlar" className={({ isActive }) =>
                  `font-semibold xl:text-base text-text-color-r lg:font-f text-sm py-2 lg:px-2 xl:px-3 ${isActive
                    ? "bg-white py-2 px-5 rounded-lg "
                    : ""
                  }`
                }>
                  Saladlar
                </NavLink>
              </li>
              <li className="nav-links bg-transparent">
                <NavLink to="/ichimliklar" className={({ isActive }) =>
                  `font-semibold xl:text-base text-text-color-r lg:font-f text-sm py-2 lg:px-2 xl:px-3 ${isActive
                    ? "bg-white py-2 px-5 rounded-lg "
                    : ""
                  }`
                }>
                  Ichimliklar
                </NavLink>
              </li>
              <li className="nav-links bg-transparent">
                <NavLink to="/desertlar" className={({ isActive }) =>
                  `font-semibold xl:text-base text-text-color-r lg:font-f text-sm py-2 lg:px-2 xl:px-3 ${isActive
                    ? "bg-white py-2 px-5 rounded-lg "
                    : ""
                  }`
                }>
                  Desert
                </NavLink>
              </li>
              <li className="nav-links bg-transparent">
                <NavLink to="/pasti" className={({ isActive }) =>
                  `font-semibold xl:text-base text-text-color-r lg:font-f text-sm py-2 lg:px-2 xl:px-3 ${isActive
                    ? "bg-white py-2 px-5 rounded-lg "
                    : ""
                  }`
                }>
                  AntiPasti
                </NavLink>
              </li>
              <li className="nav-links bg-transparent">
                <NavLink to="/aksiya" className={({ isActive }) =>
                  `font-semibold xl:text-base text-text-color-r lg:font-f text-sm py-2 lg:px-2 xl:px-3 ${isActive
                    ? "bg-white py-2 px-5 rounded-lg "
                    : ""
                  }`
                }>
                  Aksiya
                </NavLink>
              </li>
              <li className="nav-links bg-transparent">
                <NavLink to="/contact" className={({ isActive }) =>
                  `font-semibold xl:text-base text-text-color-r lg:font-f text-sm py-2 lg:px-2 xl:px-3 ${isActive
                    ? "bg-white py-2 px-5 rounded-lg "
                    : ""
                  }`
                }>
                  Manzil
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Cart */}
          <div className="relative inline-flex ml-3 mr-3 card">
            <button
              onClick={() => SetOpenCart(true)}
              className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none py-2 px-12 bg-yellow-300 text-lg"
              type="button"
            >
              <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                CARD
              </span>
            </button>
            <span className="absolute min-w-[12px] min-h-[12px] rounded-full py-1 px-1 text-xs font-medium leading-none place-items-center top-[4%] right-[2%] translate-x-2/4 -translate-y-2/4 bg-red-500 text-white text-center">
              {cart.length}
            </span>
          </div>
        </div>
      </div>
      {openCart && (
        <div className="fixed inset-0 z-[9999]">
          {/* BACKDROP Qismi (yagona va to'g'ri) */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm "
            onClick={() => SetOpenCart(false)}
            style={{ zIndex: 9998 }}
          />

          {/* ASL KODINGIZ (faqat 1 ta o'zgarish bilan) */}
          <div
            tabIndex={-1}
            className="fixed z-[9999] pointer-events-auto bg-white box-border w-full shadow-2xl shadow-blue-900/10 top-0 right-0 p-4 h-screen overflow-y-scroll"
            style={{ maxWidth: '400px', maxHeight: '100%', height: '100vh', transform: 'none' }}
          >
            {/* ORTIQCA BACKDROP DIV O'CHIRILDI */}
            <div className="flex justify-between items-center py-5 z-50">
              <h2 className="text-xl font-bold">Cart</h2>
              <button onClick={() => SetOpenCart(false)} className="absolute right-3 cursor-pointer text-xl">
                <img width={18} src={close} alt="close" />
              </button>
            </div>

            <h2 className="text-2xl mb-5 text-center font-semibold text-yellow-400">
              {`Umumiy narxi: ${totalPrice}₽`}
            </h2>

            <ul className="space-y-3">
              {cart.map((item) => (
                <li key={item.id} className="border border-gray-400 rounded-md p-2 relative">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center w-full max-w-[200px]">
                      <img className="w-16" src={item.img} alt="piza img" />
                      <span className="ml-2">{item.nomi}</span>
                    </div>
                    <div>
                    <button onClick={() => {
    deleteItem(item.id); // CartContext ichidagi itemni ochiradi
    toast.arguments(`${item.nomi} o'chirildi!`); // Toast notification ko'rsatadi
  }}className="absolute top-2 right-2 flex gap-1.5">
                    <svg data-v-10380025="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ui-icon  filled">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 3.5C9.33579 3.5 9 3.83579 9 4.25V5H15V4.25C15 3.83579 14.6642 3.5 14.25 3.5H9.75ZM7.5 4.25V5H3.75C3.33579 5 3 5.33579 3 5.75C3 6.16421 3.33579 6.5 3.75 6.5H4.30005L5.62088 19.9681C5.73386 21.1202 6.70255 21.9985 7.86014 21.9985H16.1399C17.2975 21.9985 18.2661 21.1202 18.3791 19.9681L19.7 6.5H20.25C20.6642 6.5 21 6.16421 21 5.75C21 5.33579 20.6642 5 20.25 5H16.5V4.25C16.5 3.00736 15.4926 2 14.25 2H9.75C8.50736 2 7.5 3.00736 7.5 4.25ZM11 9.75C11 9.33579 10.6642 9 10.25 9C9.83579 9 9.5 9.33579 9.5 9.75V17.25C9.5 17.6642 9.83579 18 10.25 18C10.6642 18 11 17.6642 11 17.25V9.75ZM14.5 9.75C14.5 9.33579 14.1642 9 13.75 9C13.3358 9 13 9.33579 13 9.75V17.25C13 17.6642 13.3358 18 13.75 18C14.1642 18 14.5 17.6642 14.5 17.25V9.75Z" fill="black"></path>
</svg>

<span >Yo'q qilish</span>
                    </button>
                    </div>
                    

                    <span className="mt-4">{item.narxi}₽</span>
                  </div>
                  <div className="flex items-center justify-end">
                    <button
                      onClick={() => decrement(item.id)}
                      className="cursor-pointer px-3 py-1.5 rounded-lg bg-red-600 text-white"
                    >
                      -
                    </button>
                    <span className="mx-2 font-bold">{quantities[item.id] || 1}</span>
                    <button
                      onClick={() => increment(item.id)}
                      className="cursor-pointer px-3 py-1.5 rounded-lg bg-gray-500 text-white"
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Swiper faqat bosh sahifada chiqadi */}
      {location.pathname === "/" && (
        <div className="w-full swiper-div">
          <Swiper1 />
        </div>
      )}
    </header>
  );
};

export default Header;

