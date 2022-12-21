import React from 'react'
import Timestamp from './Timestamp'

function User({ user }) {
    return (
        <div className='top'>
            <span className='user'>
                <span className="name">{user.user.name}</span>
                <span className="handle">{user.user.handle}</span>

            </span>
            <span className="timestamp">{user.timestamp}</span>
        </div>
    )
}

export default User
