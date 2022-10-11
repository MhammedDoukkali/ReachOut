import { useState, useEffect } from "react";
import Resources from "./Resources";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

const Wellness = () => {
  //data from health.gov API
  const [data, setData] = useState(null);

  useEffect(() => {
    const healthTopics = () => {
      try {
        fetch(
          "https://health.gov/myhealthfinder/api/v3/topicsearch.json?topicId=552%2C30533%2C30539%2C30547%2C30560%2C30598%2C30610%2C30567%2C30559%2C537%2C531%2C534%2C537%2C541%2C551%2C30606%2C33304"
        ) // 1
          .then((res) => res.json())
          .then((data) => {
            //  console.log(data.Result)
            setData(data.Result.Resources);
          });
      } catch (err) {
        return err.error ? JSON.parse(err.error) : err;
      }
    };
    healthTopics();
  }, []);
//loading state
  if (data === null) {
    return (
      <CircularProgress
        style={{
          marginLeft: "50%",
        }}
      />
    );
  }

  return (
    <>
      {data && (
        <Wrapper>
          {data.Resource.map((resources) => {
            return <Resources key={resources} resources={resources} />;
          })}
        </Wrapper>
      )}
    </>
  );
};

export default Wellness;

const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
`;
