import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Aksiyalar } from '../Ap';
const AksiyaItem = () => {
  const params = useParams();
  const aksiyaobj = Aksiyalar.find((aksiya)=> aksiya.id == params.id)
  return (
    <section>
       <div className='w-full max-w-[1240px] mx-auto px-5 aksiya-item-r py-10 font-f'>
        <div className='w-full grid gap-5 grid-cols-1 sm:grid-cols-2 '>
            <div>
              <h2 className='text-3xl aksiya-item-h2 font-bold mb-5 font-f-r'>{aksiyaobj.name}</h2>
              <p className='font-semibold mb-10 aksiya-item-p'>{aksiyaobj.desc}</p>
              <div className='aksiya-item-link '>
                <Link className="py-3 px-5 bg-cyan-800 font-bold  text-white rounded-md" to="/aksiya">Ortga</Link>
              </div>
              
            </div>
            <img className='h-[300px] border rounded' src={aksiyaobj.img} alt={aksiyaobj.name} />
        </div>
        </div> 
    </section>
    
  )
}

export default AksiyaItem