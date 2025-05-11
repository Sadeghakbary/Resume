import { Routes, Route } from "react-router-dom";
import Navbars from "./componants/navbar"
import Skils from "./componants/skils";
import About from "./componants/about";



export default function AppRoutes() {

    <Routes>
        <Route
            path="/"
            element={
                <>
                    <Navbars />
                    <About />
                    <Skils />
                </>
            }
        />
    </Routes>

}

