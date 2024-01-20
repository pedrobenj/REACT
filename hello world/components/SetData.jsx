import React from 'react'
import { useState} from 'react'

const SetData = () => {
  
    const [numero, setNumber] = useState(0)
    
    function setDataAumentar() {
        setNumber(numero + 1)
    }

    function setDataDiminuir() {
        if (numero == 0) {
            return numero;
        }else{
            setNumber(numero - 1)
        }
    }
    
  
    return (
    <div>Aumentar
        <h1>{numero}</h1>
        <button onClick={setDataDiminuir}>-1</button>
        <input type="number" value={numero} onChange={(e) => setNumber(Math.floor(e.target.value))} />
        <button onClick={setDataAumentar}>+1</button>
    </div>
  )
}

export default SetData