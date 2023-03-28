import InventoryContainer from './components/HomePage';
import inventory from './data/inventory.json'
import './App.css';

function App() {
    return (
        <div id="app_root">
            <header>
                <h1>Video Store</h1>
            </header>
            <main>
                <InventoryContainer inventory={inventory} />
            </main>
            <footer>© 2023 Video Store</footer>
        </div>
    );
}

export default App;
