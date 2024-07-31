import Header from "../component/Header";
import { ListingCards } from "../component/ListingCards";
import { ListingDetail } from "../component/ListingDetail";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
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

                        <div id="nav-options ">
                            <div class="flex">
                                <div>
                                    <button data-dropdown-toggle="dropdown">
                                                                                  <FontAwesomeIcon  icon={faLayerGroup} />


                                    </button>
                                          <h3>
                                            Listings
                                          </h3>

                                </div>


                                <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>


                            </div>
                            
                        </div>

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

