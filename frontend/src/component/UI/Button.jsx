const Button=({onClick, buttonClasses, buttonTitle,style})=>{
    return(
    <button type="submit" style={style}>
        {buttonTitle}
    </button>)
}


export default Button;