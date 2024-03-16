/*
create a function, which accepts an array of objects
each object will have a property `categories`


@Params: jobs: Jobs[]
@Return: [ Categories[] ]

Name: extractCategoriesFromJobs(jobs); 
const jobs = [
    {
        "id": 11034620,
        "categories": [{name": "Design and UX"}],
    },
    {
        "id": 11034620,
        "categories": [{name": "Enginner"}],
    }
]

@Return Result 
[
    [{name": "Design and UX"}],
    [{name": "Enginner"}]
]

const extractCategoriesFromJobs = (jobs) => {
    return jobs.map((job)=> {
 return job.categories
})
}
console.log(extractCategoriesFromJobs(jobs)); 


*/

export function extractCategoriesFromJobs(jobs = []) {
    /*
    var categoryList = [];
    for (let i = 0; i < jobs.length; i++) {
        var { categories = [] } = jobs[i]
        for (let j = 0; j < categories.length; j++) {
            categoryList.push(categories[j].name)
        }
    }
    return categoryList;
    */
    return jobs.reduce((prev, curr) => {
        const titles = curr.categories.map(({ name }) => name)
        return [...prev, ...titles];
    }, [])
    
}