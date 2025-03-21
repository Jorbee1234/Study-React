import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const aleatorio = parseInt(Math.random() * (props.max - props.min) + props.min);

    return (
        <div>
            <h2>Valor aleatório</h2>
            <p>
                <strong>Valor mínimo:</strong> {props.min}
            </p>
            <p>
                <strong>Valor máximo:</strong> {props.max}
            </p>
            <p>
                <strong>Valor escolhido:</strong> {aleatorio}
            </p>
        </div>
    );
};
