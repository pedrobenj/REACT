import React from 'react'

const Lista = () => {

    const meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ]

    function linha() {
        return meses.map ((item, i) => (
            <option value="" key={i}>{item}</option>
        ))
    }

  return (
    <div>
        <ul>
            <select name="Mês" id="">
                {linha()}
            </select>
        </ul>
    </div>
  )
}

export default Lista