interface EntradaProps{
    tipo?: 'text' | 'number',
    texto: string,
    valor: any,
    somenteLeitura?: boolean,
    className?: string,
    valorMudou?: (valor: any) => void,
}

export default function Entrada(props: EntradaProps){
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2 block">{props.texto}</label>
            <input type={props.tipo ?? 'text'} 
            value={props.valor}
            readOnly={props.somenteLeitura}
            onChange={e => props.valorMudou?.(e.target.value)}
            className={`
                w-full rounded-lg border border-blue-300 p-2
                focus:outline-none focus:ring-2 bg-gray-100
                ${props.somenteLeitura ? '' : 'focus:bg-white'}
            `}></input>
        </div>
    )
}
