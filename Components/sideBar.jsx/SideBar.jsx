import React from 'react'
import { sideBarMenu } from '../../Data'
import MenuIteam from './MenuIteam'
import Menu from './Menu'
import { AiFillTrademarkCircle } from 'react-icons/ai'

const SideBar = () => {
  return (
    <main className='w-fit bg-slate-700 text-white  h-screen  px-2
    lg:px-6 py-3 flex flex-col gap-6 justify-center lg:justify-start items-center'>
        <section className='flex items-center justify-center gap-1  flex-wrap'>
            <span><AiFillTrademarkCircle className='icon  ' /></span>
            <span>اسم المتجر</span>

        </section>
        <section>
            <Menu/>
        </section>

    </main>
  )
}

export default SideBar