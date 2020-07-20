import React, { useEffect, useState } from 'react';

const Message = props => {

    const { valid, submit } = props
    const [message, setMessage] = useState('')

    useEffect(() => {
        if (submit) {
            valid ? setMessage('success') : setMessage('error')
        }
    }, [valid])


    return (
        <div>
            <h3 className="text-center message">{message}</h3>
        </div>
    )
}

export default Message;
