import React from 'react'
import Header from '../../../Components/productsPage/header/Header'
import Table from '../../../Components/utils/Table'

const page = () => {
  return (
    <main className='p-4 flex flex-col gap-6 overflow-x-auto' >
      
      <section>
        <Header/>
      </section>
      <section>
        <Table/>
      </section>


    </main>
  )
}

export default page