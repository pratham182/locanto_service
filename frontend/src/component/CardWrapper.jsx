const CardWrapper=({innerComponent})=>{
    return(
        <>
        <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5 m-10  h-40 w-96">
           {innerComponent}

        </div>
        </>
    )
}


export default CardWrapper;