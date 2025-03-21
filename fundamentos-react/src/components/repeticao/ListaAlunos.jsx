import React from "react";
import alunos from '../../data/alunos'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const alunosLi= alunos.map((a) =>{
        return (
            <li key={a.id}>
                {a.id}) {a.nome} : {a.nota}
            </li>
        );
    })



    return (
        <div>
            <ul style = {{listStyle: "none"}}>
                {alunosLi}
            </ul>
        </div>
    )
}