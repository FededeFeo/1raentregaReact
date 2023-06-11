import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
return(
    <nav>
        <h3> Ecommerce</h3>
        <div>
            <button>Camisetas</button>
            <button>Buzos</button>
            <button>Camperas</button>
        </div>
        <CartWidget />
    </nav>
)
}
export default NavBar