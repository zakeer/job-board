import React from 'react'
import JobCard from './JobCard'

const JobListContainer = ({ jobs = [] }) => {

  return (
    <aside className='flex-[3] border-r h-full overflow-y-auto'>
      {jobs.map(job => <JobCard key={job.id} jobs={job} />)}
    </aside>
  )
}

export default JobListContainer