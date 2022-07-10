import './App.css';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";


function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="container p-3">
                <Routes>
                    <Route path="/" element ={<Store />} />
                    <Route path="/cart/" element={<Cart />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
