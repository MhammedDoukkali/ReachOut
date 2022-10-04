import FindCenters from "./FindCenters";
import MapBox from "./MapBox";


const Markers = ({centers}) => {

    console.log(centers)


    return (
        <>
        <div></div>
        { centers &&
        <MapBox data={centers}/>
}
        </>
    )
}

export default Markers;