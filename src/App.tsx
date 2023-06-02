import "./app.sass";
import Header from "./components/layout/header/Header";
import HomeScreen from "./screens/Home";
import { Routes, Route } from "react-router-dom";
import CartScreen from "./screens/Cart";

function App() {
    return (
        <>
            <div className='header-container'>
                <Header />
            </div>
            <div className='main-container'>
            <Routes>
                <Route path='/' element={<HomeScreen />} />
                <Route path='/cart' element={<CartScreen />} />
            </Routes>
            </div>
        </>
    );
}

export default App;
