import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import InsertComponent from './components/authComponent/InsertComponent';
import Contact from './Contact';
import Products from './Products';
import SingleComponent from './components/authComponent/SingleComponent'
import LoginComponent from './components/authComponent/LoginComponent'
import DeleteComponent from './components/authComponent/DeleteComponent'
import EditComponent from './components/authComponent/EditComponent'


const App = ()=> {
  return (
    <Routes>
      <Route path="/" exect={true} element={<Home/>} />
      <Route path="/insert" element={<InsertComponent/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/product/:slug" element={<SingleComponent/>} />
      <Route path="/delete" element={<DeleteComponent/>} />
      <Route path="/product/edit/:slug" element={<EditComponent/>} />
      <Route path="/login" element={<LoginComponent/>} />
    </Routes>   
  )
}

export default App;
