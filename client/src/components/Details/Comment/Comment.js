import { useAuthContext } from '../../../contexts/AuthContext'
import styles from './Comment.module.css'

export default function Comment({
    comment,
    commentText,
    email,
    onDeleteCommentClick
}) {

    const { userId } = useAuthContext()

    const isCommentOwner = userId === comment._ownerId

    return (
        <div className={styles["container"]}>
            <div className={styles["be-comment-block"]}>
                <div className={styles["be-comment"]}>
                    <div className={styles["be-comment-content"]}>

                        <span className={styles["be-comment-name"]}>
                            <p><em>{email}</em></p>
                        </span>
                        {/* <span className={styles["be-comment-time"]}>
                                        <i className={`${styles["fa"]} ${styles["fa-clock-o"]}`}></i>
                                        May 27, 2015 at 3:14am
                                    </span> */}

                        {/* <p className={styles["be-comment-text"]}>
                            <em>
                                {commentText}
                            </em>
                            {isCommentOwner &&
                                <button onClick={() => onDeleteCommentClick(comment)} className={`${styles["button"]} ${styles["button1"]}`}>Delete</button>
                            }
                        </p> */}
                           <p className={styles["be-comment-text"]}>
                            <em>
                                {commentText}
                            </em>
                            {isCommentOwner &&
                                <button onClick={() => onDeleteCommentClick(comment)} className={`${styles["button"]} ${styles["button1"]}`}>Delete</button>
                            }
                        </p>

                    </div>
                </div>
                {/* {isAuthenticated && <AddComment onAddCommentSubmit={onAddCommentSubmit} />} */}

            </div>
        </div>
    )
}