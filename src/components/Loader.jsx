import React from 'react'

const Loader = () => {
  return (
    <div className="flex items-center justify-center fixed w-screen h-screen bg-secondary z-[99999999999999999]">
        <span className="loader"></span>
    </div>
  )
}

export default Loader