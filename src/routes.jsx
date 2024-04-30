import PropTypes from "prop-types";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Login";
import Cadastrar from "./pages/Login/cadastrar";
import Home from "./pages/Home/index";
import Alterar from "./pages/Login/alterar";

const AppRoutes = ({ stored, setStored }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Index stored={stored} setStored={setStored} />}
        />
        <Route
          path="/cadastrar"
          element={<Cadastrar stored={stored} setStored={setStored} />}
        />
        <Route
          path="/alterar"
          element={<Alterar stored={stored} setStored={setStored} />}
        />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

AppRoutes.propTypes = {
  stored: PropTypes.any.isRequired,
  setStored: PropTypes.func.isRequired,
};

export default AppRoutes;
