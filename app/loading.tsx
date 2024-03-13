import React from 'react'

const loading = () => {
  return (
    <div className="max-w-sm overflow-hidden rounded bg-white p-4 shadow-lg">
    <div className="flex animate-pulse flex-col space-y-4">
      <div className="h-32 w-full rounded bg-gray-300"></div>
      <div className="flex-1 space-y-2 py-1">
        <div className="h-4 w-3/4 rounded bg-gray-300"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 h-4 rounded bg-gray-300"></div>
            <div className="col-span-1 h-4 rounded bg-gray-300"></div>
          </div>
          <div className="h-4 rounded bg-gray-300"></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default loading