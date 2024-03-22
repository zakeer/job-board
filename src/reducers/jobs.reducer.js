import { extractCategoriesFromJobs } from "../utils/jobs.utils";


function getSelectedCategoryFromQuery() {
    const { search } = window.location;
    const params = new URLSearchParams(search);
    const category = params.get('selectedCategory');
    return category || 'ALL';
}

function getFilterJobs(jobs = [], category) {
    if (category.toUpperCase() === "ALL") {
        return jobs;
    }
    return jobs.filter(job => job.categories.some(({ name }) => name === category))
}

export const INITIAL_STATE = {
    loading: true,
    jobs: [],
    selectedJob: null,
    seletedCategory: getSelectedCategoryFromQuery(),
    categories: [],
    filteredJobs: [],
}

export const ACTION = {
    FETCH_JOBS: 'FETCH_JOBS',
    FETCH_JOBS_SUCCESS: 'FETCH_JOBS_SUCCESS',
    SELECTED_JOB: 'SELECTED_JOB',
    SELECTED_CATEGORY: 'SELECTED_CATEGORY',
    SEARCH_CATEGORY: 'SEARCH_CATEGORY'
}


export function jobReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    if (type === ACTION.FETCH_JOBS) {
        return {
            ...state,
            loading: true,
            jobs: []
        }
    }

    if (type === ACTION.FETCH_JOBS_SUCCESS) {
        const filteredJobs = getFilterJobs(payload, getSelectedCategoryFromQuery());
        return {
            ...state,
            loading: false,
            jobs: payload,
            filteredJobs: filteredJobs,
            selectedJob: filteredJobs[0],
            categories: extractCategoriesFromJobs(payload)
        }
    }

    if (type === ACTION.SELECTED_JOB) {
        return {
            ...state,
            selectedJob: payload
        }
    }

    if (type === ACTION.SELECTED_CATEGORY) {
        const { jobs } = state;
        const filterJobs = getFilterJobs(jobs, payload)
        window.history.pushState({}, document.title, `${window.location.pathname}?selectedCategory=${payload}`)

        return {
            ...state,
            seletedCategory: payload,
            filteredJobs: filterJobs,
            selectedJob: filterJobs[0]
        }
    }

    return { ...state };
}

