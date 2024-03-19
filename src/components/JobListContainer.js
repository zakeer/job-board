import React from 'react'
import JobCard from './JobCard'

// var xyz = 20;
// select = () => {};

// <Component a={1} b={() => {}} x={xyz} click={select} />


const JobListContainer = ({ jobs = [], onSelect, title   }) => {
  let job1;

  if (title) {
      job1 = jobs.filter(job => job.categories.some(category => category.name === title));
  } else {
      job1 = jobs;
  }
  

  return (
    <aside className='flex-[3] border-r h-full overflow-y-auto'>
       {job1.map(job => 
      <JobCard  onJobClick={() => onSelect(job)} key={job.id} job={job} />)}
    </aside>
  )
}

export default JobListContainer