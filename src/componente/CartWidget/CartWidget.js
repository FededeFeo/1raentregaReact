import './CartWidget.css'; // Agrega el archivo CSS para CartWidget
import carritoVacio from './assets/carritoVacio.png';

const CartWidget = () => {
  return (
    <div className="CartWidgetContainer">
      <img src={carritoVacio} alt="cart-widget" className="CartWidgetIcon" />
      <span>0</span>
    </div>
  );
};

export default CartWidget;