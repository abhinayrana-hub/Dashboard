import React from 'react';
import { constUser } from '../data/constUser';


const Manage = () => {
  return (
    <div class="flex flex-col flex-auto ">
        <div class="overflow-y-auto p-11 mx-10 sm:-mx-6 lg:-mx-8">
            <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden ">
      <table className="table-auto w-5/6 h-5/6 border-separate border border-slate-400">
          <thead className='border-b bg-gray-600'>
              <tr>
                  <th className='border border-slate-100 text-3xl'>Id</th>
                  <th className='border border-slate-300 text-3xl'>Project Name</th>
                  <th className='border border-slate-300 text-3xl'>Description</th>
                  <th className='border border-slate-300 text-3xl'>Assign to</th>
                  <th className='border border-slate-300 text-3xl'>Action</th>
              </tr>
          </thead>
          <tbody>
                {
                    constUser && constUser.length > 0 ? constUser.map((item) => {
                        return(
                            <tr className='bg-white border-b'>
                                <td className='px-6 py-4 text-xl whitespace-nowrap font-medium text-gray-900'>
                                    {item.id}
                                </td>
                                <td className='text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                    {item.project_name}
                                </td>
                                <td className='text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                    {item.description}
                                </td>
                                <td className='text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                    {item.user}
                                </td>
                                <td className='text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 
                                rounded' onClick={() => alert(item.id)}>Edit</button>
                                    &nbsp;
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 
                                rounded' onClick={() => alert(item.id)}>Delete</button>
                                    
                                </td>
                            </tr>
                        )
                    })
                    :
                    "No Project created"
                }
          </tbody>
      </table>
     </div> 
     </div>
     </div>
     </div>
  )
}

export default Manage