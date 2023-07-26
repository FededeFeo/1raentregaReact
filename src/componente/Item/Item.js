import './Item.css'
import { Link } from 'react-router-dom';



const Item = ({id, name, img, price, stock}) => {
    return (
        <div className= "productos">
        <article className="CardItem">
            
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>            
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
                <div className='ItemFooter'>
                <Link to={`/item/${id}`}className='OptionDetalle'>Ver detalle</Link>
            </div>
            </section>
            
        </article>
        </div>
    )
}

export default Item