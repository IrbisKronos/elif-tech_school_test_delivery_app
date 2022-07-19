import './App.css';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import NavBar from "./components/NavBar";


function App() {
    return (
        <BrowserRouter>
            <div className="vh-100 d-flex flex-column">
                <NavBar />
                <div className="p-3" style={{minHeight: 0}}>
                    <Routes>
                        <Route path="/" element ={<Shop />} />
                        <Route path="/cart/" element={<Cart />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
