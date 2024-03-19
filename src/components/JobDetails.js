import React from 'react';

const JobDetails = ({ job }) => { 

  return (
    <div className="flex-[7] p-8 m-2 text-black shadow overflow-y-auto">
      {job && <><div className="flex justify-between ">
        <h1 className="font-bold text-2xl ">{job.name} </h1>

        <div className="flex text-slate-500 ">
          <img 
            className="h-7"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX7frQFZi6J0n1Pw-UX2SOZP9Dh-6xnyN044tizHSSflnF6yWgNE6dgV7vQ_3PQG8GhXk&usqp=CAU"
            alt=""
          />
          <p> SAVE</p>

          <img
            className="h-7 px-3"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs9qZdA7kV8EXop4ENHpXjpr_5ZE45qMJpeqEK2gwrarqqhHNGuPchZYKFmVRF3pKqQ8Q&usqp=CAU"
            alt=""
          />
        </div>
      </div>

        <div className="flex py-3 ">
          {<img src="https://placehold.it/300x300" alt=""className='w-14 rounded ' />}
          <div className=" m-2 text-slate-500 ">
            <p >{job.company.name}</p>
            <p>
              {job.locations[0].name}
            </p>
          </div>
        </div>

        <div className='border-t border-b py-4'>

          <button className="bg-blue-400 text-white rounded-lg p-2">
            Apply via LinkedIn
          </button>

        </div>
        <div className="pt-4"dangerouslySetInnerHTML={{__html: (job.contents)}} />
      </>}


    </div>
  );
}

export default JobDetails;