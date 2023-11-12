// import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import * as furnitureService from './Services/furnitureService'

import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import Contacts from './components/Contacts/Contacts';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Create from './components/Create/Create';


function App() {
  const navigate = useNavigate()

  const onSubmitCreateHandler = (formValues) => {
    furnitureService.createFurniture(formValues)
      .then(newFurniture => {
        navigate('/catalog')
      })
  }

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
         <Route path='/catalog' element={<Catalog />} /> 
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} /> 
        <Route path='/create' element={<Create onSubmitCreateHandler={onSubmitCreateHandler}/>} />

      </Routes>

    </>
  );
}

export default App;
