import React from "react";
import If, { Else } from './If';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div>
            <If test={props.usuario && props.usuario.nome}>
                Seja bem vindo {props.usuario.nome}
                <Else>
                    Seja bem vindo <strong>Amigão!!</strong>
                </Else>
            </If>
        </div>
    )
}