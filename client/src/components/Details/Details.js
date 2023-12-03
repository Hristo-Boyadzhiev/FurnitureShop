import { useParams, useNavigate, Link } from 'react-router-dom'
import { useEffect, useReducer } from 'react'
import { getFurniture, deleteFurniture } from '../../services/furnitureService'
import { createComment, getComments } from '../../services/commentService'

import { useAuthContext } from '../../contexts/AuthContext'
import { useFurnitureContext } from '../../contexts/FurnitureContext'
import { usePurchaseContext } from '../../contexts/PurchaseContext'

import AddComment from './AddComment/AddComment'
import Comment from './Comment/Comment'
import furnitureReducer from '../../reducers/furnitureReducer'
import styles from './Details.module.css'

export default function Details() {
    const { furnitureId } = useParams()
    const [furniture, dispatch] = useReducer(furnitureReducer, '')
    const navigate = useNavigate()
    const { isAuthenticated, userId, email } = useAuthContext()
    const { deleteFurnitureInState } = useFurnitureContext()
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
    }, [furnitureId])

    const onDeleteClick = async () => {
        //Ако имам време да не го правя с confirm, а да излиза модал, 
        //както го правихме преди няколко лекции
        const confirm = window.confirm(`Are you sure you want to delete ${furniture.model}?`);
        if (confirm) {
            try {
                await deleteFurniture(furnitureId)
                deleteFurnitureInState(furnitureId)
                navigate('/catalog')
            } catch (error) {
                alert(error.message)
            }
        }
    }

    const onAddCommentSubmit = async (formValues) => {
        try {
            const newComment = await createComment(furnitureId, formValues)
            dispatch({
                type: 'COMMENT_ADD',
                payload: newComment,
                email
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const isOwner = userId === furniture._ownerId

    const commentsList = furniture.commentsData?.map(x => <Comment
        key={x._id}
        comment={x.comment}
        email={x.author.email}
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
                        <p><em>Price: {furniture.price}£</em></p>
                        <p><em>Description: {furniture.description}</em></p>
                    </section>
                    <section>
                        <span className={styles["skill-set"]}>
                            <div className={styles["skill-set-div"]}>
                            {isAuthenticated && !isOwner &&
                            <span className={styles["skill-set-span"]}><button className={`${styles["button"]} ${styles["button1"]}`} onClick={()=>onBuyClick(furniture)}>Buy</button></span>
                            }
                                <span className={styles["skill-set-span"]}><Link to={`/catalog/`} className={`${styles["button"]} ${styles["button1"]}`}>Back</Link></span>

                                {isOwner &&
                                    <>
                                        <span className={styles["skill-set-span"]}><Link to={`/catalog/${furnitureId}/details/edit`} className={`${styles["button"]} ${styles["button1"]}`}>Edit</Link></span>
                                        <span className={styles["skill-set-span"]}><button className={`${styles["button"]} ${styles["button1"]}`} onClick={onDeleteClick}>Delete</button></span>
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