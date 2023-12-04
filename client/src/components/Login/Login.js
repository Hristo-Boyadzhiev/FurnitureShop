import { useForm } from "../../hooks/useForm"
import { useAuthContext } from "../../contexts/AuthContext"
import { useNavigate, Link } from "react-router-dom"
import { useEffect } from "react"
import styles from './Login.module.css'
import { useValidation } from "../../hooks/useValidation"

export default function Login() {
    const navigate = useNavigate()
    const { onLoginSubmit, isAuthenticated } = useAuthContext()

    const { formValues, onChangeHandler, onSubmit } = useForm({
        email: '',
        password: ''
    }, onLoginSubmit)

    const { formErrors, onValidateHandler } = useValidation({
        email: '',
        password: ''
    })
    
    useEffect(() => {
        if (isAuthenticated) {
            return navigate('/')
        }
    }, [isAuthenticated, navigate])

    return (
        <>
            <div className={styles['bold-line']}></div>
            <div className={styles['login-container']}>
                <div className={styles['window']}>
                    <div className={styles['overlay']}></div>
                    <form className={styles["content"]} method="POST" onSubmit={onSubmit}>
                        <div className={styles['welcome']}>Login</div>
                        <div className={styles['subtitle']}></div>
                        <div className={styles['input-fields']}>
                            <input
                                type='email'
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
                        </div>
                        <div className={styles['spacing']}>If you don't have profile click <Link className='highlight' to={"/register"}>here</Link></div>
                        <div><button className={`${styles['ghost-round']} ${styles['full-width']}`}>Login</button></div>
                    </form>
                </div >
            </div >
        </>
    )
}