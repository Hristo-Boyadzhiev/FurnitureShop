import { useEffect, useReducer } from 'react'
import { useParams, Link } from 'react-router-dom'

import { getFurniture } from '../../services/furnitureService'
import { createComment, getComments, deleteComment } from '../../services/commentService'

import { useAuthContext } from '../../contexts/AuthContext'
import { useFurnitureContext } from '../../contexts/FurnitureContext'
import { usePurchaseContext } from '../../contexts/PurchaseContext'

import furnitureReducer from '../../reducers/furnitureReducer'

import AddComment from './AddComment/AddComment'
import Comment from './Comment/Comment'

import styles from './Details.module.css'

export default function Details() {
    const { furnitureId } = useParams()
    const [furniture, dispatch] = useReducer(furnitureReducer, '')
    const { isAuthenticated, email, setAuthOnError403, isAdmin } = useAuthContext()
    const { onDeleteClick } = useFurnitureContext()
    const { onBuyClick } = usePurchaseContext()

    useEffect(() => {
        Promise.all([
            getFurniture(furnitureId),
            getComments(furnitureId)
        ])
            .then(([furnitureData, commentsData]) => {
                const furnitureState = { ...furnitureData, commentsData }
                dispatch({
                    type: 'FURNITURE_FETCH',
                    payload: furnitureState
                })
            })
            .catch(error => {
                if (error.message === 'Invalid access token') {
                    setAuthOnError403()
                } else {
                    alert(error.message)
                }
            })
    }, [furnitureId, setAuthOnError403])

    const onAddCommentSubmit = async (formValues) => {
        try {
            const newComment = await createComment(furnitureId, formValues)
            dispatch({
                type: 'COMMENT_ADD',
                payload: newComment,
                email
            })
        } catch (error) {
            if (error.message === 'Invalid access token') {
                setAuthOnError403()
            } else {
                alert(error.message)
            }
        }
    }

    const onDeleteCommentClick = async (comment) => {
        const commentId = comment._id
        const confirm = window.confirm(`Are you sure you want to delete ${comment.comment}?`);
        if (confirm) {
            try {
                await deleteComment(commentId)
                dispatch({
                    type: 'COMMENT_DELETE',
                    payload: commentId
                })
            } catch (error) {
                if (error.message === 'Invalid access token') {
                    setAuthOnError403()
                } else {
                    alert(error.message)
                }
            }
        }
    }

    const commentsList = furniture.commentsData?.map(x => <Comment
        key={x._id}
        comment={x}
        commentText={x.comment}
        email={x.author.email}
        onDeleteCommentClick={onDeleteCommentClick}
    />)

    return (

        <div className={`${styles["wrapper"]} ${styles["clearfix"]}`}>
            <div className={styles["left"]}>
                <div className={styles["div-image"]}>
                    <img src={furniture.imageUrl} className={styles["image-setup"]} alt={furniture.model} />
                </div>

            </div>
            <div className={styles["right"]}>

                <div className={styles["inner"]}>
                    <section>
                        <h1 className={styles["setup-h1"]}>Product Details</h1>
                        <p><em>Model: {furniture.model}</em></p>
                        <p><em>Price: {furniture.price}€</em></p>
                        <p><em>Description: {furniture.description}</em></p>
                    </section>
                    <section>
                        <span className={styles["skill-set"]}>
                            <div className={styles["skill-set-div"]}>
                                {isAuthenticated && !isAdmin &&
                                    <span className={styles["skill-set-span"]}><button className={`${styles["button"]} ${styles["button1"]}`} onClick={() => onBuyClick(furniture)}>Buy</button></span>
                                }
                                <span className={styles["skill-set-span"]}><Link to={`/catalog/`} className={`${styles["button"]} ${styles["button1"]}`}>Back</Link></span>

                                {isAdmin &&
                                    <>
                                        <span className={styles["skill-set-span"]}><Link to={`/catalog/${furnitureId}/details/edit`} className={`${styles["button"]} ${styles["button1"]}`}>Edit</Link></span>
                                        <span className={styles["skill-set-span"]}><button className={`${styles["button"]} ${styles["button1"]}`} onClick={() => onDeleteClick(furniture)}>Delete</button></span>
                                    </>
                                }
                            </div>
                        </span>
                    </section>
                    <section>
                        <h1 className={styles["setup-h1"]}>Comments</h1>

                        {furniture.commentsData?.length === 0 &&
                            <p className={styles["setup-h1"]}><em>No comments yet</em></p>
                        }

                        {furniture.commentsData &&
                            <>
                                {commentsList}
                            </>
                        }

                        {isAuthenticated && <AddComment onAddCommentSubmit={onAddCommentSubmit} />}

                    </section >
                </div >
            </div >
        </div >
    )
}