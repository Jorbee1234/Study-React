import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div>
            <div>Filho</div>
            <button onClick={
                function(e){
                    props.qndClicar('Joao',parseInt(Math.random() * (20)) + 50,Math.random()>0.5)
                }
            }>Fornecer Informações</button>
        </div>
    )
}