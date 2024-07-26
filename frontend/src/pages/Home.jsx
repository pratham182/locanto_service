import react from "react";
import Header from "../component/Header";
import SearchItem from "../component/SearchItem";
import Items from "../component/Items";
import { Card } from "../component/Card";
import { ProductCard } from "../component/ProductCard";
import { CityCards } from "../component/CityCards";
import HeadingSection from "../component/HeadingSection";






const Home = () => {
    const divStyle = {
        backgroundImage: "url('https://cdn.pixabay.com/photo/2015/11/15/21/31/lego-1044891_1280.jpg')", /* Replace with your own image URL */
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '85vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    const overLay = {
        background: 'rgba(0, 0, 0, 0.5)', // Corrected
        color: 'white', // Corrected
        textAlign: 'center', // Corrected
        padding: '20px', // Corrected
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
        <>
            <Header />

            <div style={divStyle}>
                <div style={overLay}>
                    <div style={{}}>
                        <h3 class="text-6xl font-bold"> World’s Largest Marketplace
                        </h3>
                        <h5 class="m-6 text-xl">You Can Buy, Sell Anything You Can Think Of.
                        </h5>
                        <SearchItem />

                    </div>

                </div>
            </div>
            {/* <Items/> */}
            <div class="ml-2 mt-4 flex flex-wrap gap-4 justify-evenly">
                <Card image="https://classiads.designinvento.net/elementor/classiads-ultra/wp-content/uploads/2020/12/house.png" product="Real Estate" ads="8 Ads" />
                <Card image="https://classiads.designinvento.net/elementor/classiads-ultra/wp-content/uploads/2020/12/car.png" product="vehicle" ads="9 Ads" />

                <Card image="https://classiads.designinvento.net/elementor/classiads-ultra/wp-content/uploads/2020/12/mobile.png" product="mobile" ads="100 Ads" />
                <Card image="https://classiads.designinvento.net/elementor/classiads-ultra/wp-content/uploads/2020/12/furniture.png" product="furniture" ads="44 ads" />
                <Card image="https://classiads.designinvento.net/elementor/classiads-ultra/wp-content/uploads/2020/12/Travel.png" product="Travel" ads="10ads" />
                <Card image="https://classiads.designinvento.net/elementor/classiads-ultra/wp-content/uploads/2020/12/pet.png" product="Animal" ads="10 Ads" />
                <Card image="https://classiads.designinvento.net/elementor/classiads-ultra/wp-content/uploads/2020/12/jobs2.png" product="Jobs" ads="10 Ads" />
                <Card image="https://classiads.designinvento.net/elementor/classiads-ultra/wp-content/uploads/2020/12/Matrimonial.png" product="Matrimonail" ads="10 Ads" />
                <Card image="	https://classiads.designinvento.net/elementor/classiads-ultra/wp-content/uploads/2020/12/Health2.png" product="Health" ads="10 Ads" />
                <Card image="https://classiads.designinvento.net/elementor/classiads-ultra/wp-content/uploads/2020/12/Events.png" product="Event" ads="10 Ads" />
            </div>


            <div class="mt-20 bg-background-white" >
                <div class=" flex flex-col justify-center items-center gap-2 ">
                    <HeadingSection topPart="Featured Ads" bottomPart="Buy & Sell Anything" />

                    <div class=" carousel flex gap-10 overflow-x-scroll whitespace-nowrap max-w-5xl " style={{}}>

                        <ProductCard />
                        <ProductCard /><ProductCard />
                        <ProductCard />
                        <ProductCard /><ProductCard />
                        <ProductCard />
                        <ProductCard /><ProductCard />
                        <ProductCard />
                        <ProductCard /><ProductCard />


                    </div>

                </div>

            </div>




            <div id="location" class="mt-10">
                <div class="flex flex-col justify-center items-center gap-2">
                   
                    <HeadingSection topPart="Popular Locations" bottomPart="Explore your desire places"/>
                    <div class="flex flex-wrap gap-16 justify-center">
                    <CityCards imageUrl="https://i.imghippo.com/files/jXd8o1721939097.jpg" name="Chennai" />
                    <CityCards imageUrl="https://i.imghippo.com/files/DYbS71721936691.jpg" name="Mumbai" />
                    <CityCards imageUrl="https://i.imghippo.com/files/7ezzI1721939294.jpg" name="Kolkata"/>
                    <CityCards imageUrl="https://i.imghippo.com/files/5GrFw1721939857.jpg" name ="Delhi"/>

                    <CityCards  imageUrl="https://i.imghippo.com/files/BfOFt1722028324.jpg" name="Hyderabad"/>
                    <CityCards imageUrl="https://i.imghippo.com/files/qY5uS1722028526.jpg" name="Dehradun" />
                    <CityCards imageUrl="https://i.imghippo.com/files/eoDWR1722028754.jpg" name='Agra' />
                    <CityCards imageUrl="https://i.imghippo.com/files/HECtO1722028871.jpg" name="Jaipur" />


                    </div>
                   
                </div>


            </div>


            <div>




                <div id="latest ads" class="flex-col justify-center items-center text-center mt-6 gap-2 flex  p-8" style={{ width: '100%' }}>

                   
                    <HeadingSection topPart="Latest Ads" bottomPart="Buy & Sell Anything"/>

                    <div id="cards" class="flex flex-wrap gap-4 justify-center">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />

                    </div>


                </div>


            </div>


        </>
    )
}
export default Home;