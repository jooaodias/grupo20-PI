import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";

export const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}