import './App.css';
import FilterJobTitles from './components/FilterJobTitles';
import JobListContainer from './components/JobListContainer';
import JobDetails from './components/JobDetails';
import { getAllJobs } from './services/job.services';
import { useEffect, useState, createContext } from 'react';
import { extractCategoriesFromJobs } from './utils/jobs.utils';
import Loader from './components/loader';

export const JobContext = createContext();

function App() {

  const [jobs, setJobs] = useState([]);
  const [jobTitles, setJobTitles] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchJobs = async () => {
    // getAllJobs().then(jobs => setJobs(jobs))
    const jobs = await getAllJobs();
    setJobs(jobs);
    setJobTitles(extractCategoriesFromJobs(jobs));
  }

  useEffect(() => {
    fetchJobs();
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }, [])

  return (
    <div>
      {isLoading ? <div className='h-screen flex justify-center items-center'><Loader /></div> : <div className="App h-screen flex flex-col">
        <FilterJobTitles jobTitle={jobTitles} />
        <div className="flex flex-1 h-full border-l overflow-hidden">
          <JobContext.Provider value={{ jobs, setSelectedJob, selectedJob }}>
            <JobListContainer />
            <JobDetails />
          </JobContext.Provider>

        </div>
      </div>}

    </div>
  );
}

export default App;
