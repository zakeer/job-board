import React from 'react';
import ShoppingBagFillIcon from 'remixicon-react/ShoppingBagFillIcon'
import BookMarkLineIcon from 'remixicon-react/BookmarkLineIcon'

const imgs = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAXyvU740aaQt2rl_38l93BFjl6gFLS9N7lYeq&s=0",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ5FssnZI9eHpBJU39Mxsswl0ID71_CMck2MWR&s=0",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRdDhMSMuuUy1687wR5V8BEpsnU5dSv8-yimSP&s=0",
];

function Icons() {
  return (
    <div className="">
      <svg
        className="h-8 w-8 text-slate-500 hover:bg-red-900 hover:shadow-lg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        {" "}
        <path stroke="none" d="M0 0h24v24H0z" />{" "}
        <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
      </svg>
    </div>
  );
}

function Clock() {
  return (
    <div>
      <svg
        class="h-5 w-5 text-slate-600"
        width="5"
        height="5"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        {" "}
        <path stroke="none" d="M0 0h24v24H0z" />{" "}
        <circle cx="12" cy="12" r="9" /> <polyline points="12 7 12 12 15 15" />
      </svg>
    </div>
  );
}

function Bag() {
  return (
    <div>
      <svg
        class="h-5 w-5 text-slate-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    </div>
  );
}

export default function JobCard() {
  return <div className='group flex items-start gap-3 relative  border-b p-4 bg-white cursor-pointer hover:bg-slate-100 hover:shadow-lg hover:z-10 '>
    <img src="https://placehold.it/300x300" className='flex-[2] w-[20%] rounded' />
    <section className='flex-[8] w-[80%]'>
      <p className='text-slate-900 group-hover:underline '>React Native Developer</p>
      <p className='text-slate-500'>Hyderabad, Telangana</p>
      <p className='text-slate-500 mt-2 flex gap-2'><ShoppingBagFillIcon /> 20Hrs ago</p>
    </section>

    <BookMarkLineIcon className='absolute top-2 right-2' />
  </div>
}