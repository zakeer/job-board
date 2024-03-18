export function extractCategoriesFromJobs(jobs = []) {
    return jobs.reduce((prev, curr) => {
      const titles = curr.categories.map(({ name }) => name)
      return [...prev, ...titles].filter((dup, idx, arr) => arr.indexOf(dup) === idx);
    }, [])
}
