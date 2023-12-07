import { useState } from "react";

export const useValidation = (initialValues) => {
    const [formErrors, setFormErrors] = useState(initialValues)

    const onValidateHandler = (event) => {
        if (event.target.name === 'email' && (/^[A-Za-z0-9_.]+@[A-Za-z]+\.[A-Za-z]{2,3}$/.test(event.target.value) === false)) {
            setFormErrors(state => ({ ...state, email: 'The email is not valid!'}))
        } else {
            setFormErrors(state => ({ ...state, email: '' }))
        }

        if (event.target.name === 'password' && event.target.value.length < 3) {
            setFormErrors(state => ({ ...state, password: 'The password must be minimum 3 characters long' }))
        } else {
            setFormErrors(state => ({ ...state, password: '' }))
        }

        if (event.target.name === 'repeatPassword' && event.target.value.length < 3) {
            setFormErrors(state => ({ ...state, repeatPassword: 'The repeat password must be minimum 3 characters long' }))
        } else {
            setFormErrors(state => ({ ...state, repeatPassword: '' }))
        }

        if (event.target.name === 'model' && event.target.value.length < 3) {
            setFormErrors(state => ({ ...state, model: 'The model must be minimum 3 characters long' }))
        } else {
            setFormErrors(state => ({ ...state, model: '' }))
        }

        if (event.target.name === 'price' && (/^(?!(?:^[-+]?[0.]+(?:[Ee]|$)))(?!(?:^-))(?:(?:[+-]?)(?=[0123456789.])(?:(?:(?:[0123456789]+)(?:(?:[.])(?:[0123456789]*))?|(?:(?:[.])(?:[0123456789]+))))(?:(?:[Ee])(?:(?:[+-]?)(?:[0123456789]+))|))$/.test(event.target.value) === false)) {
            setFormErrors(state => ({ ...state, price: 'The price must be positive number' }))
        } else {
            setFormErrors(state => ({ ...state, price: '' }))
        }

        if(event.target.name === 'imageUrl' && (/^https?:\/\/.+/.test(event.target.value)=== false)){
            setFormErrors(state => ({ ...state, imageUrl: 'The URL is not valid' }))
        } else {
            setFormErrors(state => ({ ...state, imageUrl: '' }))
        }

        if (event.target.name === 'description' && event.target.value.length < 5) {
            setFormErrors(state => ({ ...state, description: 'The description must be minimum 5 characters long' }))
        } else {
            setFormErrors(state => ({ ...state, description: '' }))
        }

        if (event.target.name === 'name' && event.target.value.length < 2) {
            setFormErrors(state => ({ ...state, name: 'The name must be minimum 2 characters long' }))
        } else {
            setFormErrors(state => ({ ...state, name: '' }))
        }

        if (event.target.name === 'message' && event.target.value.length < 5) {
            setFormErrors(state => ({ ...state, message: 'The message must be minimum 5 characters long' }))
        } else {
            setFormErrors(state => ({ ...state, message: '' }))
        }

    }

    return {
        formErrors,
        onValidateHandler,
    }
}
