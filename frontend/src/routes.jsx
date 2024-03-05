import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { About } from "./pages/About/About";
import NewLocal from "./pages/NewLocal/NewLocal";
import { LocalPage } from "./pages/LocalPage/LocalPage";
import ContactPage from "./pages/Contato/Contato";

export const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<App />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<App />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/new-local" element={<NewLocal />} />
                <Route path="/local/:id" element={<LocalPage />} />
            </Routes>
        </BrowserRouter>
    )
}