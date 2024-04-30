// Importando hooks e componentes necessários para o componente de login
import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Componente principal para o cadastro de usuários
const Cadastrar = ({ stored, setStored }) => {
  // Estado para armazenar o email do usuário
  const [email, setEmail] = useState("");
  // Estado para armazenar a senha do usuário
  const [password, setPassword] = useState("");

  // Função para atualizar o estado do email com o valor inserido pelo usuário
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  // Função para atualizar o estado da senha com o valor inserido pelo usuário
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  // Função para lidar com o processo de cadastro
  const handleCadastrar = () => {
    // Verifica se os campos de email e senha estão preenchidos
    if (email === "" || password === "") {
      toast.error("Preencha todos os campos!");
    } else {
      // Atualiza o estado 'stored' com o novo usuário
      setStored([...stored, { email, password }]);
      // Limpa os campos de email e senha
      setEmail("");
      setPassword("");
      // Exibe uma mensagem de sucesso
      toast.success("Registrado com sucesso!");
    }
  };

  // Renderiza o componente de cadastro
  return (
    <div className="box">
      <ToastContainer />
      <h1>Cadastre-se</h1>
      <form>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu e-mail"
          autoComplete="off"
          value={email}
          onChange={handleEmail}
        />
        <label htmlFor="password">Senha</label>
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Digite sua senha"
          autoComplete="off"
          value={password}
          onChange={handlePassword}
        />
      </form>
      <div className="btn-cadastrar">
        <button onClick={handleCadastrar}>CADASTRAR</button>
      </div>
      <p>Já tem uma conta?</p>
      <Link to="/">Faça login</Link>
    </div>
  );
};

// Define os PropTypes para o componente Cadastrar
Cadastrar.propTypes = {
  stored: PropTypes.arrayOf(
    PropTypes.shape({
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    })
  ).isRequired,
  setStored: PropTypes.func.isRequired,
};

export default Cadastrar;
