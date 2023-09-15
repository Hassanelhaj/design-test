import React from 'react'
import MenuIteam from './MenuIteam'
import { sideBarMenu } from '../../Data'

const Menu = () => {
  return (
    <div 
    className=' flex flex-col gap-8 Lg:gap-2 justify-center lg:justify-start '>
         
        {
            sideBarMenu.map((iteam)=>{
                return <MenuIteam key={iteam.id} data={iteam} />
            })
        }
    </div>
  )
}

export default Menu