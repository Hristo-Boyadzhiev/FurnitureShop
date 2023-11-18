import { useParams, useNavigate, Route, Routes } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import * as furnitureService from '../../services/furnitureService'
import { Link } from 'react-router-dom'
import Create from '../Create/Create'
import { FurnitureContext } from '../../contexts/FurnitureContext'
import { AuthContext } from '../../contexts/AuthContext'

export default function Contact() {
    const { furnitureId } = useParams()
    const [furniture, setFurniture] = useState('')
    const [showDetailsPage, setShowDetailsPage] = useState(true)
    const [showEditPage, setShowEditPage] = useState(false)
    const navigate = useNavigate()
    const { isAuthenticated, userToken } = useContext(AuthContext)

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
            furnitureService.deleteFurniture(furniture._id, userToken)
                .then(result => {
                    navigate('/catalog')
                })
        }
    }

    const onEditClick = (event) => {
        setShowDetailsPage(false)
        setShowEditPage(true)
    }

    const onEditSubmit = async (furnitureId, formValues) => {
        try {
            furnitureService.editurniture(furnitureId, formValues)
            navigate(`/catalog`)
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <>
            {showDetailsPage && <div className="untree_co-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center pt-5">

                            <img src={furniture.imageUrl} alt={furniture.model} />
                            <p>{furniture.model}</p>
                            <p>${furniture.price}</p>
                            <p>{furniture.description}</p>

                            {isAuthenticated &&
                                <nav>
                                    <Link to={"edit"} className="btn btn-sm btn-outline-black" onClick={() => onEditClick(furniture._id)}>Edit</Link>
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
            </div>}

            {/* {showEditPage && <Create furniture={furniture}/>} */}
            {showEditPage &&
                <FurnitureContext.Provider value={{ furniture, onEditSubmit }}>
                    <Routes>
                        <Route path='/edit' element={<Create />} />
                    </Routes>
                </FurnitureContext.Provider>
            }

        </>
    )
}