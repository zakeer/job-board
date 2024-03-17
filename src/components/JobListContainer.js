import React, { useContext } from 'react'
import JobCard from './JobCard'
import { JobContext } from '../App'

// var xyz = 20;
// select = () => {};

// <Component a={1} b={() => {}} x={xyz} click={select} />

const JobListContainer = () => {

  const { jobs, setSelectedJob } = useContext(JobContext)

  return (
    <aside className='flex-[3] border-r h-full overflow-y-auto'>
      {jobs.map(job => <JobCard onJobClick={() => setSelectedJob(job)} key={job.id} job={job} />)}
    </aside>
  )
}

export default JobListContainer