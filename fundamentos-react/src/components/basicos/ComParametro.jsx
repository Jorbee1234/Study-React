import React from "react"

export default function ComParametro(props){
    return (
        <div>
            <h1>{props.titulo}</h1>
            <h2>{props.subtitulo} com nota {props.nota}</h2>
        </div>
    )
}