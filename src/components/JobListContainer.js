import React from 'react'
import JobCard from './JobCard'

const JobListContainer = ({ jobs = [] }) => {
  return (
    <aside className='flex-[3] border-r'>
      {jobs.map(job => <JobCard key={job.id} />)}
    </aside>
  )
}

export default JobListContainer