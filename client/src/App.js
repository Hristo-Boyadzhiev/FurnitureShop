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
import * as furnitureService from './services/furnitureService'
import * as authService from './services/authService'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Logout from './components/Logout/Logout';
import { FurnitureContext } from './contexts/FurnitureContext';
import { AuthContext } from './contexts/AuthContext';

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
      setAuth(loggedUser)
      navigate('/')
    } catch (error) {
      alert(error.message)
    }
  }

  const onRegisterSubmit = async (formValues) => {
    const { repeatPassword, ...registerData } = formValues

    if (repeatPassword !== registerData.password) {
      return alert('The password and repeat password must be equal')
    }

    try {
      const registeredUser = await authService.register(formValues)
      setAuth(registeredUser)
      navigate('/')
    } catch (error) {
      alert(error.message)
    }
  }

  const onLogout = async () => {
    try {
      await authService.logout(authContextValues.userToken)
      setAuth({})
    } catch (error) {

    }

  }

  const furnitureContextValues = {
    onCreateSubmit,
    // onEditSubmit
  }

  const authContextValues = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: auth._id,
    userEmail: auth.email,
    userToken: auth.accessToken,
    isAuthenticated: !!auth.accessToken
  }

  return (
    <AuthContext.Provider value={authContextValues}>
      <FurnitureContext.Provider value={furnitureContextValues}>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create' element={<Create />} />
          <Route path='/catalog/:furnitureId/details/*' element={<Details />} />
        </Routes>
      </FurnitureContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
