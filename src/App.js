import React, { useState } from 'react'
import Form from './components/Form'
import Message from './components/Message'


const App = () => {

    const [valid, setValid] = useState()
    const [submit, setSubmit] = useState()

    return (
        <div>
            <Form setValid={setValid} setSubmit={setSubmit}></Form>
            <Message valid={valid} submit={submit}></Message>
        </div>
    )
}

export default App