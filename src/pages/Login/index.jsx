// Importando hooks e componentes necessários para o componente de login
import { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

// Componente de Login que recebe uma lista de usuários armazenados como propriedade
const Index = ({ stored }) => {
  // Estado para armazenar o e-mail e a senha inseridos pelo usuário
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Função para lidar com a mudança no campo de e-mail
  // Atualiza o estado do e-mail com o valor inserido pelo usuário
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  // Função para lidar com a mudança no campo de senha
  // Atualiza o estado da senha com o valor inserido pelo usuário
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  // Função para lidar com o evento de login
  // Verifica se o usuário e a senha correspondem a um usuário armazenado
  // Mostra uma mensagem de sucesso ou erro com base na validação
  const handleLogin = () => {
    const user = stored.find(
      (user) => user.email === email.trim() && user.password === password.trim()
    );
    if (user) {
      navigate('/Home');
      setEmail("");
      setPassword("");
    } else {
      const userByEmail = stored.find((user) => user.email === email.trim());
      if (userByEmail) {
        toast.error("Senha incorreta!");
      } else {
        toast.error("Usuário não cadastrado!");
      }
      setEmail("");
      setPassword("");
    }
  };

  // Renderização do componente de login
  return (
    <div className="box">
      <ToastContainer />
      <h1>Login</h1>
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
      <div className="link">
        <Link to="/Alterar">Esqueceu a senha?</Link>
      </div>
      <div className="btn">
        <button onClick={handleLogin}>LOGIN</button>
      </div>
      <p>Ou entre pelas redes sociais</p>
      <div className="redes-sociais">
        <a href="https://github.com">
          <FontAwesomeIcon icon={faGithub} className="icone" />
        </a>
        <a href="https://linkedin.com">
          <FontAwesomeIcon icon={faLinkedin} className="icone" />
        </a>
      </div>
      <p>Ainda não tem uma conta?</p>
      <Link to="/Cadastrar">Cadastre-se</Link>
    </div>
  );
};

// Definindo os PropTypes para o componente de Login
Index.propTypes = {
  stored: PropTypes.arrayOf(
    PropTypes.shape({
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// Exportando o componente de Login
export default Index;
