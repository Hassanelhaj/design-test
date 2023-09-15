import Link from 'next/link'
import React from 'react'

const MenuIteam = ({data}) => {
  return (
    <Link href={`${data.link}`} key={data.id} 
                className=' lg:px-3 lg:py-2 cursor-pointer hover:bg-slate-400 rounded-lg
                flex flex-row-reverse justify-end items-center gap-2 '>
                    <span className='hidden lg:block'>{data.name}</span>
                    <span className=''>{data.icon}</span>

                    </Link>
  )
}

export default MenuIteam