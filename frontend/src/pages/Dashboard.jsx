import CardWrapper from "../component/CardWrapper";
import Header from "../component/Header";
import Button from "../component/UI/Button";

const Dashboard=()=>{
    return(
        <>
         <Header/>
         {/**Wrapper component */}
         <div className="flex justify-end  bg-gray-300">
         <Button buttonTitle="post an ad" buttonClasses="mr-2  border border-gray-100 bg-white"/>
         </div>
         <div className=" flex  bg-gray-300 justify-center flex-wrap">

         
         <CardWrapper innerComponent="jhello"/>
         <CardWrapper innerComponent="box"/>
         <CardWrapper innerComponent="box2"/>
         <CardWrapper innerComponent="box2"/>

        
</div>
        </>
    )
}

export default Dashboard;