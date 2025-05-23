export const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

export function reducer(state, action) {
    switch(action.type) {
        case 'number_add2':
            return {...state, number: state.number + 2}
        case 'number_multiply7':
            return {...state, number: state.number * 7}
        case 'number_divide25':
            return {...state, number: state.number / 25}
        case 'numberInt':
            return {...state, number: parseInt(state.number)}
        case 'login':
            return {...state, user: action.payload}
        default:
            return state
    }
}