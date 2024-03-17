import './App.css';
import FilterJobTitles from './components/FilterJobTitles';
import JobListContainer from './components/JobListContainer';
import JobDetails from './components/JobDetails';
import { getAllJobs } from './services/job.services';
import { useEffect, useState } from 'react';
import { extractCategoriesFromJobs } from './utils/jobs.utils';

function App() {

  const [jobs, setJobs] = useState([]);
  const [jobTitles, setJobTitles] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    // getAllJobs().then(jobs => setJobs(jobs))
    const jobs = await getAllJobs();
    setJobs(jobs);
    setLoading(false);
    setJobTitles(extractCategoriesFromJobs(jobs));
  }

  useEffect(() => {
    fetchJobs();
  }, [])

  console.log(":: selectedJob ::", selectedJob);

  return (
    <div className="App h-screen flex flex-col">
      {loading ? (
        <>
          <div className='h-screen flex items-center justify-center'>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        </>
      ) : (
        <>
          <FilterJobTitles jobTitle={jobTitles} />
          <div className="flex flex-1 h-full border-l overflow-hidden">
            <JobListContainer jobs={jobs} onSelect={setSelectedJob} />
            <JobDetails job={selectedJob} jobsList={jobs} />
          </div>
        </>
      )}
    </div>
  );

}

export default App;
