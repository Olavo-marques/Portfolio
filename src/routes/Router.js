import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage"
import MyExperiences from "../pages/expriences/MyExperincesPage";
import MyHistory from "../pages/history/MyHistoryPage";

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