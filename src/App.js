import './App.css';
import FilterJobTitles from './components/FilterJobTitles';
import JobListContainer from './components/JobListContainer';
import JobDetails from './components/JobDetails';
import { getAllJobs } from './services/job.services';
import { useEffect, useReducer } from 'react';
import { ACTION, INITIAL_STATE, jobReducer } from './reducers/jobs.reducer';

function App() {
  console.log(":: App.js ::");
  const [state, dispatch] = useReducer(jobReducer, INITIAL_STATE);
  const { loading, selectedJob, seletedCategory, categories, filteredJobs: jobs } = state;

  const fetchJobs = async () => {
    const jobs = await getAllJobs();
    dispatch({ type: ACTION.FETCH_JOBS_SUCCESS, payload: jobs })
  }

  useEffect(() => {
    dispatch({ type: ACTION.FETCH_JOBS })
    fetchJobs();
  }, [])

  if (loading) {
    return <div className="App h-screen flex flex-col">
      Loading..
    </div>
  }

  return (
    <div className="App h-screen flex flex-col">
      <FilterJobTitles jobTitle={categories} dispatch={dispatch} seletedCategory={seletedCategory}/>

      <div className="flex flex-1 h-full border-l overflow-hidden">
        <JobListContainer
          jobs={jobs}
          dispatch={dispatch}
          title={seletedCategory}
        />
        <JobDetails job={selectedJob} />
      </div>
    </div>
  );
}

export default App;