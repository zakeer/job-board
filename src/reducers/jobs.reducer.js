import { extractCategoriesFromJobs } from "../utils/jobs.utils";


export const INITIAL_STATE = {
    loading: true,
    jobs: [],
    selectedJob: null,
    seletedCategory: 'ALL',
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
        return {
            ...state,
            loading: false,
            jobs: payload,
            filteredJobs: payload,
            selectedJob: payload[0],
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
        const filterJobs = payload.toUpperCase() === "ALL" ? jobs : jobs
            .filter(job => job.categories.some(category => category.name === payload))

        return {
            ...state,
            seletedCategory: payload,
            filteredJobs: filterJobs,
            selectedJob: filterJobs[0]
        }
    }

    return { ...state };
}

