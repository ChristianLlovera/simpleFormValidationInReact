import React, { useEffect, useState } from 'react';

const Message = props => {

    const { valid } = props
    const [message, setMessage] = useState('Form is Incomplete!')

    useEffect(() => {
        valid ? setMessage('Form is complete!') : setMessage('Form is Incomplete!')
    }, [valid])

    return (
        <div>
            <h3 className="text-center message">{message}</h3>
        </div>
    )
}

export default Message;
