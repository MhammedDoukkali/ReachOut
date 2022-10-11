import { useState, useEffect } from "react";

import Markers from "./Markers";

const FindCenters = () => {
  //state where centers are stored
  const [centers, setCenters] = useState(null);

  useEffect(() => {
    //information coming from DB of medical centers
    fetch("/api/get-info")
      .then((res) => res.json())
      .then((data) => {
        //set the state to have the information
        setCenters(data.data);
      });
  }, []);

  return (
    <>
      {centers && (
        <>
          <Markers centers={centers} />
        </>
      )}
    </>
  );
};

export default FindCenters;
