import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { useCounter } from '../../hooks/useCounter'
import SectionTitle from '../../components/layout/SectionTitle'
import { useFetch } from '../../hooks/useFetch'

const UseRef = (props) => {

    const [count, inc, dec] = useCounter()
    const url = 'http://files.cod3r.com.br/curso-react/estados.json'
    const state = useFetch(url)

    function showStates(states) {
        return states.map(state => {
            return (
                <li key={state.id}>{state.nome} - {state.sigla}</li>
            )
        })
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={inc}>+</button>
                    <button className="btn" onClick={dec}>-</button>
                </div>
            </div>
            <SectionTitle title="Exercício #02" />
            <div className="center">
                <ul>
                    {showStates(state.data)}
                </ul>
            </div>
        </div>
    )
}

export default UseRef
