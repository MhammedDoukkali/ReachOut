const request = require('request-promise');


const healthTopics =async () => {
  try {  
  const response = fetch('https://health.gov/myhealthfinder/api/v3/topicsearch.json?TopicId=527') // 1
     const healthTopic = JSON.parse(response)
    return healthTopic

  }catch(err){
        return err.error ? JSON.parse(err.error) : err;
  }

  }

  healthTopics().then((result)=> console.log(result.Result))