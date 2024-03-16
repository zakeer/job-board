import React from 'react';
import Briefcase2LineIcon from 'remixicon-react/Briefcase2LineIcon'
import BookMarkLineIcon from 'remixicon-react/BookmarkLineIcon'


const imgs = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAXyvU740aaQt2rl_38l93BFjl6gFLS9N7lYeq&s=0",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ5FssnZI9eHpBJU39Mxsswl0ID71_CMck2MWR&s=0",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRdDhMSMuuUy1687wR5V8BEpsnU5dSv8-yimSP&s=0",
];


export default function JobCard({jobs}) {
  

  
 
  return <div className='group flex items-start gap-3 relative  border-b p-4 bg-white cursor-pointer hover:bg-slate-100 hover:shadow-lg hover:z-10 '>
    <img src="https://placehold.it/300x300" className='flex-[2] w-[20%] rounded' />
    <section className='flex-[8] w-[80%]'>
      <p className='text-slate-900 group-hover:underline'>{jobs.name}</p>
      <p className='text-slate-500'>{jobs.locations[0]?.name}</p>
      <p className='text-slate-500 mt-2 flex gap-2'><Briefcase2LineIcon /> 20Hrs ago</p>
    </section>

    <BookMarkLineIcon className='absolute top-2 right-2' />
    
   
  </div>
}