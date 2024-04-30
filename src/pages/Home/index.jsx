import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  useEffect(() => {
    // Chama a função toast.success quando o componente é montado
    toast.success("Login bem-sucedido!");
  }, []); // O array de dependências vazio assegura que a função seja chamada apenas uma vez, quando o componente é montado

  return (
    <div>
      <ToastContainer />
      <h1 className="title-home">Home</h1>
    </div>
  );
};

export default Home;
