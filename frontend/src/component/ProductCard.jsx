import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt ,faStar ,faHeart, faMobileAlt  } from '@fortawesome/free-solid-svg-icons';

export const ProductCard=()=>{
    return(

        <>
        <div class="w-52 rounded-2xl bg-white" style={{fontFamily:'DM Sans'}}>
        

    <div id="upper-part" class="relative">

  
    <img src="https://classiads.designinvento.net/elementor/classiads-ultra/wp-content/uploads/elementor/thumbs/18-2-q0w1xp2utgo9kj8e6o6rm93iwizmmp57zyv8099nzc.jpg"/>
    <div>
    <span class="bg-custom-orange text-white  absolute " style={{top:"2%",right:'3%',padding:'0.2rem'}}>
        Featured
    </span>
    
    <img class="rounded-full absolute w-11" style={{bottom:"-10%",right:'3%'}}  src="https://classiads.designinvento.net/elementor/classiads-ultra/wp-content/uploads/elementor/thumbs/img-02-768x693-1-q0umfwrif6qyshqr2wwvgiry43azkfy9eum15klc9k.jpg"/>
    

    </div>
   
    
    </div>

  
    


    <div id="lower-part" class="mt-5 ">
        <div class="ml-4">
            
       
        <div class="flex ">
        <h3 style={{fontFamily:'DM Sans',fontWeight:'600'}} class="text-text-black text-xl "> Doctors Required </h3>
     <span class="ml-2 rounded-full bg-green-300 rounded-full">
     {/* <FontAwesomeIcon icon={faCheck} style={{fontSize:"1rem"}} /> */}
        </span>
       {
        //locations

       }


       
        </div>
     

        <div id="location" class="flex gap-2 text-custom-grey mt-2">
        <FontAwesomeIcon icon={faMapMarkerAlt}  /> 

        <h3 class="text-xs">
        California, USA
        </h3>
       </div>
       </div>
       <hr style={{width:"100%"}} class="ml-0 mt-4"/>

       <div id='rating' class="ml-5 flex gap-2 ">
        <h2>
        5.0
        </h2>
        <span>
        <FontAwesomeIcon icon={faStar} style={{color:"yellow"}} />
        <FontAwesomeIcon icon={faStar} style={{color:"yellow"}} />
        <FontAwesomeIcon icon={faStar} style={{color:"yellow"}} />
        <FontAwesomeIcon icon={faStar} style={{color:"yellow"}} />
        <FontAwesomeIcon icon={faStar}  style={{color:"yellow"}}/>
        </span>
        

       </div>


       <div id="mobile-bookmarks-icon" class="flex justify-end gap-4 m-4 mb-2 text-custom-grey text-xl">
       <FontAwesomeIcon icon={faMobileAlt}  /> 
       <FontAwesomeIcon icon={faHeart}  />


       </div>

       <hr style={{width:'100%'}} class="mt-0"/>
      

      <div id="price-views" class="flex justify-between p-4">
        <h3 style={{fontSize:'1rem'}}>
        $900 FIXED
            </h3>
        <span class="text-xs text-center flex items-center text-custom-grey">
        Views: 5846
        </span>

      </div>
    </div>
    

        </div>
        </>
    )
}