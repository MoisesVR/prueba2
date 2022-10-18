import { useContext, useEffect } from "react";
import { AppPizzaContext } from "../context/AppPizzaContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { toast } from "react-toastify";

const Pizza = () => {

    const { pizza } = useContext(AppPizzaContext);

    const notify = () => toast("Agregada correctamente!");

    const { shoppCart, setShoppCart } = useContext(ShoppingCartContext);

    const { id } = useParams();

    const addToCart = (pizza) => {

        notify();

        const findPizza = shoppCart.filter((product) => product.id === pizza.id);
        if (findPizza.length > 0) {
            findPizza[0].cantidad += 1;
            setShoppCart([...shoppCart])

        } else {
            setShoppCart([...shoppCart, { ...pizza, cantidad: 1 }]);
        }
    }

    useEffect(() => {
    }, [shoppCart])

    return (
        <div className="bgPizza">
            {pizza.map((pizza) => {
                if (pizza.id === id) {
                    return (
                        <div key={pizza.id} className="containerPizza">
                            <div className="containerPizza">
                                <img src={pizza.img} className="imgPizza" alt="" />
                                <div className="containerTextPizza">
                                    <h1 className="">{pizza.name}</h1>
                                    <p>{pizza.desc}</p>
                                    <h3>Ingredientes: </h3>
                                    <p> 🍕{pizza.ingredients[0]}</p>
                                    <p> 🍕{pizza.ingredients[1]}</p>
                                    <p> 🍕{pizza.ingredients[2]}</p>
                                    <p> 🍕{pizza.ingredients[3]}</p>
                                    <h3>
                                        ${pizza.price}
                                        <button className="btn btn-light" onClick={() => { addToCart(pizza) }}> Añadir 🛒</button>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    );
}

export default Pizza;