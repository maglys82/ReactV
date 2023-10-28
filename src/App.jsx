
import './App.css'
import Navegador from './Navbar'
import { Route, Routes } from "react-router-dom";
import HomePage from './HomePage'
import Contacto from './Contacto'

function App(){
  return (
    <div>
      <Navegador />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/Contacto"
          element={< Contacto/>}
        />
       
      </Routes>
    </div>
  );
};
export default App;
