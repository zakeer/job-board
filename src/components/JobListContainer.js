import React from 'react'
import JobCard from './JobCard'

// var xyz = 20;
// select = () => {};

// <Component a={1} b={() => {}} x={xyz} click={select} />

const JobListContainer = ({ jobs = [], onSelect  }) => {

  return (
    <aside className="flex-[3] border-r h-full overflow-y-auto">
      {jobs.map(job => <JobCard onJobClick={() => onSelect(job)} key={job.id} job={job} />)}
    </aside>
  )
}

export default JobListContainer
