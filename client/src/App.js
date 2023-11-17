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
import { FurnitureContext } from './components/contexts/FurnitureContext';


function App() {
  const navigate = useNavigate()

  const onCreateSubmit = async (formValues) => {
    try {
      const newFurniture = await furnitureService.createFurniture(formValues)
      navigate('/catalog')
    } catch (error) {
      alert(error.message)
    }
}

const furnitureContext = {
  onCreateSubmit
}

return (
  <FurnitureContext.Provider value ={furnitureContext}>
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
);
}

export default App;
