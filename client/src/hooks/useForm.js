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

// import { useState } from "react";

// export const useForm = (initialValues, context) => {
//     const [formValues, setFormValues] = useState(initialValues)

//     const onChangeHandler = (event) => {
//         setFormValues(state => ({ ...state, [event.target.name]: event.target.value }))
//     }

//     const onSubmit = (event) => {
//         event.preventDefault()
//         if(context.furniture){
//             const furnitureId = context.furniture._id
//             context.onEditSubmit(furnitureId, formValues)
//         } else {
//             context.onCreateSubmit(formValues)
//         }
//     }

//     return {
//         formValues,
//         onChangeHandler,
//         onSubmit
//     }
// }