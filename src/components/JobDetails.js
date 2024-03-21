import React from 'react'

const JobDetails = ({ job }) => {
  console.log(":: JobDetails.js ::");
  const htmlContent = job?.contents

  if (!job) {
    return (
      <div className="flex-[7] p-8 m-2 text-black shadow h-full overflow-y-auto">
        <p className='text-3xl font-bold text-center'>No job selected</p>
      </div>
    );
  }

 
  return (
    <div className="flex-[7] p-8 m-2 text-black shadow h-full overflow-y-auto">
      <h1 className='text-3xl font-bold mb-4'>{job?.name}</h1>
      <div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </div>
  );
}

export default JobDetails;