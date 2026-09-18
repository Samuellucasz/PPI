import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import BarraNavegacao from "./components/BarraNavegacao";
import MensagemErro from "./components/MensagemErro";
import PaginaInicial from "./pages/PaginaInicial";
import PaginaListagemAlunos from "./pages/PaginaListagemAlunos";
import PaginaCadastroAlunos from "./pages/PaginaCadastroAlunos";
import PaginaListagemProfessores from "./pages/PaginaListagemProfessores";
import PaginaCadastroProfessores from "./pages/PaginaCadastroProfessores";
import { listarAlunos, criarAluno, excluirAluno } from "./services/alunoService";
import { listarProfessores, criarProfessor, excluirProfessor } from "./services/professorService";

const mensagemConexao = "Não foi possível conectar à API. Você esqueceu de iniciar o json-server? Rode: npx json-server --watch db.json --port 3000";

function App() {
  const [alunos, setAlunos] = useState([]);
  const [professores, setProfessores] = useState([]);
  const [erro, setErro] = useState("");

  useEffect(function () {
    carregarAlunos();
    carregarProfessores();
  }, []);

  async function carregarAlunos() {
    try {
      const dados = await listarAlunos();
      setAlunos(dados);
      setErro("");
    } catch {
      setErro(mensagemConexao);
    }
  }

  async function aoSalvar(aluno) {
    try {
      await criarAluno(aluno);
      carregarAlunos();
    } catch {
      setErro(mensagemConexao);
    }
  }

  async function aoExcluir(id) {
    try {
      await excluirAluno(id);
      carregarAlunos();
    } catch {
      setErro(mensagemConexao);
    }
  }

  async function carregarProfessores() {
    try {
      const dados = await listarProfessores();
      setProfessores(dados);
      setErro("");
    } catch {
      setErro(mensagemConexao);
    }
  }

  async function aoSalvarProfessor(professor) {
    try {
      await criarProfessor(professor);
      carregarProfessores();
    } catch {
      setErro(mensagemConexao);
    }
  }

  async function aoExcluirProfessor(id) {
    try {
      await excluirProfessor(id);
      carregarProfessores();
    } catch {
      setErro(mensagemConexao);
    }
  }

  return (
    <div className="App">
      <header className="cabecalho-ifrn">
        <img
          src="/IFRN.png"
          alt="Logo IFRN"
          className="logo-ifrn"
          onError={function (e) { e.target.style.display = "none"; }}
        />
        <h1>Sistema Escolar</h1>
      </header>
      <BarraNavegacao />
      <MensagemErro mensagem={erro} />
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/alunos" element={<PaginaListagemAlunos alunos={alunos} aoExcluir={aoExcluir} />} />
        <Route path="/cadastro" element={<PaginaCadastroAlunos aoSalvar={aoSalvar} />} />
        <Route path="/professores" element={<PaginaListagemProfessores professores={professores} aoExcluir={aoExcluirProfessor} />} />
        <Route path="/cadastro-professores" element={<PaginaCadastroProfessores aoSalvar={aoSalvarProfessor} />} />
      </Routes>
    </div>
  );
}

export default App;
