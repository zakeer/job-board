import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from "react-router-dom";
import { ACTION } from '../reducers/jobs.reducer';

function FilterJobTitles({ jobTitle, dispatch, seletedCategory }) {
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("title") || 'All')

  console.log(":: FilterJobTitles.js ::");
  console.log(":: seletedCategory ::", seletedCategory)

  useEffect(() => {
    setSearchParams({ title: searchQuery });
    navigate(`/search?title=${encodeURIComponent(searchQuery)}`)
  }, [searchQuery])



  console.log(":: searchParams ::", searchParams)
  console.log(":: searchQuery ::", searchQuery)

  const basecss = 'py-2 px-4  border min-w-16 min-h-10 rounded-full overflow-hidden text-ellipsis whitespace-normal'
  const navcss = `${basecss} hover:bg-slate-100 hover:shadow`
  const activeNavCss = `${basecss} bg-slate-300 hover:bg-slate-100 hover:shadow`

  return (
    <header className="flex bg-white p-3 gap-2 shadow-xl sticky top-0 z-10">
      <button className={navcss}>
        All
      </button>
      {jobTitle.map((title) => (
        <button key={title}
          className={title === seletedCategory ? activeNavCss : navcss}
          onClick={
            () => dispatch({
              type: ACTION.SELECTED_CATEGORY,
              payload: title
            }, setSearchQuery(title))}
        >
          {title}
        </button>
      ))}
    </header>
  )
}

export default React.memo(FilterJobTitles)