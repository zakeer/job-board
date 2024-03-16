 import React from 'react'

function FilterJobTitles() {
  const roles = [
    'All',
    'Senior',
    'Software Engineer',
    'Frontend Engineer',
    'Engineer',
    'Staff Engineer',
    'Trainer',
    'Intern',
  ];
  return (
    <header className="flex bg-white p-3 gap-2 shadow-xl fixed top-0 z-10 w-full">
      {roles.map((role) => (
        <button key={role} className="p-2 border rounded-full px-4 hover:bg-slate-100 hover:shadow">
          {role}
        </button>
      ))}
    </header>
  )
}

export default FilterJobTitles