import React from 'react'
import { GoMail } from 'react-icons/go'

const InputEdit = ({ label, placeholder }) => {
    return (
        <div>
            <label>
                <GoMail />
                {label}
                </label>
            <input type="text" name={placeholder} placeholder={placeholder}/>
        </div>
    )
}

export default InputEdit