import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componente/navbar/NavBar';
import ItemListContainer from './componente/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componente/ItemDetailContainer/ItemDetailContainer';
import Cart from "./componente/Cart/Cart"
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <CartProvider>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
        </CartProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
