const Button=({onClick, buttonClasses, buttonTitle,style})=>{
    return(
    <button className={buttonClasses} type="submit" style={style}>
        {buttonTitle}
    </button>)
}


export default Button;