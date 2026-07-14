import CardAluno from "./componentes/CardAluno";

function App() {
    return (
        <div>
            <h1>Alunos do Projeto</h1>
            <CardAluno nome="Ana Silva" curso="Apicultura" turma="1º - Vesp." idade="15" cor="#C8E6C9" />
            <CardAluno nome="João Souza" curso="Alimentos" turma="2º - Mat." idade="17" cor="#BBDEFB" />
            <CardAluno nome="Lucas Gabriel" curso="Informática" turma="3º - Vesp." idade="18" cor="#bf1d1d" />
            <CardAluno nome="Maria Costa" curso="Apicultura" turma="1º - Mat." idade="16" cor="#FFE0B2" />
            <CardAluno nome="Pedro Lima" curso="Alimentos" turma="2º - Mat." idade="16" cor="#F8BBD0" />
            <CardAluno nome="Francisco Luan" curso="Informática" turma="3º - Vesp." idade="19" cor="#430557" />
        </div>
    );
}

export default App;