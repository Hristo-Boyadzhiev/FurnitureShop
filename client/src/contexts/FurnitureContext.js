import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createFurniture, getFurnitures, editFurniture } from "../services/furnitureService";
import { useAuthContext } from "./AuthContext";

const FurnitureContext = createContext()

export default function FurnitureProvider({
  children
}) {
  const [furnitures, setFurnitures] = useState([])
  const navigate = useNavigate()
  const { setAuthOnError403 } = useAuthContext()

  useEffect(() => {
    getFurnitures()
      .then(currentFurnitures => {
        setFurnitures(currentFurnitures)
      })
      .catch(error => {
        if (error.message === 'Invalid access token') {
          setAuthOnError403()
        } else {
          alert(error.message)
        }
      })
  }, [setAuthOnError403])

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


