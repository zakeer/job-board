
import React, { useEffect, useState } from 'react';
import './App.css';
import FilterJobTitles from './components/FilterJobTitles';
import JobListContainer from './components/JobListContainer';
import JobDetails from './components/JobDetails';
import { getAllJobs } from './services/job.services';
import { extractCategoriesFromJobs } from './utils/jobs.utils';
import { Spinner } from "@material-tailwind/react";

function App() {
  const [jobs, setJobs] = useState([]);
  const [jobTitles, setJobTitles] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState('All'); 
  const [Loading, setLoading] = useState(true); 

  const fetchJobs = async () => {
    const jobs = await getAllJobs();
    setJobs(jobs);
    setJobTitles(extractCategoriesFromJobs(jobs));
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  console.log(":: selectedJob ::", selectedJob);
  
  useEffect(() => {

    if (jobs.length > 0 && selectedJob === null) {
      setSelectedJob(jobs[0]);
    }
  }, [jobs, selectedJob]);
  
  const filteredJobs = selectedTitle === 'All' ? jobs : jobs.filter(job =>
    job.categories.map(category => category.name).includes(selectedTitle)
  );
  


  return (
    
     
    <div className=" h-screen flex flex-col relative ">
       <div className="absolute top-1/2 left-1/2">
    {Loading&&<Spinner className="h-20 w-20 text-blue-900/50" />}
  </div>

      <FilterJobTitles jobTitles={jobTitles} onTitleSelect={setSelectedTitle} job={jobs} onSelect={setSelectedJob}/>
      <div className="flex flex-1 h-full border-l overflow-hidden">
        <JobListContainer jobs={filteredJobs} onSelect={setSelectedJob} />
        <JobDetails job={selectedJob} />
      </div>
   
    </div>
   
  );
}

export default App;
