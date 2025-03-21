import React from "react";
import produtos from '../../data/produtos';
import './TabelaProdutos.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    function getLinhas(){
        return produtos.map(p => {
            return (
                <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>{p.nome}</td>
                    <td>R$ {p.preco}</td>
                </tr>
            )
        })
    }

    return (
        <div className="TabelaProdutos">
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    )
}