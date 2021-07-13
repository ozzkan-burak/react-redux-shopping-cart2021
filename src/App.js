import './App.css';
import Filter from './components/Filter';
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter />
            <ProductList />
          </div>
          <div className="sidebar">Cart</div>
        </div>
      </main>
      <footer>
        All right is reserved
      </footer>
    </div>
  );
}

export default App;
