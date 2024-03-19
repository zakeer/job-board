import React, { useState } from 'react';

const classname = `py-2 px-4 border min-w-16 min-h-10 rounded-full hover:bg-slate-100 hover:shadow overflow-hidden  whitespace-normal`;
function FilterJobTitles({ jobTitles, onTitleSelect, job, onSelect }) {
  const [selectedButton, setSelectedButton] = useState('All');

  const handleTitleSelect = (title) => {
    onTitleSelect(title);
    setSelectedButton(title);


    if (title === 'All') {
      onSelect(null);
    } else {

      const selectedJob = job.find(job =>
        job.categories.map(category => category.name).includes(title)
      );


      if (selectedJob) {
        onSelect(selectedJob);
      }
    }
  };


  return (
    <header className="flex bg-white p-3 gap-2 shadow-xl sticky top-0 z-10">
      <button
        onClick={() => handleTitleSelect('All')}
        className={`${classname} ${selectedButton === 'All' ? 'text-blue-500' : ''}`}
      >
        All
      </button>
      {jobTitles.map((title) => (
        <button
          key={title}
          onClick={() => handleTitleSelect(title)}
          className={`${classname} ${selectedButton === title ? 'text-blue-500' : ''}`}
        >
          {title}
        </button>
      ))}
    </header>
  );
}

export default FilterJobTitles;
