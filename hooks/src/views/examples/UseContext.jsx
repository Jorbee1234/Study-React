import React, { useContext, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import DataContext from '../../data/DataContext'
import SectionTitle from '../../components/layout/SectionTitle'
import { AppContext } from '../../data/Store'

const UseContext = (props) => {

    const context = useContext(DataContext)

    function setNum(n) {
        context.setState({
            ...context.state,
            number: n
        })
    }

    const {number,text, setNumber, setText} = useContext(AppContext)

    useEffect(() => {
        if(number > 1240){
            setText('Eita!!!')
        }
    }, [number])

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <span className="text">{context.state.text}</span>
                <span className="text">{context.state.number}</span>

                <div>
                    <button className="btn" onClick={() => setNum(context.state.number + 1)}>+</button>
                    <button className="btn" onClick={() => setNum(context.state.number - 1)}>-</button>
                </div>
            </div>

            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>
                <div>
                    <button className="btn" onClick={() => setNumber(number + 1)}>+</button>
                    <button className="btn" onClick={() => setNumber(number - 1)}>-</button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
