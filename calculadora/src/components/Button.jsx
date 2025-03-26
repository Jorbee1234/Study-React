import React from "react";
import './Button.css'

// eslint-disable-next-line react-refresh/only-export-components
export default props =>{
    return (    
    <button
        onClick={() => props.click(props.label)}
        className={`
        button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple': ''}
    `}>
        {props.label}
    </button>);
}
