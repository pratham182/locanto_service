import { useState } from "react";
import CardWrapper from "../component/CardWrapper";
import Header from "../component/Header";
import Button from "../component/UI/Button";
import Modal from "../component/UI/Modal";


const Dashboard=()=>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return(
        <>
         <Header/>
         
         {/**Wrapper component */}
         
         

         {
            /**Modal */
         }
         <div className="flex bg-gray-300 justify-center flex-wrap">
         {isModalOpen ? (
                <Modal  handleClose={handleCloseModal} />
            ) : (
                <div>
                    <div className="flex justify-end  bg-gray-300">
         
         <Button
                    buttonTitle="Post an Ad"
                    buttonClasses="mr-2 border border-gray-100 bg-white"
                    onClick={handleOpenModal}
                />
         
         </div>
                    <div className="flex bg-gray-300 justify-center flex-wrap">
                <CardWrapper innerComponent="jhello" />
                <CardWrapper innerComponent="box" />
                <CardWrapper innerComponent="box2" />
                <CardWrapper innerComponent="box2" />
            </div></div>
                
            )}
            </div>
                  
        </>)
    

         
    
    
}

export default Dashboard;