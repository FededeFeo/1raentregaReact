import './App.css';
import NavBar from './componente/navbar/NavBar';
import ItemListContainer from './componente/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
   <NavBar />
   <ItemListContainer greeting={'Bienvenidos'} />
   </div>
  );
}

export default App;
