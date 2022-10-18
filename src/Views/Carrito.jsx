import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

const Carrito = () => {

    const { shoppCart, setShoppCart } = useContext(ShoppingCartContext);

    const calculatePrice = (listProducts) => {
        let addittion = 0;

        for (const pizza of listProducts) {
            const finalPrice = pizza.price * pizza.cantidad
            addittion += finalPrice;
        }
        return addittion;
    }

    const addToCart = (pizza) => {
        const findPizza = shoppCart.filter((product) => product.id === pizza.id)
        findPizza[0].cantidad += 1;
        setShoppCart([...shoppCart])
    }

    const restToCart = (pizza) => {
        const findPizza = shoppCart.filter((product) => product.id === pizza.id)
        if (findPizza[0].cantidad <= 1) {
            const filterLibraries = shoppCart.filter((item) => item !== findPizza[0])
            setShoppCart([...filterLibraries])
        } else {
            findPizza[0].cantidad -= 1;
            setShoppCart([...shoppCart])
        }

    }

    useEffect(() => {
    }, [shoppCart])

    return (
        <div className="containerCarrito">
            <div>
                <h1>Detalles del pedido: </h1>
                {shoppCart.length !== 0 ?
                    shoppCart.map((product) => {
                        return (
                            <div key={product.id} className="containerCarritoText">
                                <img src={product.img} className="imgCarrito" alt="" />
                                <h3> {product.name} </h3>
                                <h3> {product.price * product.cantidad}</h3>
                                <button className="btn btn-danger" onClick={() => { restToCart(product) }}> - </button>
                                <h3> {product.cantidad} </h3>
                                <button className="btn btn-primary" onClick={() => { addToCart(product) }}> + </button>
                            </div>

                        )
                    })
                    : null}
                <div>
                    <h1> Total: $ {calculatePrice(shoppCart)} </h1>
                </div>
                <div>
                    <button className="btn btn-success"> Ir a Pagar </button>
                </div>
            </div>
        </div>
    );
}

export default Carrito;