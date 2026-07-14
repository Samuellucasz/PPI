import { useState } from 'react'

function Interruptor() {
  const [ligado, setLigado] = useState(false)

  function alternar() {
    setLigado(!ligado)
  }

  return (
    <div>
      <p>{ligado ? 'Ligado' : 'Desligado'}</p>
      <button onClick={alternar}>Alternar</button>
    </div>
  )
}

export default Interruptor