import InventoryContainer from './components/HomePage';
import inventory from './data/inventory.json';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div id="app_root">
            <header>
                <h1>Video Store</h1>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>© 2023 Video Store</footer>
        </div>
    );
}

export default App;
