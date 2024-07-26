export const CityCards=(props)=>{

    return(
       <div class="rounded-2xl bg-white">

<div class="w-52 h-52 relative">
    
<div class="rounded-2xl" style={{
            backgroundImage: `url(${props.imageUrl})`,
            width: "100%",
            height: "100%",
            backgroundSize: 'cover'
          }}>

</div>
<div class="absolute flex justify-center items-center" style={{top:"0%",left:'0%',width:'100%',height:'100%'}} >
<h3 class="text-white text-2xl font-extrabold " style={{filter:'drop-shadow(2px 4px 6px black)'}}>
    {props.name}
</h3>
</div>

</div>

        
        
        

       </div>
    )
}