import { useState } from "react";

export const useForm = (initialValues, onSubmitHandler) => {
    const [formValues, setFormValues] = useState(initialValues)

    const onChangeHandler = (event) => {
        setFormValues(state => ({ ...state, [event.target.name]: event.target.value }))
    }

    const onSubmit = (event) => {
        event.preventDefault()
        onSubmitHandler(formValues)
        setFormValues(initialValues)
    }

    const changeValues = (newValues)=>{
        setFormValues(newValues)
    }

    return {
        formValues,
        onChangeHandler,
        onSubmit,
        changeValues
    }
}
