import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Article from "./Article";
import CircularProgress from "@mui/material/CircularProgress";

const Articles = () => {
  //where to store the articles id
  const [article, setArticle] = useState(null);

  // hook for id article
  const { Id } = useParams();

  useEffect(() => {
    const healthTopics = () => {
      try {
        //link from the API
        fetch(
          "https://health.gov/myhealthfinder/api/v3/topicsearch.json?topicId=552%2C30533%2C30539%2C30547%2C30560%2C30598%2C30610%2C30567%2C30559%2C537%2C531%2C534%2C537%2C541%2C551%2C30606%2C33304"
        ) // 1
          .then((res) => res.json())
          .then((data) => {
            //filter the artciles by id in order to useParams for each article
            const filterArticlesById = (Id) => {
              const filterIds = data.Result.Resources.Resource.filter(
                (resource) => resource.Id === Id
              );

              setArticle(filterIds);
            };
            //calling the function
            filterArticlesById(Id);
          });
      } catch (err) {
        return err.error ? JSON.parse(err.error) : err;
      }
    };
    healthTopics();
  }, [Id]);

  // loading state
  if (article === null) {
    return (
      <CircularProgress
        style={{
          marginLeft: "50%",
        }}
      />
    );
  }
  // if error from API
  if (article.length === 0) {
    return <div>Error!</div>;
  }

  return (
    <div>
      {article.map((section) => {
        return <Article key={section} section={section.Sections} />;
      })}
    </div>
  );
};

export default Articles;
