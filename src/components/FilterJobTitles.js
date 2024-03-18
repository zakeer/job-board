import React, { useState } from 'react'

function FilterJobTitles({ jobTitle }) {
  const [activeTitle, setActiveTitle] = useState()

  const OnTitleChange = (title) => {
    setActiveTitle(title);
  }

  const buttoncss = 'p-2 border rounded-full px-4 hover:bg-slate-100 hover:shadow'
  const activeCss = 'p-2 border rounded-full px-4 bg-slate-300 hover:shadow'
  console.log(":: Active Title ::", activeTitle)

  return (
    <header className="flex bg-white p-3 gap-2 shadow-xl sticky top-0 z-10">
      <button className={activeCss}>
        All
      </button>
      {jobTitle.map((title) => (
        <button key={title} onClick={() => OnTitleChange(title)} className={activeTitle === title ? activeCss : buttoncss}>
          {title}
        </button>
      ))}
    </header>
  )
}

export default FilterJobTitles