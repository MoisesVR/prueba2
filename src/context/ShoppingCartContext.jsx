import { createContext, useState} from "react";

export const ShoppingCartContext = createContext({});

export const ShoppingCartContextProvider = ({ children }) => {

    const [shoppCart, setShoppCart] = useState([]);

    return(
        <ShoppingCartContext.Provider value={{ shoppCart, setShoppCart}}>
            { children }
        </ShoppingCartContext.Provider>
    )
}