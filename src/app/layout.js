// "use client"

import SideBar from '../../Components/sideBar.jsx/SideBar'

import NavBar from '../../Components/utils/NavBar'

import './globals.css'

export const metadata = {
  title:'',
  description:'developed by hassan ',
}

export default function RootLayout({ children }) {
  return (
    
    <html dir='rtl' lang="ar" >

  
<head>


</head>


      <body >
      
        <main className=' flex '>
        <section className='h-screen'>
          <SideBar/>
        </section>
      <section className='flex flex-col  w-full  '> 
     <NavBar/>
      {children}
      </section>
      </main>
      </body>
    </html>
  )
}
