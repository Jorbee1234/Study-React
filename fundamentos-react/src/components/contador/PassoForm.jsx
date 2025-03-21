import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
            <div>
                <label htmlFor=""></label>
                <input id="passoInput" type="number" 
                 value={props.passo} onChange={props.setPasso}/>
            </div>
    );
}