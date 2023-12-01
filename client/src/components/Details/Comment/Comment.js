import styles from './Comment.module.css'

export default function Comment({
    comment,
    email
}) {

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

                    <p className={styles["be-comment-text"]}>
                        <em>
                            {comment}
                        </em>
                    </p>
                </div>
            </div>
            {/* {isAuthenticated && <AddComment onAddCommentSubmit={onAddCommentSubmit} />} */}

        </div>
    </div>
    )
}