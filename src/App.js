import './App.css';
import FilterJobTitles from './components/FilterJobTitles';
import JobListContainer from './components/JobListContainer';
import JobDetails from './components/JobDetails';
import { getAllJobs } from './services/job.services';
import { useEffect, useReducer, useState } from 'react';
import { extractCategoriesFromJobs } from './utils/jobs.utils';
import { ACTION, INITIAL_STATE, jobReducer } from './reducers/jobs.reducer';

function App() {
  const a = useState
  const [state, dispatch] = useReducer(jobReducer, INITIAL_STATE);
  const { loading, selectedJob, seletedCategory, categories, filteredJobs: jobs } = state;
  console.log(state);

  const fetchJobs = async () => {
    const jobs = await getAllJobs();
    dispatch({ type: ACTION.FETCH_JOBS_SUCCESS, payload: jobs })

    // setJobTitles(extractCategoriesFromJobs(jobs));
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
      <FilterJobTitles jobTitle={categories} onTitleSelect={category => dispatch({ type: ACTION.SELECTED_CATEGORY, payload: category })} />

      <div className="flex flex-1 h-full border-l overflow-hidden">
        <JobListContainer
          jobs={jobs}
          onSelect={(job) => dispatch({ type: ACTION.SELECTED_JOB, payload: job })}
          title={seletedCategory}
        />
        <JobDetails job={selectedJob} />
      </div>
    </div>
  );
}

export default App;