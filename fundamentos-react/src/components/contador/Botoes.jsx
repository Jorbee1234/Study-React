import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div>
            <button onClick={props.inc}>+</button>
            <button onClick={props.dec}>-</button>
        </div>
    );
}