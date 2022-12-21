import React from 'react'

function Timestamp({time}) {
  return (
    <div className='timestamp'>
        {time.timestamp}
    </div>
  )
}

export default Timestamp