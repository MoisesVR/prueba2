import { createContext, useState, useEffect } from "react";

export const AppPizzaContext = createContext({});

export const AppPizzaContextProvider = ({ children }) => {

    const [pizza, setPizza] = useState([]);

    useEffect(() => {
        const getApi = async () => {
            try {
                const resp = await fetch("/pizzas.json");
                const data = await resp.json();
                setPizza(data)
            } catch (error) {
                return (
                    <div>
                        <h1>Error al cargar las pizzas</h1>
                    </div>
                )
            }
        }
        getApi();
    }, [])

    return (
        <AppPizzaContext.Provider value={{ pizza, setPizza }}>
            {children}
        </AppPizzaContext.Provider>
    );
}