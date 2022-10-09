import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Rank from "../pages/Rank"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/rank" element={<Rank />} />
        </Routes>
    )
}

export default Router