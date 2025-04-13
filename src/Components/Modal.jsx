import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Modal = ({ isOpen, item, onClose }) => {
  const { addToCart } = useContext(CartContext); // ✅ Hookni faqat komponent darajasida ishlatamiz

  if (!isOpen || !item) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  

  return (
    <div
      onClick={handleBackdropClick}
      className='w-screen h-screen top-0 left-0 fixed bg-black/70 backdrop-blur flex justify-center items-center z-50'
    >
      <div
        data-aos="zoom-in-up"
        className='w-full max-w-[668px] bg-white py-10 pl-10 pr-8 rounded-lg relative'
      >
        <div className='justify-between items-center sm:flex'>
          <img className='mr-5' width={200} src={item.img} alt={item.nomi} />
          <div>
            <h3 className='font-bold text-3xl leading-7 text-pizza mb-4'>{item.nomi}</h3>
            <p className='font-medium text-base mb-4 text-text-pizza'>{item.desc}</p>
            <span className='font-bold text-[22px] leading-5 mr-5 text-all-color'>{item.narxi} ₽</span>
          </div>
        </div>

        <div className='flex justify-end space-x-5 mt-6'>
          <button
            className='py-2 px-7 bg-border text-text-pizza-3 rounded-lg'
            onClick={onClose}
          >
            Close
          </button>
          <div onClick={onClose}>
             <button 
            className='py-2 px-7 bg-yellow-400 text-white rounded-lg'
            onClick={() => addToCart(item)}
          >
            Add to Cart
          </button>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Modal;


