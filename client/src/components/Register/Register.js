import { useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"

import { useForm } from "../../hooks/useForm"
import { useValidation } from "../../hooks/useValidation"

import { useAuthContext } from "../../contexts/AuthContext"

import styles from './Register.module.css'

export default function Register() {
    const navigate = useNavigate()
    const { onRegisterSubmit, isAuthenticated } = useAuthContext()

    const { formValues, onChangeHandler, onSubmit } = useForm({
        email: '',
        password: '',
        repeatPassword: ''
    }, onRegisterSubmit)

    const { formErrors, onValidateHandler } = useValidation({
        email: '',
        password: '',
        repeatPassword: ''
    })

    useEffect(() => {
        if (isAuthenticated) {
            return navigate('/')
        }
    }, [isAuthenticated, navigate])

    return (
        <>
            <div className={styles['bold-line']}></div>
            <div className={styles['register-container']}>
                <div className={styles['window']}>
                    <div className={styles['overlay']}></div>
                    <form className={styles["content"]} method="POST" onSubmit={onSubmit}>

                        <div className={styles['welcome']}>Register</div>
                        <div className={styles['input-fields']}>
                            <input
                                type='text'
                                name='email'
                                placeholder='Email'
                                className={`${styles['input-line']} ${styles['full-width']}`}
                                value={formValues.email}
                                onChange={onChangeHandler}
                                onBlur={onValidateHandler}
                            />
                            {formErrors.email &&
                                <p className={styles["form-error"]}>
                                    {formErrors.email}
                                </p>
                            }
                            <input
                                type='password'
                                name='password'
                                placeholder='Password'
                                className={`${styles['input-line']} ${styles['full-width']}`}
                                value={formValues.password}
                                onChange={onChangeHandler}
                                onBlur={onValidateHandler}
                            />
                            {formErrors.password &&
                                <p className={styles["form-error"]}>
                                    {formErrors.password}
                                </p>
                            }
                            <input
                                type='password'
                                name='repeatPassword'
                                placeholder='Repeat Password'
                                className={`${styles['input-line']} ${styles['full-width']}`}
                                value={formValues.repeatPassword}
                                onChange={onChangeHandler}
                                onBlur={onValidateHandler}
                            />
                            {formErrors.repeatPassword &&
                                <p className={styles["form-error"]}>
                                    {formErrors.repeatPassword}
                                </p>
                            }
                        </div>
                        <div className={styles['spacing']}>Already registered? <Link className='highlight' to={"/login"}>Login</Link></div>
                        <div><button className={`${styles['ghost-round']} ${styles['full-width']}`}>Create Account</button></div>

                    </form>
                </div>
            </div>
        </>
    )
}