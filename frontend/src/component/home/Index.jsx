import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import Input from "../UI/Input";
import Button from "../UI/Button";
// import state from "../../constants/City.json"

const Index=()=>{
    const [show,setShow]=useState(false);
    const handle=()=>{
        
        setShow(true);
        
    
           
    }

    const input_style={ background: "white",
    border: "1px solid #a8a8a8",
    cursor: "text",
    color: "#545454",
    display: "flex",
    padding: "0 0.4em",
    height: "2.7em",
    overflow: "hidden",
    width:"21.7rem",
  outline:"none"  };
  const button_style = {
    width: "46%",
    background: "#01579b",
    height: "2.4rem",
    border: "2px solid transparent",
    cursor: "pointer",
    color: "white",
};

   
     return(
       <h1></h1>
     )
}

export default Index;