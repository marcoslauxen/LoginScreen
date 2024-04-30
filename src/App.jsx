import { ToastContainer } from "react-toastify";
import { useState } from "react";
import AppRoutes from "./routes";

const App = () => {
  const [stored, setStored] = useState([]);

  return (
    <div>
      <ToastContainer />
      <AppRoutes stored={stored} setStored={setStored} />
    </div>
  );
};

export default App;
