import { useState } from "react";

export const useForm = (initialValues, onSubmitHandler) => {
    const [formValues, setFormValues] = useState(initialValues)

    const onChangeHandler = (event) => {
        setFormValues(state => ({ ...state, [event.target.name]: event.target.value }))
    }

    const onSubmit = (event) => {
        event.preventDefault()
        onSubmitHandler(formValues)
    }

    return {
        formValues,
        onChangeHandler,
        onSubmit
    }
}