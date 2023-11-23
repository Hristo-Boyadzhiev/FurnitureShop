import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

import * as furnitureService from '../services/furnitureService'
import { useAuthContext } from "./AuthContext";

const FurnitureContext = createContext()

export default function FurnitureProvider({
    children
}){
    const {token} = useAuthContext()
    const navigate=useNavigate()

    const onCreateSubmit = async (formValues) => {
        try {
          await furnitureService.createFurniture(formValues, token)
          navigate('/catalog')
        } catch (error) {
          alert(error.message)
        }
      }

      const onEditSubmit = async (formValues) => {
        const furnitureId = formValues._id
        try {
          furnitureService.editFurniture(furnitureId, formValues, token)
          navigate(`/catalog/${furnitureId}/details`)
        } catch (error) {
          alert(error.message)
        }
      }

      const furnitureContextValues = {
        onCreateSubmit,
        onEditSubmit
      }

    return (
        <FurnitureContext.Provider value={furnitureContextValues}>
            {children}
        </FurnitureContext.Provider>
    )
}

export const useFurnitureContext = () =>{
    const context = useContext(FurnitureContext)
    return context
}


