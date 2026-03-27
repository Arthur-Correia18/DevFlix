import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import PageNotFound from "./pages/PageNotFound";

function AppRoutes() {
    return (
        <BrowserRouter basename="/DevFlix">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/watch" element={<Watch />} />
                <Route path="/*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;  