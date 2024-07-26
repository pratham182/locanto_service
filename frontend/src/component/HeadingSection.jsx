const HeadingSection=(props)=>{
    return(
        <>
         <h4 class="text-custom-black font-bold text-4xl "> {props.topPart}
                    </h4>

                    <h4 class="text-custom-grey text-l">{props.bottomPart}

                    </h4>
                    
        </>
    )
}


export default HeadingSection;