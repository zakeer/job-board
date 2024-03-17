import React, { useMemo } from 'react';
import BookMarkLineIcon from 'remixicon-react/BookMarkLineIcon'
import TimeLineIcon from 'remixicon-react/TimeLineIcon'
import moment from 'moment';

export default function JobCard({ job, onJobClick }) {
  const { publication_date } = job;

  const publishedDate = useMemo(() => {
    return moment(new Date(publication_date)).fromNow();
  }, [publication_date]);

  return <div onClick={onJobClick} className='group flex items-start gap-3 relative  border-b p-4 bg-white cursor-pointer hover:bg-slate-100 hover:shadow-lg hover:z-10 '>
    <img src="https://placehold.it/300x300" className='flex-[2] w-[20%] rounded' />
    <section className='flex-[8] w-[80%]'>
      <p className='text-slate-900 group-hover:underline'>{job.name}</p>
      <p className='text-slate-500'>{job.locations[0]?.name}</p>
      <p className='text-slate-500 mt-2 flex gap-2'><TimeLineIcon /> {publishedDate}</p>
    </section>

    <BookMarkLineIcon className='absolute top-2 right-2' />

  </div>
}