import React from 'react'
import Logos from './Logos';
import JobDetailsCard from './JobDetailsCard';

const JobDetails = () => {
    return (
        <div className='bg-green-300 flex-[7]'>
            <h1>React Native Developer</h1>
             
             <img src=""/>
            <h6>Qloron Pvt Ltd.</h6>
            <h6>Hyderabd, Telangana</h6>

            <button className="text-white bg-blue-700 hover:bg-blue-800 rounded-full text-sm p-2">Apply via Linkedin</button><header>
                React Native Developer
            </header>
            <JobDetailsCard />
            <Logos />
        </div>

    );
}

export default JobDetails;