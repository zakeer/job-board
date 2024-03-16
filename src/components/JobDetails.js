import React from 'react'
// import Logos from './Logos';
import JobDetailsCard from './JobDetailsCard';

const JobDetails = ({ job }) => {
  return (
    <div className="flex-[7] p-8 m-2 text-black shadow">
      <div className="flex justify-between ">
        <h1 className="font-bold text-2xl "> React Native Developer </h1>

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
        <img
          className="h-20 "
          src="https://media.licdn.com/dms/image/C560BAQHzzzFpYoT_vA/company-logo_200_200/0/1630664457529/qloron_logo?e=1718841600&amp;v=beta&amp;t=IRgZSPoze1QQBVmpRmqxK8s8-TnlDeUKGyQtM5H3Gek"
          loading="lazy"
          alt="Qloron Pvt Ltd logo"
          id="ember30"
        />
        <p className="py-1 text-slate-500">
          Qloron PVT Ltd <br /> Hyderabad,Telangna
        </p>
      </div>

      <div className='border-t border-b py-4'>

        <button className="bg-blue-400 text-white rounded-lg p-2">
          Apply LinkedIn
        </button>

      </div>

      <div>
        {job?.contents}
      </div>


    </div>
  );
}

export default JobDetails;