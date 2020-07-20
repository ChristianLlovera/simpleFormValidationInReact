import React, { useEffect, useState, useRef } from 'react'

const InputText = props => {

    const { name, type } = props

    const [value, setValue] = useState('')

    return (
        <input type="text" placeholder={name} ref={type} value={value} onChange={e => setValue(e.target.value)} />
    )
}

const Form = props => {

    const { setValid, setSubmit } = props

    const name = useRef()
    const email = useRef()
    const phone = useRef()
    const url = useRef()

    const validate = () => {
        setSubmit(true)

        const regxEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        const regxPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        const regxUrl = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
        const regxName = /^[a-zA-Z ]{2,30}$/


        if (!regxName.test(name.current.value)) {
            setValid(false)
            return false
        }

        if (!regxEmail.test(email.current.value)) {
            setValid(false)
            return false
        }

        if (!regxPhone.test(phone.current.value)) {
            setValid(false)
            return false
        }

        if (!regxUrl.test(url.current.value)) {
            setValid(false)
            return false
        }

        setValid(true)

    }

    return (
        <div className="row">
            <h1 className="text-center">Form Validation</h1>
            <form>

                <InputText name='Name' type={name} />
                <InputText name='Email' type={email} />
                <InputText name='Phone' type={phone} />
                <InputText name='Url' type={url} />

                <div className="small-6 small-centered text-center columns">
                    <a href="#" className="button success expand round text-center" onClick={() => validate()} >Verify</a>
                </div>
            </form>
        </div>)

}


export default Form
