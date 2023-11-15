import { useParams, Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import * as furnitureService from '../../Services/furnitureService'
import { Link } from 'react-router-dom'


export default function Contact() {
    const { furnitureId } = useParams()
    const [furniture, setFurniture] = useState('')
    const navigate = useNavigate()

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
            furnitureService.deleteFurniture(furniture._id)
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

                            <nav>
                                <Link to={"edit"} className="btn btn-sm btn-outline-black">Edit</Link>
                                <Link to={`delete`} className="btn btn-sm btn-outline-black" onClick={onDeleteClick}>Delete</Link>
                            </nav>

                            <Routes>
                                <Route path={`/catalog/${furniture._id}/edit`} element />
                            </Routes>

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