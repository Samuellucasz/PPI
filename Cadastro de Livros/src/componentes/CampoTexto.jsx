import './CampoTexto.css'

function CampoTexto(props) {
	return (
		<div className="campo-texto">
			<label htmlFor={props.name}>{props.label}</label>
			<input
				id={props.name}
				name={props.name}
				type={props.type}
				value={props.value}
				onChange={props.onChange}
				placeholder={props.placeholder}
			/>
		</div>
	)
}

export default CampoTexto
