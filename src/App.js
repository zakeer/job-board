import logo from './logo.svg';
import './App.css';
import FilterJobTitles from './components/FilterJobTitles';
import JobListContainer from './components/JobListContainer';
import JobDetails from './components/JobDetails';
import { getAllJobs } from './services/job.services';
import { useEffect, useState } from 'react';

function App() {

  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    // getAllJobs().then(jobs => setJobs(jobs))
    const jobs = await getAllJobs();
    setJobs(jobs);
  }

  useEffect(() => {
    fetchJobs();
  }, [])

  console.log(jobs);

  return (
    <div className="App h-screen flex flex-col">
      <h1>Total JOBS: {jobs.length}</h1>
      <FilterJobTitles />
      <div className="flex flex-1 border-l">
        <JobListContainer jobs={jobs} />
        <JobDetails />
      </div>
    </div>
  );
}

export default App;
