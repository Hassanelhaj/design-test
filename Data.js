import {BiHome} from 'react-icons/bi';
import {HiUsers} from 'react-icons/hi';
import {ImTruck} from 'react-icons/im';
import {AiFillGift} from 'react-icons/ai';
import { FiBox } from 'react-icons/fi';

export const sideBarMenu =[
    {id:1,name:'الرئيسية' ,title:'home',icon:<BiHome/>,link:'/'  },
    {id:1,name:'المنتجات' ,title:'products',icon:<FiBox/>,link:'/products'  },

    {id:3,name:'العروض' ,title:'home',icon:<AiFillGift/> ,link:'/deal' },
    {id:4,name:'العملاء' ,title:'home',icon:<HiUsers/> ,link:'/custmor'},
    {id:5,name:'الترحيل' ,title:'home',icon:<ImTruck/> ,link:'/transport'},
    {id:6,name:'المساعدة' ,title:'home',icon:<BiHome/> ,link:'/help'},


];