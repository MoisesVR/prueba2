import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AppPizzaContextProvider } from "./context/AppPizzaContext";
import { ShoppingCartContextProvider } from "./context/ShoppingCartContext";

import Home from "./Views/Home";
import Pizza from "./Views/Pizza";
import Carrito from "./Views/Carrito";



function App() {


  return (
    <AppPizzaContextProvider>
      <ShoppingCartContextProvider>
        <BrowserRouter>

          <ToastContainer />
          <Navbar />

        <Routes>
          <Route index element={< Home />}/>
          <Route path="/home" element={< Home />} />
          <Route path="/pizza/:id" element={< Pizza />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </BrowserRouter>
    </ShoppingCartContextProvider>
    </AppPizzaContextProvider >
  );
}

export default App;
