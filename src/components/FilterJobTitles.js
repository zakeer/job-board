import React from 'react'
import { ACTION } from '../reducers/jobs.reducer';

function FilterJobTitles({ jobTitle, dispatch }) {
  console.log(":: FilterJobTitles.js ::");
  return (
    <header className="flex bg-white p-3 gap-2 shadow-xl sticky top-0 z-10">
      <button className="py-2 px-4  border min-w-16 min-h-10 rounded-full hover:bg-slate-100 hover:shadow overflow-hidden text-ellipsis whitespace-normal">
        All
      </button>
      {jobTitle.map((title) => (
        <button key={title}
          className="py-2 px-4 border min-w-16 min-h-10 rounded-full  hover:bg-slate-100 hover:shadow overflow-hidden text-ellipsis whitespace-normal"
          onClick={() => dispatch({
            type: ACTION.SELECTED_CATEGORY,
            payload: title
          })}>
          {title}
        </button>
      ))}
    </header>
  )
}

export default React.memo(FilterJobTitles)