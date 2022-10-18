import "../styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

const Navbar = () => {

    const { shoppCart } = useContext(ShoppingCartContext);

    const calculatePrice = (listProducts) => {
        let addittion = 0;

        for(const pizza of listProducts){
            const finalPrice = pizza.price * pizza.cantidad
            addittion += finalPrice;
        }
        return addittion;
    }

    useEffect(() => {

    }, [shoppCart])


    const navigate = useNavigate();

    const goToHome = () => {
        navigate(`/Home`)
    }

    const goToCart = () => {
        navigate(`/carrito`)
    }

    return (
        <nav className="navbar bg-info">
            <div className="container-fluid">
                <button className="bg-info" onClick={goToHome}> 🏠 </button>
                <h3 className="name"> 🍕 Pizzería Mamma Mía!</h3>
                <br />
                <h3> <button className="bg-info" onClick={goToCart}>🛒</button> $ {calculatePrice(shoppCart)}</h3>
                <br />
            </div>
        </nav>
    );
}

export default Navbar;