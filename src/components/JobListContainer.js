import React from 'react'
import JobCard from './JobCard'

const JobListContainer = ({ jobs = [], onSelect }) => {
  return (
    <aside className='flex-[3] border-r h-full overflow-y-auto'>
      {jobs.map(job => <JobCard onJobClick={() => onSelect(job)} key={job.id} job={job} />)}
    </aside>
  )
}

export default JobListContainer