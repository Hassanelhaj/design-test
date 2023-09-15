import React from 'react'

const TableHeader = () => {
  return (
    <thead className="bg-slate-700 text-white  dark:bg-gray-700">
    <tr className="">
      <th scope="col" className="p-4 ">
        <div className=" flex items-center gap-x-24 text-start  ">
          <input
            id="checkbox-all"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500
                 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2
                  dark:bg-gray-700 dark:border-gray-600"
          />
          <label for="checkbox-all" className="sr-only">
            checkbox
          </label>
        </div>
      </th>
      <th
        scope="col"
        className="   py-3 px-6 text-xs  text-start font-medium tracking-wider   uppercase dark:text-gray-400"
      >
        المنتج
      </th>
      <th
        scope="col"
        className="   py-3 px-6 text-xs  text-start font-medium tracking-wider   uppercase dark:text-gray-400"
      >
        الأسم
      </th>
      <th
        scope="col"
        className="py-3 px-6 text-xs font-medium tracking-wider text-start class uppercase dark:text-gray-400"
      >
        التصنيف
      </th>
     
      <th
        scope="col"
        className="py-3 px-6 text-xs font-medium tracking-wider class text-start  uppercase dark:text-gray-400"
      >
        السعر
      </th>
      <th
        scope="col"
        className="py-3 px-6 text-xs font-medium tracking-wider text-start className  uppercase dark:text-gray-400"
      >
        الكمية
      </th>
      <th scope="col" className="p-4">
        <span className="sr-only">Edit</span>
      </th>
    </tr>
  </thead>
  )
}

export default TableHeader