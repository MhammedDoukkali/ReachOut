import MapBox from "./MapBox";

// this component is used to pass a prop to the MapBox from FindCenters
const Markers = ({ centers }) => {
  return <>{centers && <MapBox data={centers} />}</>;
};

export default Markers;
