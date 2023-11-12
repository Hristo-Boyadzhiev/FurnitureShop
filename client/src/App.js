// import './App.css';
import {Routes, Route} from 'react-router-dom'

import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import Contacts from './components/Contacts/Contacts';
import Login from './components/Login/Login';
import Register from './components/Register/Register';


function App() {
  return (
  <>
<Header />

<Routes>
  <Route path='/' element = {<Home />}/>
  <Route path='/catalog' element={<Catalog />} />
  <Route path='/contacts' element={<Contacts />} />
  <Route path='/login' element={<Login />} />
  <Route path='/register' element={<Register />} />

</Routes>

  </>
  );
}

export default App;
