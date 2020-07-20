import React, { useEffect, useState, useRef } from 'react'

const InputText = props => {

    const { name, type } = props

    const [value, setValue] = useState()
    const elem = useRef()

    return (
        <input type="text" placeholder={name} ref={elem} value={value} onChange={e => setValue(e.target.value)} />
    )
}

const Form = props => {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isEmailValid: false,
    //         isNameValid: false,
    //         isPhoneValid: false,
    //         isUrlValid: false,
    //     };
    // }


    return (
        <div className="row">
            <h1 className="text-center">Form Validation</h1>
            <form>

                <InputText name='Name' type='name' />
                <InputText name='Email' type='email' />
                <InputText name='Phone' type='phone' />
                <InputText name='Url' type='url' />

                <div className="small-6 small-centered text-center columns">
                    <a href="#" className="button success expand round text-center">Verify</a>
                </div>
            </form>
        </div>)

}


export default Form;
