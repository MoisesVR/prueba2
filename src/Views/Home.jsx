import { useContext, useEffect } from "react";
import { AppPizzaContext } from "../context/AppPizzaContext";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



const Home = () => {

    const notify = () => toast("Agregada correctamente!");

    const { pizza } = useContext(AppPizzaContext);

    const { shoppCart, setShoppCart } = useContext(ShoppingCartContext);

    const navigate = useNavigate();

    const goToPizza = (id) => {
        navigate(`/pizza/${id}`);
    }

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
        <div >
            <div className="containerImg">
                <h1 className="titleHome"> ¡Pizzería Mamma Mia! </h1>
                <h3 className="subTitle"> ¡Tenemos las mejores pizzas que podrás encontrar!</h3>
            </div>
            {pizza.length !== 0 ?
                <div className="bgCont">
                    <div className="cont">
                    {pizza.map((pizza) => {
                        return (
                            <div key={pizza.id} className="cont">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img className="card-img-top" src={pizza.img} alt="" />
                                    <div className="card-body">
                                        <h3 className="card-title">{pizza.name}</h3>
                                        <h4 className="card-text">Ingredientes:</h4>
                                        <p className="card-text"> 🍕{pizza.ingredients[0]}</p>
                                        <p className="card-text"> 🍕{pizza.ingredients[1]}</p>
                                        <p className="card-text"> 🍕{pizza.ingredients[2]}</p>
                                        <p className="card-text"> 🍕{pizza.ingredients[3]}</p>
                                        <h1> ${pizza.price}</h1>
                                        <button className="btn btn-primary" onClick={() => { goToPizza(pizza.id) }} > Ver Más 👀</button>
                                        <button className="btn btn-danger" onClick={() => { addToCart(pizza)}}> Añadir 🛒</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                </div>
                : null
            }
        </div>
    );
}
export default Home;