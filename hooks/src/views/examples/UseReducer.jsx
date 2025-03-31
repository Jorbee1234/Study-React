import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { initialState, reducer } from '../../store/config'




const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user ? <span className="text">Usuário: {state.user}</span> : <span className="text">Nenhum usuário logado</span>}
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => dispatch({type: 'login', payload: 'Jorbe Junior'})}>Login</button>
                    <button className="btn" onClick={() => dispatch({type: 'number_add2'})}>+2</button>
                    <button className="btn" onClick={() => dispatch({type: 'number_multiply7'})}>x7</button>
                    <button className="btn" onClick={() => dispatch({type: 'number_divide25'})}>/25</button>    
                    <button className="btn" onClick={() => dispatch({type: 'numberInt'})}>Int</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
