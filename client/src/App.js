// import './App.css';
import { Routes, Route } from 'react-router-dom'

import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import Contacts from './components/Contacts/Contacts';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Create from './components/Create/Create';
import Details from './components/Details/Details';
import * as furnitureService from './Services/furnitureService'
import { useNavigate } from 'react-router-dom';
import { FurnitureContext } from './contexts/FurnitureContext';
import * as authService from './Services/authService'
import { authContext } from './contexts/authContext';
import { useState } from 'react';

function App() {
  const [auth, setAuth] = useState({})
  const navigate = useNavigate()
  const onCreateSubmit = async (formValues) => {
    try {
      await furnitureService.createFurniture(formValues)
      navigate('/catalog')
    } catch (error) {
      alert(error.message)
    }
  }

  // const onEditSubmit = async (furnitureId, formValues) => {
  //   try {
  //     furnitureService.editurniture(furnitureId, formValues)
  //     navigate(`/catalog`)
  //   } catch (error) {
  //     alert(error.message)
  //   }
  // }

  const onLoginSubmit = async (formValues) => {
    try {
      const loggedUser = await authService.login(formValues)
      console.log(loggedUser)
      setAuth(loggedUser)
      navigate('/')
    } catch (error) {
      alert(error.message)
    }
  }

  const furnitureContext = {
    onCreateSubmit,
    // onEditSubmit
  }

  const contextAuth = {
    onLoginSubmit
  }

  return (
    <authContext.Provider value={contextAuth}>
      <FurnitureContext.Provider value={furnitureContext}>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create' element={<Create />} />
          <Route path='/catalog/:furnitureId/details/*' element={<Details />} />
        </Routes>
      </FurnitureContext.Provider>
    </authContext.Provider>
  );
}

export default App;
