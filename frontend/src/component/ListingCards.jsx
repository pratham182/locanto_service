export const ListingCards=(props)=>{
    return(
        <>

        <div class="w-40 h-24  rounded-md flex items-center" style={{backgroundColor: props.color}}  >
         <div id="text" class="text-white font-semibold text-center p-5">
          <h3 class="text-xl">
            3 

          </h3>
          <h3 class="text-xs">
            Total Listing
          </h3>
         </div>

         <div id="image" class="h-14 w-10 bg-no-repeat" style={{backgroundImage:`url('${props.logo}')`}} >

           
         </div>



        </div>
        </>
    )
}