import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as furnitureService from '../services/furnitureService'
import { useAuthContext } from "./AuthContext";

const FurnitureContext = createContext()

export default function FurnitureProvider({
  children
}) {
  const [furnitures, setFurnitures] = useState([])
  const { token } = useAuthContext()
  const navigate = useNavigate()

  useEffect(() => {
    furnitureService.getFurnitures()
      .then(currentFurnitures => {
        setFurnitures(currentFurnitures)
      })
  }, [])

  const onCreateSubmit = async (formValues) => {
    try {
      const newFurniture = await furnitureService.createFurniture(formValues, token)
      setFurnitures(state => [...state, newFurniture])
      navigate('/catalog')
    } catch (error) {
      alert(error.message)
    }
  }

  const onEditSubmit = async (formValues) => {
    const furnitureId = formValues._id
    try {
      const EditedFurniture = await furnitureService.editFurniture(furnitureId, formValues, token)
      setFurnitures(state => state.map(furniture => furniture._id === formValues._id ? EditedFurniture : furniture))
      navigate(`/catalog/${furnitureId}/details`)
    } catch (error) {
      alert(error.message)
    }
  }

  const getFurniture = (furnitureId) => {
    return furnitures.find(furniture => furniture._id === furnitureId)
  }

  const furnitureContextValues = {
    furnitures,
    onCreateSubmit,
    onEditSubmit,
    getFurniture
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


