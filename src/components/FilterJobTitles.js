 import React from 'react'

function FilterJobTitles({jobTitle}) {
  console.log(jobTitle)
  return (
    <header className="flex bg-white p-3 gap-2 shadow-xl sticky top-0 z-10">
      <button className="p-2 border rounded-full px-4 hover:bg-slate-100 hover:shadow">
        All
      </button>
      {jobTitle.map((title) => (
        <button key={title} className="p-2 border rounded-full px-4 hover:bg-slate-100 hover:shadow">
          {title}
        </button>
      ))}
    </header>
  )
}

export default FilterJobTitles