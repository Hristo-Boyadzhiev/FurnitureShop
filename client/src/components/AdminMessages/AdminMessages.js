import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getMessages } from '../../services/messageService'

import { useAuthContext } from '../../contexts/AuthContext'

import AdminMessagesItem from './AdminMessagesItem/AdminMessagesItem'

import styles from './AdminMessages.module.css'

export default function AdminMessages() {
    const { setAuthOnError403 } = useAuthContext()
    const [messages, setMessages] = useState([])

    useEffect(() => {
        getMessages()
            .then(currentMessages => {
                setMessages(currentMessages)
            })
            .catch(error => {
                if (error.message === 'Invalid access token') {
                    setAuthOnError403()
                } else {
                    alert(error.message)
                }
            })
    }, [setAuthOnError403])

    const messagesList = messages?.map(x => <AdminMessagesItem
        key={x._id}
        message={x}
    />)

    return (
        <>
            {messagesList.length === 0 &&
                <div className={styles["no-context"]}>
                    <p className={styles["no-context-text"]}>No messages yet</p>
                    <Link to={"/"} className={`${styles["button"]} ${styles["button1"]}`}>Home</Link>
                </div>
            }

            {messagesList.length > 0 &&
                <>
                    <h1 className={styles["title"]}>All Purchases</h1>

                    <table id={styles["customers"]}>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Message</th>
                            </tr>
                            {messagesList}

                        </tbody>
                    </table>
                </>
            }
        </>
    )
}