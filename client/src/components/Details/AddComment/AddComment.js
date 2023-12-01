import { useForm } from "../../../hooks/useForm"
import styles from './AddComment.module.css'

export default function AddComment({
    onAddCommentSubmit
}) {
    const {formValues, onChangeHandler, onSubmit} = useForm({
        comment: ''
    }, onAddCommentSubmit)

    return (
        <form className={styles["form-block"]} method="POST" onSubmit={onSubmit}>
        <div className={styles["row"]}>

            <div className={styles["col-xs-12"]}>
                <div className={styles["form-group"]}>
                    <textarea
                        className={styles["form-input"]}
                        name="comment"
                        placeholder="Your comment"
                        value={formValues.comment}
                        onChange={onChangeHandler}
                    ></textarea>
                </div>
            </div>
            <div className={styles["skill-set-div"]}>
                <span className={styles["skill-set-span"]}><button type="submit" className={`${styles["button"]} ${styles["button1"]}`}>Add Comment</button></span>
            </div>
        </div>
    </form>
    )
}