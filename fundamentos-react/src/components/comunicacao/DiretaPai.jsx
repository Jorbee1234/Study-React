import React from "react";
import DiretaFilho from './DiretaFilho'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{
    return (
        <div>
            <DiretaFilho texto="filho" numero={20} bool={true}></DiretaFilho>
        </div>
    )
}