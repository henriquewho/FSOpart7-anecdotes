import React from 'react'

function Notification({message, type}) {
    if (message==null) return null; 
    return (
        <div className={type==='success' ? 'success' : ''}>
            Message: {message}
        </div>
    )
    
}

export default Notification
