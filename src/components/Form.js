import React, { useRef, useState } from 'react'
import Validator from 'validatorjs'

const Input = props => {

    const { type, placeholder, name } = props
    const [value, setValue] = useState('')

    return (
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            className={name}
            value={value}
            onChange={e => setValue(e.target.value)} />
    )
}

const Form = props => {

    const { isFormValid } = props

    const formRef = useRef()

    const getFormData = () => {
        const inputs = formRef.current.querySelectorAll('input')

        const data = Object.keys(inputs)
            .reduce((obj, elm) => ({
                ...obj,
                [inputs[elm].name]: inputs[elm].value
            }), {})

        return data
    }


    const validate = () => {

        const data = getFormData()

        const rules = {
            name: 'required|string|min:5|max:30',
            phone: 'required|numeric',
            email: 'required|email',
            url: 'required|url'
        }

        const validate = new Validator(data, rules)

        if (typeof isFormValid == 'function') {
            validate.fails() ? isFormValid(false) : isFormValid(true)
        }

    }

    return (
        <div className="row">
            <h1 className="text-center">Form Validation</h1>
            <form ref={formRef} >

                <Input type='text' placeholder='Name' name='name' />
                <Input type='email' placeholder='Email' name='email' />
                <Input type='tel' placeholder='Phone' name='phone' />
                <Input type='url' placeholder='Url' name='url' />

                <div className="small-6 small-centered text-center columns">
                    <a href="#" className="button success expand round text-center" onClick={() => validate()} >Verify</a>
                </div>
            </form>
        </div>)

}


export default Form
