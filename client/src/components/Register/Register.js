import { useForm } from "../../hooks/useForm"
import { useAuthContext } from "../../contexts/AuthContext"
import { useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import styles from './Register.module.css'

export default function Register() {
    const {onRegisterSubmit, isAuthenticated} = useAuthContext()
    const {formValues, onChangeHandler, onSubmit} = useForm({
        email: '',
        password: '',
        repeatPassword: ''
    }, onRegisterSubmit)
    const navigate = useNavigate()

    useEffect(()=>{
        if(isAuthenticated){
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
                            />
                            <input
                                type='password'
                                name='password'
                                placeholder='Password'
                                className={`${styles['input-line']} ${styles['full-width']}`}
                                value={formValues.password}
                                onChange={onChangeHandler}
                            />
                            <input
                                type='password'
                                name='repeatPassword'
                                placeholder='Repeat Password'
                                className={`${styles['input-line']} ${styles['full-width']}`}
                                value={formValues.repeatPassword}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={styles['spacing']}>Already registered? <Link className='highlight' to={"/login"}>Login</Link></div>
                        <div><button className={`${styles['ghost-round']} ${styles['full-width']}`}>Create Account</button></div>

                    </form>
                </div>
            </div>
        </>
    )
}