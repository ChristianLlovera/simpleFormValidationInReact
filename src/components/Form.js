import React, { useEffect, useState, useRef } from 'react'

const InputText = props => {

    const { name } = props

    const [value, setValue] = useState()
    const elem = useRef()

    useEffect(() => {
        console.log(elem)
    }, [])


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
                <InputText name='Name' />
                <InputText name='Email' />
                <InputText name='Phone' />
                <InputText name='Url' />
                <div className="small-6 small-centered text-center columns">
                    <a href="#" className="button success expand round text-center">Verify</a>
                </div>
            </form>
        </div>)

}


export default Form;
