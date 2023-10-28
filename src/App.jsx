
import './App.css'
import Navegador from './Navbar'
import { Route, Routes } from "react-router-dom";
import HomePage from './HomePage'
import Contacto from './Contacto'
import NotFound from './NotFound';

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
        <Route
          path="/"
          element={<NotFound />}
        />
      </Routes>
    </div>
  );
};
export default App;
