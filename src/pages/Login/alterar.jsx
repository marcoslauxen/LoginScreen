// Importando hooks e componentes necessários para o componente de alteração de senha
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

// Componente principal para a alteração de senha
const Alterar = ({ stored, setStored }) => {
  // Estado para armazenar o email inserido pelo usuário
  const [email, setEmail] = useState("");
  // Estado para armazenar a nova senha inserida pelo usuário
  const [newPassword, setNewPassword] = useState("");

  // Função para atualizar o estado do email com o valor inserido pelo usuário
  const handleValueEmail = (event) => {
    setEmail(event.target.value);
  };

  // Função para atualizar o estado da nova senha com o valor inserido pelo usuário
  const handleValueNewPassword = (event) => {
    setNewPassword(event.target.value);
  };

  // Função para lidar com o processo de alteração de senha
  const handleAlterar = () => {
    // Encontra o índice do usuário no array 'stored' com base no email fornecido
    const foundUserIndex = stored.findIndex((item) => item.email === email);
    // Verifica se o usuário foi encontrado
    if (foundUserIndex !== -1) {
      // Cria uma cópia do array 'stored'
      const updatedStored = [...stored];
      // Atualiza a senha do usuário encontrado com a nova senha fornecida
      updatedStored[foundUserIndex].password = newPassword;
      // Atualiza o estado 'stored' com o array atualizado
      setStored(updatedStored);
      // Limpa os campos de email e nova senha
      setEmail("");
      setNewPassword("");
      // Exibe uma mensagem de sucesso
      toast.success("Senha alterada com sucesso!");
    } else {
      // Exibe uma mensagem de erro se o usuário não for encontrado
      toast.error("Usuário não encontrado!");
      // Limpa os campos de email e nova senha
      setEmail("");
      setNewPassword("");
    }
  };

  // Renderiza o componente de alteração de senha
  return (
    <div className="box">
      <ToastContainer />
      <h1>Recuperação de Senha</h1>
      <form>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={handleValueEmail}
        />
        <label htmlFor="newPassword">Nova Senha</label>
        <input
          type="text"
          name="newPassword"
          id="newPassword"
          placeholder="Digite sua nova senha"
          value={newPassword}
          onChange={handleValueNewPassword}
        />
      </form>
      <div className="btn-alterar">
        <button onClick={handleAlterar}>ALTERAR SENHA</button>
      </div>
      <p>Lembrou sua senha?</p>
      <Link to="/">Faça login</Link>
    </div>
  );
};

// Define os PropTypes para o componente Alterar
Alterar.propTypes = {
  stored: PropTypes.arrayOf(
    PropTypes.shape({
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    })
  ).isRequired,
  setStored: PropTypes.func.isRequired,
};

export default Alterar;
