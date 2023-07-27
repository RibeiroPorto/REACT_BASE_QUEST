import React from "react";


const Buttonlbl = ({label}) =>{
    return <button onClick={() => alert(`"A label desse botão é: ${label}`)}>{label}</button>
}


export default Buttonlbl