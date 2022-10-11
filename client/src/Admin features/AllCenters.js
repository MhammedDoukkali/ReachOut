import { useEffect, useState } from "react";
import styled from "styled-components";
import MyCenter from "./MyCenter";
import { MdDeleteForever } from "react-icons/md";

//handle the 
const AllCenters = () => {
  const [centers, setCenters] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
      //display all the centers 
    fetch("/api/get-centers")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCenters(data.myCenters);
      })
      .catch((err) => setError(err));
  }, []);
// function to delete one centre 
  const handleDelete = (_id) => {
    fetch(`/api/delete-center/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCenters(data.myCenters);
      });
  };

  return (
    <>
      <Title>Centers list : </Title>

      <Wrapper>
        {centers && (
          <div>
            {centers.map((myCenter) => {
              return (
                <Content>
                  <MyCenter key={myCenter} myCenter={myCenter} />
                  <Button>
                    <MdDeleteForever
                      size={"2em"}
                      onClick={() => handleDelete(myCenter.name)}
                    />
                  </Button>
                </Content>
              );
            })}
          </div>
        )}
      </Wrapper>
    </>
  );
};

export default AllCenters;

const Content = styled.div`
  display: flex;
  flex-direction: row;
`;
const Wrapper = styled.div``;

const Title = styled.h3`
  margin: 20px;
  font-size: large;
  font-weight: 300;
  border-bottom: 1px solid #ccc;
  padding-bottom: 3px;
`;

const Button = styled.button`
  background-color: white;
  border: none;
  color: #fb4358;
`;
