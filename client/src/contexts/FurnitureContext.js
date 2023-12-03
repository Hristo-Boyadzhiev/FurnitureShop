import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createFurniture, getFurnitures, editFurniture } from "../services/furnitureService";

const FurnitureContext = createContext()

export default function FurnitureProvider({
  children
}) {
  const [furnitures, setFurnitures] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
      getFurnitures()
      .then(currentFurnitures => {
        setFurnitures(currentFurnitures)
      })
  }, [])

  const onCreateSubmit = async (formValues) => {
    try {
       const newFurniture = await createFurniture(formValues)
      setFurnitures(state => [...state, newFurniture])
      navigate('/catalog')
    } catch (error) {
      alert(error.message)
    }
  }

  const onEditSubmit = async (formValues) => {
    const furnitureId = formValues._id
    try {
      const EditedFurniture = await editFurniture(furnitureId, formValues)
      setFurnitures(state => state.map(furniture => furniture._id === formValues._id ? EditedFurniture : furniture))
      navigate(`/catalog/${furnitureId}/details`)
    } catch (error) {
      alert(error.message)
    }
  }

  const getFurnitureInState = (furnitureId) => {
    return furnitures.find(furniture => furniture._id === furnitureId)
  }

  const deleteFurnitureInState = (furnitureId) => {
    return setFurnitures(state => state.filter(furniture => furniture._id !== furnitureId))
  }

  const furnitureContextValues = {
    furnitures,
    onCreateSubmit,
    onEditSubmit,
    getFurnitureInState,
    deleteFurnitureInState
  }

  return (
    <FurnitureContext.Provider value={furnitureContextValues}>
      {children}
    </FurnitureContext.Provider>
  )
}

export const useFurnitureContext = () => {
  const context = useContext(FurnitureContext)
  return context
}


