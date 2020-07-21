import React, { useState } from 'react'
import Form from './components/Form'
import Message from './components/Message'


const App = () => {

    const [valid, setValid] = useState(false)

    return (
        <div>
            <Form isFormValid={setValid}></Form>
            <Message valid={valid}></Message>
        </div>
    )
}

export default App