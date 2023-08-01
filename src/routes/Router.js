import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage"
import MyExperiences from "../pages/MyExperinces";
import MyHistory from "../pages/MyHistory";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="minhas-experiencias" element={<MyExperiences />} />
                <Route path="minha-historia" element={<MyHistory />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router