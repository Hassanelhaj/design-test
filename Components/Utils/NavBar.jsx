import React from 'react'
import {FiChevronDown, FiMenu} from'react-icons/fi';
import {AiOutlineUserSwitch, AiTwotoneSetting} from 'react-icons/ai'
import {BiDownArrow, BiDownArrowAlt, BiDownArrowCircle, BiSolidUser} from 'react-icons/bi'
const NavBar = () => {
  return (
    <div className='flex justify-between items-center px-4 p-3'>
        <section>
            <FiMenu className='icon'/>
        </section>
        <section className='flex items-center gap-2'>
            <div><AiTwotoneSetting className='icon' /></div>
            <div className='flex items-center gap-1 p-2 bg-slate-200 rounded-lg'>
                <span><AiOutlineUserSwitch className='icon'/></span>
                <span className='text-sm'> المستخدم</span>
                <span><FiChevronDown className='icon'/></span>


            </div>

        </section>

    </div>
  )
}

export default NavBar