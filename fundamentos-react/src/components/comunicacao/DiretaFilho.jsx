import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div>
            <span>{props.texto}</span>
            <span><strong>{props.numero}</strong></span>
            <span>{props.bool ? "Verdadeiro" : "Falso"}</span>
        </div>
    )
}