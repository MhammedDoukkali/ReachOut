

import  { useState, useEffect, useRef } from 'react';
import tt from "@tomtom-international/web-sdk-maps"
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import styled from 'styled-components';
import FindCenters from './FindCenters';


const MapBox = ({data}) => {

    console.log(data)
    
    const mapElement = useRef()
    const [map, setMap] = useState({});
    //montreal lat and long
    const longitude = -73.5674
    const latitude = 45.5019


    useEffect(()=> {
         
        let map = tt.map({ 
            key: "eeH1vubTGkciVPq5D2eDWUo3H7oCThCn", 
            container: mapElement.current,
            center:[longitude, latitude],
            zoom : 11,
          }); 
        setMap(map);  
        
            const addMarker = () =>{
            const popupOffsets = {
            bottom: [0, -200],
          }
             data.forEach((element, index) => {
                const marker = new tt.Marker().setLngLat([element.longitude, element.lattitude]).addTo(map)
                const popup = new tt.Popup({offset: popupOffsets}).setHTML(`<img src=${element.logo} style="width:50px" />${element.name} <br/> institution : ${element.institution} 
                <br/> Phone Number : ${element.phoneNumber} <br/> <a href=${element.webSite} target="_blank" style="text-decoration: none">Web site : ${element.webSite}</a> <br/> Treatments : ${element.treatments}`);
                  marker.setPopup(popup);

            });
            
            }

            addMarker()
        
        return () => map.remove();
    },[])

  

    

    return (
        <>
        
         <Wrapper ref={mapElement} id={'testing'} className="map">markers here</Wrapper>
         

    </>
    )
};

export default MapBox;


const Wrapper = styled.div`
height: 60vh;
margin:20px;


`