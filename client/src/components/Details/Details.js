import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import * as furnitureService from '../../services/furnitureService'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext'

export default function Contact() {
    const { furnitureId } = useParams()
    const [furniture, setFurniture] = useState('')
    const navigate = useNavigate()
    const { isAuthenticated, token } = useAuthContext()

    useEffect(() => {
        furnitureService.getFurniture(furnitureId)
            .then(currentFurniture => {
                setFurniture(currentFurniture)
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

                            {isAuthenticated &&
                                <nav>
                                    <Link to={"edit"} className="btn btn-sm btn-outline-black">Edit</Link>
                                    <Link to={"delete"} className="btn btn-sm btn-outline-black" onClick={onDeleteClick}>Delete</Link>
                                </nav>}

                            <div>
                                <div>
                                    <Link to={"/catalog"} className="btn btn-sm btn-outline-black">Back to catalog</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}