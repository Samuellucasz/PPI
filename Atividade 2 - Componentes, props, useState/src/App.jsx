import Saudacao from './componentes/Saudacao'
import Perfil from './componentes/Perfil'
import Interruptor from './componentes/Interruptor'
import { useState } from 'react'

function App() {
  const [contador, setContador] = useState(0)

  function Contar() {
    setContador(contador + 1)
  }

  return (
    <div>
      <Saudacao />
      <Perfil nome="Analice" />
      <Perfil nome="Carol" />
      <Interruptor />

      <button onClick={Contar}> O contador é {contador} </button>
    </div>
  )
}

export default App