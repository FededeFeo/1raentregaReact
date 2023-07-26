import './NavBar.css'
import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
return(
    <nav className="NavBar">
        <Link to='/'>
        <h3 className='tituloIndex'> Tienda Deportiva </h3>
        </Link>
        <div className='Categories'>
            <NavLink to={`/category/Camisetas`} className={({ isActive})=> isActive ? 'ActiveOption' : 'Option'}>Camisetas</NavLink>
            <NavLink to={`/category/Buzos`} className={({ isActive})=> isActive ? 'ActiveOption' : 'Option'}>Buzos</NavLink>
            <NavLink to={`/category/Camperas`} className={({ isActive})=> isActive ? 'ActiveOption' : 'Option'}>Camperas</NavLink>
        </div>
        <CartWidget />
    </nav>
)
}
export default NavBar