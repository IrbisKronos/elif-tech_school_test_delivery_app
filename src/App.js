import './App.css';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import NavBar from "./components/NavBar";


function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <div className="container p-3">
                <Routes>
                    <Route path="/" element ={<Shop />} />
                    <Route path="/cart/" element={<Cart />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
