export const Card=(props)=>{
    return(
        <div class=" shadow-custom  w-64 h-48 rounded-xl bg-white flex justify-center items-center">
<div class="w-28 flex flex-col gap-3 items-center">
    <img src={props.image}/>
    
    <div class="flex flex-col justify-center items-center">
    <span class="text font-normal">
        {props.product}
    </span>

    <span class="text-custom-red" >
        {props.ads}
    </span>
    </div>
    
    </div>
        </div>
    )
}

