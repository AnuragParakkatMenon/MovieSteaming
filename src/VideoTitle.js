import React from 'react'

const VideoTitle = ({originalTitle, overview}) => {
  return (
    <div className='ml-50'>
    <div className='text-white font-bold absolute mt-36 text-4xl ml-32 w-1/2'>{originalTitle}
        <div className='font-semibold mt-20 text-xl '>{overview}</div>
    </div>
    </div>
  )
}

export default VideoTitle