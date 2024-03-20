import { Routes, Route } from "react-router-dom";
import Home from "../Components/Pages/Client/Home";
import Orders from "../Components/Pages/Client/Order/Orders";
import Cart from "../Components/Pages/Client/Cart/Cart";
import Checkout from "../Components/Pages/Client/Checkout/Checkout";
import Configuration from "../Components/Pages/Client/Configuration/Configuration";
import About from "../Components/Pages/Sobre";
import Profile from "../Components/Pages/Client/Profile/Profile";

export const ClientRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="/pedidos" element={<Orders />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/config" element={<Configuration />} />
        </Routes>
    );
};