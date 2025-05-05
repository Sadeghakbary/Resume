import { Routes , Route } from "react-router-dom";
import Navbars from "./componants/navbar"
import Information from "./pages/home";

const AppRoutes = () => (

    <Routes>
    <Route
      path="/"
      element={
        <>
          <Navbars />
          <Information />
        </>
      }
    />
  </Routes>
  
)

export default AppRoutes;