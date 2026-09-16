import { useState } from 'react'
import CampoTexto from './CampoTexto'
import Livro from './Livro'
import './FormularioLivro.css'

function FormularioLivro() {
	const [titulo, setTitulo] = useState('')
	const [autor, setAutor] = useState('')
	const [anoPublicacao, setAnoPublicacao] = useState('')
	const [genero, setGenero] = useState('')
	const [livros, setLivros] = useState([])

	function cadastrarLivro(evento) {
		evento.preventDefault()

		const novoLivro = {
			id: Date.now(),
			titulo,
			autor,
			anoPublicacao,
			genero,
		}

		setLivros((livrosAtuais) => [...livrosAtuais, novoLivro])
		setTitulo('')
		setAutor('')
		setAnoPublicacao('')
		setGenero('')
	}

	return (
		<section className="formulario-livro">
			<h1>Cadastro de Livro</h1>

			<form onSubmit={cadastrarLivro}>
				<CampoTexto
					label="Título"
					name="titulo"
					type="text"
					value={titulo}
					onChange={(evento) => setTitulo(evento.target.value)}
					placeholder="O Senhor dos Anéis"
				/>
				<CampoTexto
					label="Autor"
					name="autor"
					type="text"
					value={autor}
					onChange={(evento) => setAutor(evento.target.value)}
					placeholder="J.R.R. Tolkien"
				/>
				<CampoTexto
					label="Ano de publicação"
					name="anoPublicacao"
					type="text"
					value={anoPublicacao}
					onChange={(evento) => setAnoPublicacao(evento.target.value)}
					placeholder="1954"
				/>
				<CampoTexto
					label="Gênero"
					name="genero"
					type="text"
					value={genero}
					onChange={(evento) => setGenero(evento.target.value)}
					placeholder="Fantasia"
				/>
				<button type="submit">Cadastrar</button>
			</form>

			<div className="lista-livros">
				<h2>Livros cadastrados</h2>
				{livros.length === 0 && <p>Nenhum livro cadastrado ainda.</p>}

				<ul>
					{livros.map((livro) => (
						<Livro key={livro.id} livro={livro} />
					))}
				</ul>
			</div>
		</section>
	)
}

export default FormularioLivro
