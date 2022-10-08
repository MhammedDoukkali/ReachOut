import { useState, useEffect,  } from "react";
import {useParams} from "react-router-dom"
import Article from "./Article";


const Articles = () => {

const [article, setArticle] = useState(null)

const {Id} = useParams()

useEffect(()=> {
    const healthTopics = () => {
      try {  
       fetch('https://health.gov/myhealthfinder/api/v3/topicsearch.json?topicId=552%2C30533%2C30539%2C30547%2C30560%2C30598%2C30610%2C30567%2C30559%2C537%2C531%2C534%2C537%2C541%2C551%2C30606%2C33304') // 1
         .then(res=> res.json())
         .then(data=> {
            const filterArticlesById = (Id) => {
            const filterIds = data.Result.Resources.Resource.filter(resource => resource.Id === Id);
            // console.log(filterIds)
             setArticle(filterIds)
            
            }
            filterArticlesById(Id)
         })
        
        
      }catch(err){
            return err.error ? JSON.parse(err.error) : err;
      }
    
      }
      healthTopics()
    }, [Id])


if (article === null) {
    return <div>Loading...</div>
}

if (article.length === 0) {
    return <div>Error!</div>
}


    return (
        
        <div>{article.map(section => {
            return <Article key={section} section={section.Sections}/>
        })}</div>
    
    )
}; 

export default Articles