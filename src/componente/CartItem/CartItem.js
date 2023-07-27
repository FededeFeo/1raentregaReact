import { useContext } from "react";
import { CartContext } from "../../context/CartContext";



const CartItem = ({ id, quantity, name, price}) => {
    const { removeProduct } = useContext(CartContext)


    return (
        <div className="cart-item">
            <h4>{name}</h4>
            <p>Precio: ${price}</p>
            <p>Cantidad: {quantity}</p>
            <button className="Button" onClick={() => removeProduct(id)}>Eliminar</button>
        </div>
    );
};

export default CartItem;