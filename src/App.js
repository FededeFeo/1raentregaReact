import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componente/navbar/NavBar';
import ItemListContainer from './componente/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componente/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
