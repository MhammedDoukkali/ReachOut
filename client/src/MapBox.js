import  { useState, useEffect, useRef } from 'react';
import tt from "@tomtom-international/web-sdk-maps"
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import styled from 'styled-components';


// handling the map and the information displayed on the markers 
const MapBox = ({data}) => {
  //persist mapElement between renders
    const mapElement = useRef()
    //storing the map on a state  
    const [map, setMap] = useState({});
    //montreal lat and long
    const longitude = -73.5674
    const latitude = 45.5019
  

    useEffect(()=> {
         //dispaly the map from the API 
        let map = tt.map({ 
            key: process.env.REACT_APP_TOMTOM_API_KEY, 
            container: mapElement.current,
            center:[longitude, latitude],
            zoom : 10,
          }); 
        setMap(map);  
        //to add markers depending in the long and lat for each centers from DB 
            const addMarker = () =>{
            const popupOffsets = {
            bottom: [0, -50],
          }
             data.forEach((element) => {
               //adding the markers 
                const marker = new tt.Marker().setLngLat([element.longitude, element.lattitude]).addTo(map)
                //adding the popUp including centers informations
                const popup = new tt.Popup({offset: popupOffsets}).setHTML(`<img src=${element.logo} style="width:50px" />${element.name} <br/> institution : ${element.institution} 
                <br/> Phone Number : ${element.phoneNumber} <br/> <a href=${element.webSite} target="_blank" style="text-decoration: none">Web site : ${element.webSite}</a> <br/> Treatments : ${element.treatments}`);
                  marker.setPopup(popup);

            });
            
            }
            //calling the function 
            addMarker()
        //required by the API 
        return () => map.remove();
    },[])

    return (
        <>
          <Wrapper ref={mapElement}/>
        </>
    )
};

export default MapBox;


const Wrapper = styled.div`
height: 60vh;
margin:20px;

`;