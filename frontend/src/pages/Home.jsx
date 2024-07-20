import react from "react";
import Header from "../component/Header";
import SearchItem from "../component/SearchItem";
import Items from "../component/Items";
import { Card } from "../component/Card";


const Home=()=>{
    const divStyle={
        backgroundImage: "url('https://cdn.pixabay.com/photo/2015/11/15/21/31/lego-1044891_1280.jpg')", /* Replace with your own image URL */
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '85vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    const overLay={ background: 'rgba(0, 0, 0, 0.5)', // Corrected
        color: 'white', // Corrected
        textAlign: 'center', // Corrected
        padding: '20px', // Corrected
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
        }
    return(
        <>
        <Header/>
        
        <div style={divStyle}>
<div style={overLay}>
    <div style={{}}>
        <h3 class="text-6xl font-bold"> World’s Largest Marketplace
        </h3>
        <h5 class="m-6 text-xl">You Can Buy, Sell Anything You Can Think Of.
        </h5>
        <SearchItem/>

    </div>

</div>
        </div>
        {/* <Items/> */}
        <div class="ml-2 mt-4">
        <Card/>

        </div>
        
        
        </>
    )
}
export default Home;