import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import InsertComponent from './components/authComponent/InsertComponent';
import Contact from './Contact';
import Service from './Service';
import LoginComponent from './components/authComponent/LoginComponent'


function App() {
  return (
    <Routes>
      <Route path="/" exect={true} element={<Home/>} />
      <Route path="/insert" element={<InsertComponent/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/service" element={<Service/>} />
      <Route path="/login" element={<LoginComponent/>} />
    </Routes>   
  )
}

export default App;
