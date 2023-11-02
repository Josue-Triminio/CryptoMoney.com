import React from 'react'

export default function Error({children}) {
  return (
    <div className=' bg-red-600 text-white text-xl rounded-sm h-16 transition-opacity flex items-center p-4'>
        {children}
    </div>
  )
}
