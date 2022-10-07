import { useState,useEffect } from "react";

import Markers from "./Markers";

const FindCenters =()=> {

const [centers, setCenters] = useState(null);


useEffect(()=> {

fetch("/api/get-info")
.then((res) => res.json())
.then((data) => {
    // console.log(data.data)
    setCenters(data.data)
})

}, [])

// console.log(centers.data)

return (
    <>
    {centers &&
            <>
        <Markers centers={centers}/>
    </>
    }
    </>
)




};

export default FindCenters;