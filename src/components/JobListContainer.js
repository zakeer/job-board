import React from 'react'
import JobCard from './JobCard'


const JobListContainer = ({ jobs = [], dispatch }) => {
  console.log(":: JobListContainer.js ::");
 
  return (
    <aside className='flex-[3] border-r h-full overflow-y-auto'>
      {jobs.map(job =>
        <JobCard dispatch={dispatch} key={job.id} job={job} />)}
    </aside>
  )
}

export default React.memo(JobListContainer)