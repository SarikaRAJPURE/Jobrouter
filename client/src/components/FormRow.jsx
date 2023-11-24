import React from 'react'

const FormRow = ({ type, name, labelText, defaultValue }) => {
    return (
        <div className="form-row">
            <label htmlFor={name} className='form-label'>
                {labelText || name}
            </label>
            <input
                defaultValue={defaultValue || ''}
                required
                type={type}
                id={name}
                name={name}
                className='form-input' />
        </div>
    )
}

export default FormRow
