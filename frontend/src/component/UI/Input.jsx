

const Input=({value, type, onChange, placeholder, name,onClick,style})=>{
    
     return(
        <input value={value} onClick={onClick} placeholder={placeholder} style={style}/>
     )
}

export default Input;