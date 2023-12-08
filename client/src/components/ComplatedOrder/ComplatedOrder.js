import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import { useAuthContext } from '../../contexts/AuthContext';

import styles from './ComplatedOrder.module.css'

export default function ComplatedOrder() {
    const {isAdmin} = useAuthContext()
    const navigate = useNavigate()

    useEffect(()=>{
        if (isAdmin) {
            return navigate('/')
        }
    })

    setTimeout(() => {
        navigate('/catalog')
    }, 2000)

    return (
        <>
            <span className={styles["completed-text"]}> YOUR PURCHASE IS COMPLETED!</span>
        </>
    )
}