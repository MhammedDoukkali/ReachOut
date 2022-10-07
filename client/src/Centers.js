import FindCenters from "./FindCenters";
import Center from "./Admin features/DeleteCenter";

const Centers = ({centers}) => {

    // console.log(centers)


    return(
        <>
        {centers &&
        <div>{centers.map((center)=> {
            // console.log(centers[center])
            return <Center key={center} center={center} />
        })}</div>
    }
    </>
    )


}; 

export default Centers;