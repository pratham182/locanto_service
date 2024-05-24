const Button=({type,onClick, buttonClasses, buttonTitle,style})=>{
    return(
    <button className={buttonClasses} type={type} style={style} onClick={onClick}>
        {buttonTitle}
    </button>)
}


export default Button;