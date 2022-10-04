import { useState,useEffect } from "react";
import Centers from "./Centers";
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
        <div>
            <div>
                <Centers centers={centers}/>
            </div>
        </div>
        <Markers centers={centers}/>
    </>
    }
    </>
)




};

export default FindCenters;