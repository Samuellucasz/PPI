function CardAluno(props) {
    return (
        <div style={{
            backgroundColor: props.cor,
            padding: '16px',
            borderRadius: '8px',
            margin: '8px'
        }}>
            <h2>{props.nome}</h2>
            <p>Curso: {props.curso}</p>
            <p>Turma: {props.turma}</p>
            <p>Idade: {props.idade}</p>
        </div>
    );
}

export default CardAluno;