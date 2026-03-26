import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";

function AppRoutes() {
    return (
        <BrowserRouter basename="/DevFlix">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/watch" element={<Watch />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;  