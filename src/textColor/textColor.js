import React from "react";
import './textColor.css'

function ColoredText(props){
    return <p class="text" style={{color:props.TextColor, textTransform:'uppercase'}} >{props.children}</p>;
}

export default ColoredText;