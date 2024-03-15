import React from 'react'
import JobCard from './JobCard'

const JobListContainer = ({ jobs = [] }) => {
 
  return (
      <aside className='flex-[3] border-r'>
        <div className="overflow-y-auto h-screen"> 
        {jobs.map(job => <JobCard key={job.id} jobs={job} />)} 
        </div>
      </aside>
  )
} 

export default JobListContainer