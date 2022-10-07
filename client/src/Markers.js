import FindCenters from "./FindCenters";
import MapBox from "./MapBox";


const Markers = ({centers}) => {

    return (
        <>
        
        { centers &&
        <MapBox data={centers}/>
}
        </>
    )
}

export default Markers;