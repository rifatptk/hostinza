import React from 'react'

export default function Spinner({loading}) {
  return (
    loading?(
        <div className='preloader animated fadeIn'>
            <div className="loading-bar">
                <div className="loading-circle-1" ></div>
                <div className="loading-circle-2" ></div>
            </div>
        </div>
    )
    :<div></div>
  )
}