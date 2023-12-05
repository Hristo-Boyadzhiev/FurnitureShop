import styles from './AdminMessagesItem.module.css'

export default function AdminMessagesItem({
    message
}) {
    return (
        <tr>
            <td className={styles["message-formating"]}>{message.name}</td>
            <td className={styles["message-formating"]}>{message.email}</td>
            <td className={styles["message-formating"]}>{message.message}</td>
        </tr>
    )
}