import React from 'react'

function TweetContainer(props) {
  return (
    <div className='tweet'>
      {props.children}
    </div>
  )
}

export default TweetContainer
