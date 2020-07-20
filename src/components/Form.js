import React, { useRef } from 'react'
import Validator from 'validatorjs'


const Form = props => {

    const { setValid, setSubmit } = props
    const formRef = useRef()

    const getFormData = () => {
        const inputs = formRef.current.querySelectorAll('input')
        const data = {}

        Object.keys(inputs).map(element => {
            data[inputs[element].name] = inputs[element].value
        })

        return data
    }


    const validate = () => {
        setSubmit(true)
        const data = getFormData()

        const rules = {
            name: 'required|string',
            phone: 'required|numeric',
            email: 'required|email',
            url: 'required|url'
        }

        const validate = new Validator(data, rules)
        validate.fails() ? setValid(false) : setValid(true)

    }

    return (
        <div className="row">
            <h1 className="text-center">Form Validation</h1>
            <form ref={formRef}>
                <input type="text" placeholder={'Name'} name='name' />
                <input type="email" placeholder={'Email'} name='email' />
                <input type="tel" placeholder={'Phone'} name='phone' />
                <input type="url" placeholder={'Url'} name='url' />

                <div className="small-6 small-centered text-center columns">
                    <a href="#" className="button success expand round text-center" onClick={() => validate()} >Verify</a>
                </div>
            </form>
        </div>)

}


export default Form
