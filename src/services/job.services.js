import { JOBS_API } from "../constants/API_ENDPOINTS";



export async function getAllJobs() {
    const response = await fetch(`${JOBS_API}?page=1`);
    const result = await response.json();
    return result?.results
}


