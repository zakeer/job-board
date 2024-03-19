import React from 'react'

function FilterJobTitles({ jobTitle }) {
  const NavButtons = "py-2 px-4 border min-w-16 min-h-10 rounded-full hover:bg-slate-100 hover:shadow overflow-hidden text-ellipsis whitespace-normal"
  return (
    <header className="flex bg-white p-3 gap-2 shadow-xl sticky top-0 z-10">
      <button className={NavButtons}>
        All
      </button>
      {jobTitle.map((title) => (
        <button key={title} className={NavButtons}>
          {title}
        </button>
      ))}
    </header>
  )
}

export default FilterJobTitles
