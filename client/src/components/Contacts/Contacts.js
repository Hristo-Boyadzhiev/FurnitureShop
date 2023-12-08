import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { useForm } from "../../hooks/useForm"
import { useValidation } from "../../hooks/useValidation"

import { createMessage } from "../../services/messageService"

import { useAuthContext } from "../../contexts/AuthContext"

import styles from './Contacts.module.css'

export default function Contacts() {
    const navigate = useNavigate()
    const { isAdmin, email, setAuthOnError403 } = useAuthContext()

    useEffect(() => {
        if (isAdmin) {
            return navigate('/')
        }
    }, [isAdmin, navigate])

    const { formValues, onChangeHandler, onSubmit } = useForm({
        name: '',
        email: email,
        message: ''
    }, onSendMessageSubmit)

    const { formErrors, onValidateHandler } = useValidation({
        name: '',
        email: '',
        message: ''
    })

    async function onSendMessageSubmit() {
        try {
            await createMessage(formValues)
            navigate('/catalog')
        } catch (error) {
            if (error.message === 'Invalid access token') {
                setAuthOnError403()
            } else {
                alert(error.message)
            }
        }
    }

    return (
        <>
            <div className={styles["create-container"]}>
                <form className={styles["form-container"]} method="POST" onSubmit={onSubmit}>
                    <div className={styles["headline"]}><span>Contact us</span></div>
                    <div className={styles["form-line"]}>
                        <label className={styles["top"]} htmlFor='name'>Name</label>
                        <input
                            type="text"
                            name='name'
                            className={styles["form-input"]}
                            value={formValues.name}
                            onChange={onChangeHandler}
                            onBlur={onValidateHandler}
                        />
                        {formErrors.name &&
                            <p className={styles["form-error"]}>
                                {formErrors.name}
                            </p>
                        }
                    </div>
                    <div className={styles["form-line"]}>
                        <label className={styles["top"]} htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            className={styles["form-input"]}
                            value={formValues.email}
                            onChange={onChangeHandler}
                            onBlur={onValidateHandler}
                        />
                        {formErrors.email &&
                            <p className={styles["form-error"]}>
                                {formErrors.email}
                            </p>
                        }
                    </div>
                    <div className={styles["form-line"]}>
                        <label className={styles["top"]} htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            className={styles["form-input"]}
                            value={formValues.message}
                            onChange={onChangeHandler}
                            onBlur={onValidateHandler}
                        ></textarea>
                        {formErrors.message &&
                            <p className={styles["form-error"]}>
                                {formErrors.message}
                            </p>
                        }
                    </div>

                    <input type="submit" className={styles["form-button"]} value="Submit" />
                </form>
            </div>
        </>
    )
}