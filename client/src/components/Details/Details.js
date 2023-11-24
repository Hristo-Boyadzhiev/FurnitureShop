import { useParams, useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import * as furnitureService from '../../services/furnitureService'
import * as commentService from '../../services/commentService'

import { useAuthContext } from '../../contexts/AuthContext'
import AddComment from './AddComment/AddComment'
import Comment from './Comment/Comment'
// import './Details.module.css'
//взех го от https://www.bootdey.com/snippets/view/blog-item-comments

export default function Details() {
    const { furnitureId } = useParams()
    const [furniture, setFurniture] = useState('')
    const navigate = useNavigate()
    const { isAuthenticated, token, userId, email } = useAuthContext()

    useEffect(() => {
        Promise.all([
            furnitureService.getFurniture(furnitureId),
            commentService.getFurnitureComments(furnitureId)
        ])
            .then(([furnitureData, commentsData]) => {
                setFurniture({ ...furnitureData, commentsData })
            })
    }, [furnitureId])

    const onDeleteClick = (event) => {
        event.preventDefault();
        const confirm = window.confirm('Are you sure you want to delete this offer?');
        if (confirm) {
            furnitureService.deleteFurniture(furniture._id, token)
                .then(result => {
                    navigate('/catalog')
                })
        }
    }

    const onAddCommentSubmit = async (formValues) => {
        try {
               const newComment = await commentService.createComment(furnitureId, formValues, token)
        setFurniture(state => ({...state,
            commentsData: [...state.commentsData,
            {
                ...newComment,
                author: {
                    email
                }
            }
            ]
        })) 
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
        <>
            <div className="untree_co-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center pt-5">

                            <img src={furniture.imageUrl} alt={furniture.model} />
                            <p>{furniture.model}</p>
                            <p>${furniture.price}</p>
                            <p>{furniture.description}</p>

                            {isOwner &&
                                <nav>
                                    <Link to={"edit"} className="btn btn-sm btn-outline-black">Edit</Link>
                                    <Link to={"delete"} className="btn btn-sm btn-outline-black" onClick={onDeleteClick}>Delete</Link>
                                </nav>}

                            <div>
                                <div>
                                    <Link to={"/catalog"} className="btn btn-sm btn-outline-black">Back to catalog</Link>
                                </div>
                            </div>

                            <section className="content-item" id="comments">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-8">

                                            {isAuthenticated && <AddComment onAddCommentSubmit={onAddCommentSubmit} />}

                                            <h3>Comments</h3>

                                            {furniture.commentsData?.length === 0 && <p>No comments yet</p>}

                                            {furniture.commentsData &&
                                                <>
                                                    {commentsList}
                                                </>
                                            }

                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}