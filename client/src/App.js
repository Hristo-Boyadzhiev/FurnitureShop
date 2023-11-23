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
// import { useNavigate } from 'react-router-dom';
import Logout from './components/Logout/Logout';
import { FurnitureContext } from './contexts/FurnitureContext';
import Edit from './components/Edit/Edit';

import { AuthProvider } from './contexts/AuthContext';

function App() {
  // const navigate = useNavigate()

  const onCreateSubmit = async (formValues) => {
    // try {
    //   await furnitureService.createFurniture(formValues, authContextValues.userToken)
    //   navigate('/catalog')
    // } catch (error) {
    //   alert(error.message)
    // }
  }

  const onEditSubmit = async (formValues) => {
    // const furnitureId = formValues._id
    // try {
    //   console.log(authContextValues.userToken)
    //   furnitureService.editFurniture(furnitureId, formValues, authContextValues.userToken)
    //   navigate(`/catalog/${furnitureId}/details`)
    // } catch (error) {
    //   alert(error.message)
    // }
  }


  const furnitureContextValues = {
    onCreateSubmit,
    onEditSubmit
  }

  return (
    <AuthProvider>
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
          <Route path='/catalog/:furnitureId/details/' element={<Details />} />
          <Route path='/catalog/:furnitureId/details/edit' element={<Edit />} />
        </Routes>
      </FurnitureContext.Provider>
    </AuthProvider>
  );
}

export default App;
