import React, { useState } from "react";
import IndiretaFilho from './IndiretaFilho'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{
    const [nome,setNome] = useState('?')
    const [idade,setIdade] = useState(0)
    const [nerd,setNerd] = useState(false)
    
    function fornecerInformações(nome,idade,nerd){
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }
    return (
        <div>
            <div>
                <span> {nome} </span>
                <span> {idade} </span>
                <span> {nerd? 'Verdadeiro':'Falso'} </span>
            </div>
            <IndiretaFilho qndClicar={fornecerInformações}></IndiretaFilho>
        </div>
    )
}