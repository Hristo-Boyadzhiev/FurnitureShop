import { Routes, Route } from 'react-router-dom'

import AuthProvider from './contexts/AuthContext';
import FurnitureProvider from './contexts/FurnitureContext';
import PurchaseProvider from './contexts/PurchaseContext';

import AuthGuards from './components/Guards/AuthGuards';

import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import Contacts from './components/Contacts/Contacts';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Create from './components/Create/Create';
import Details from './components/Details/Details';
import Logout from './components/Logout/Logout';
import Edit from './components/Edit/Edit';
import Basket from './components/Basket/Basket';
import ComplatedOrder from './components/ComplatedOrder/ComplatedOrder';
import NotFound from './components/NotFound/NotFound';
import Purchases from './components/Purchases/Purchases';
import AdminMessages from './components/AdminMessages/AdminMessages';

function App() {

  return (
    <AuthProvider>
      <FurnitureProvider>
        <PurchaseProvider>
        <Header />

        <Routes> 
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/catalog/:furnitureId/details/' element={<Details />} />

          <Route element={<AuthGuards />}>
          <Route path='/contacts' element={<Contacts />} />
            <Route path='/create' element={<Create />} />
            <Route path='/catalog/:furnitureId/details/edit' element={<Edit />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/basket' element={<Basket />} />
            <Route path='/completed-order' element={<ComplatedOrder />} />
            <Route path='/purchases' element={<Purchases />} />
            <Route path='/messages' element={<AdminMessages />} />
            <Route path='*' element={<NotFound />} />
          </Route> 
        </Routes>
        </PurchaseProvider>
      </FurnitureProvider>
    </AuthProvider>
  );
}

export default App;
