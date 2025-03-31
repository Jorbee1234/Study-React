import { useState, useEffect } from "react"

export const useFetch = (url, method = 'get') => {
    const [state, setState] = useState({
        data: null,
        loading: true
    })

    useEffect(() => {
        fetch(url, {method})
            .then(response => response.json())
            .then(json => setState({
                data: json,
                loading: false
            }))
    } , [url, method])

    return state
    
    
    
}
