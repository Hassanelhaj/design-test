import React from 'react'
import { BiPlus } from 'react-icons/bi'
import {FiFilter, FiUpload} from 'react-icons/fi'
import {FiDownload} from 'react-icons/fi'

const Header = () => {
  return (
    <div className="flex flex-col gap-2">
      <section className="flex justify-between items-center p-4 ">
          <div>المنتجات</div>
          <div className="flex items-center gap-1">
            <button  className="flex items-center gap-1 text-xs md:text-base border border-slate-700 rounded-lg  px-2 py-2">
                <span><FiDownload/></span>
                <span>استرداد المنتجات</span>

            </button>
            <button   className="flex items-center gap-1 text-xs md:text-base text-white bg-slate-700 rounded-lg px-2 py-2">
            <span><BiPlus/></span>
                <span>اضافة منتج </span>

            </button>

          </div>

        </section>
        <section className='p-2'>
            <div className='flex items-center gap-3'>
            <input
          required
          type="text"
          className="w-72 mt-1 px-3 py-3 bg-white border
   shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1"
          placeholder=" ... أبحث هنا  "
        />
        <button className='flex items-center gap-1 bg-white text-slate-400 px-3 py-2 rounded-lg'>
            <span><FiFilter/></span>
            <span>تصفية</span>
        </button>
            </div>
            <div>
                
            </div>
        </section>

        <section className="bg-white p-4 flex justify-end">
        <button   className="flex items-center gap-1 text-xs md:text-base text-white bg-slate-700 rounded-lg px-2 py-2">
            <span><FiUpload/></span>
                <span>تصدير المنتجات</span>
            </button>
        </section>
      
      </div>
      
  )
}

export default Header