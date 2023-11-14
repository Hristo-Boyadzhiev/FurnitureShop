import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as furnitureService from '../Services/furnitureService'

export const useForm = (initialValues) => {
    const [formValues, setFormValues] = useState(initialValues)
    const navigate = useNavigate()

    const onChangeHandler = (event) => {
        setFormValues(state => ({ ...state, [event.target.name]: event.target.value }))
    }

    const onSubmit = (event) => {
        event.preventDefault()
        furnitureService.createFurniture(formValues)
            .then(newFurniture => {
                navigate('/catalog')
            })
    }

    return {
        formValues,
        onChangeHandler,
        onSubmit
    }
}