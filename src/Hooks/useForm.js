import { useState } from 'react';

const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState)

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    const handleClearForm = () => {
        setValues(initialState)
    }

    return [values, handleInputChange, handleClearForm]
}

export default useForm;
