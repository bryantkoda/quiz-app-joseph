import React from 'react'
import loading from "../assets/images/loader.gif"
const Loader = () => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-white bg-opacity-100 flex items-center justify-center z-20'>
        <img src={loading} className="max-w-[100px]" alt="loading"></img>
    </div>
  )
}

export default Loader;