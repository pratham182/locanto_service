import Header from "../component/Header";
import { ListingCards } from "../component/ListingCards";
import { ListingDetail } from "../component/ListingDetail";


const Dashboard = () => {

    return (
        <>

            <Header />


            <div class="bg-background-white h-60">

                <div class="flex w-4/5 items-start mx-auto pt-16 gap-8 ">
                    <div id="left-side" class="w-64 rounded-md bg-white p-6" style={{ border: '1px solid #D2D7DE', borderColor: '#d2d7de' }}>

                    
                       <div id="top-part">
                        <div class="flex">
                        <img class="w-12 h-12 rounded-full" src="https://classiads.designinvento.net/classiads-test/wp-content/uploads/elementor/thumbs/IMG-20240421-WA0004-qrort9vsipkotr5wlbv16xhabgmgbxeuym75zcus8k.jpg"/>
                        <div class="flex flex-col pl-4 pt-2 text-sm w-full">
                            <h4>Demo</h4>
                            <h4>Demo</h4>
                        </div>
                      
                        </div>
                        
                       </div>
                       <hr class="mt-8"/>


                       <div id="bottom-part">

                       </div>
                    </div>

                    <div id="right-side " class="w-3/4 rounded-md p-6 bg-white " style={{ border: '1px solid #eee', borderColor: '#d2d7de' }}>
                        <div id="box-detail" class=" flex gap-8">
                            <ListingCards color="#0083C9" logo="https://classiads.designinvento.net/classiads-test/wp-content/plugins/directorypress-frontend/assets/images/total-listing.png" />
                            <ListingCards color="#4BB831" logo="https://classiads.designinvento.net/classiads-test/wp-content/plugins/directorypress-frontend/assets/images/active-listing.png" />
                            <ListingCards color="#F04D4E" logo="https://classiads.designinvento.net/classiads-test/wp-content/plugins/directorypress-frontend/assets/images/expired-listing.png" />
                            <ListingCards color="#FE993A" logo="https://classiads.designinvento.net/classiads-test/wp-content/plugins/directorypress-frontend/assets/images/pending-listing.png" />

                        </div>


                        <div id="Your-Listings" class="pt-4">
                            <h3 class="text-black font-bold text-xl">
                                Your Listings
                            </h3>

                            <div class="">
                            <table class="w-full">
        <thead>
            <tr class="text-sm" style={{background: '#F6F8FA'}}>
                <th scope="col" class="p-4"></th>
                <th scope="col" class="p-4">Title</th>
                <th scope="col" class="p-4">Expiry</th>
                <th scope="col" class="p-4">Status</th>
                <th scope="col" class="p-4">Listing ID</th>
            </tr>
        </thead>
        <ListingDetail/>
        <hr/>
        <ListingDetail/>
        <hr/>

        <ListingDetail/>
        <hr/>
        <ListingDetail/>
        <hr/>
    </table>
                            </div>

                        </div>
                    </div>

                </div>


            </div>
        </>
    )




}

export default Dashboard;