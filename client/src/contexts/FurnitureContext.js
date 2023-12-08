import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { createFurniture, getFurnitures, editFurniture, deleteFurniture } from "../services/furnitureService";

import { useAuthContext } from "./AuthContext";

const FurnitureContext = createContext()

export default function FurnitureProvider({
  children
}) {
  const [furnitures, setFurnitures] = useState([])
  const { setAuthOnError403 } = useAuthContext()
  const navigate = useNavigate()

  const getFurnituresFunction = async () => {
    try {
      const currentFurnitures = await getFurnitures()
      setFurnitures(currentFurnitures)
    } catch (error) {
      if (error.message === 'Invalid access token') {
        setAuthOnError403()
      } else {
        alert(error.message)
      }
    }
  }

  const onCreateSubmit = async (formValues) => {
    try {
      const newFurniture = await createFurniture(formValues)
      setFurnitures(state => [...state, newFurniture])
      navigate('/catalog')
    } catch (error) {
      if (error.message === 'Invalid access token') {
        setAuthOnError403()
      } else {
        alert(error.message)
      }
    }
  }

  const onEditSubmit = async (formValues) => {
    const furnitureId = formValues._id
    try {
      const EditedFurniture = await editFurniture(furnitureId, formValues)
      setFurnitures(state => state.map(furniture => furniture._id === formValues._id ? EditedFurniture : furniture))
      navigate(`/catalog/${furnitureId}/details`)
    } catch (error) {
      if (error.message === 'Invalid access token') {
        setAuthOnError403()
      } else {
        alert(error.message)
      }
    }
  }


  const onDeleteClick = async (furniture) => {
    const furnitureId = furniture._id
    const confirm = window.confirm(`Are you sure you want to delete ${furniture.model}?`);
    if (confirm) {
      try {
        await deleteFurniture(furnitureId)
        setFurnitures(state => state.filter(furniture => furniture._id !== furnitureId))
        navigate('/catalog')
      } catch (error) {
        if (error.message === 'Invalid access token') {
          setAuthOnError403()
        } else {
          alert(error.message)
        }
      }
    }
  }

  const getFurnitureInState = (furnitureId) => {
    return furnitures.find(furniture => furniture._id === furnitureId)
  }

  const furnitureContextValues = {
    furnitures,
    getFurnituresFunction,
    onCreateSubmit,
    onEditSubmit,
    onDeleteClick,
    getFurnitureInState,
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


