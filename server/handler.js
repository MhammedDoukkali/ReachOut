const { createClient} = require('./createClient')
const { v4: uuidv4 } = require("uuid");
const request = require('request-promise');


const getinfoFromDb = async (req, res) => {

 // This function to create client
 const { client, db } = createClient("Reach");
 // Collection used for this function
 const centers = db.collection('centers')


    try{
        await client.connect();
        const result = await centers.find().toArray();
        // console.log(result);
        res.status(200).json({ status: 200, data: result, message: "info in the DB" });

    }catch(err) {
        res.status(500).json({ status: 500, message: err.message });
    }finally {
        client.close();
        console.log('disconnected')
    }

}

const addCenter = async (req, res) => {
    // This function to create client
    const { client, db } = createClient("Reach");
    // Collection used for this function
    const centers = db.collection('centers')
  console.log(req.body)
    // data schema for users
    const { 
        name,
        treatmentType, 
        institution, 
        logo, 
        geoLocation, 
        phoneNumber, 
        webSite 
            } = req.body;
  console.log(req.body)
   const newCenter=req.body;
    try {
      //connect to the database
      await client.connect();
    
    //   newCenter["_id"] = uuidv4()

      const center = await centers.insertOne(newCenter);
        console.log(center)
        res.status(200).json({ status: 200, message: "center added" });
      // the error message
    } catch (err) {
      res.status(500).json({ status: 500, message: err.message });
      //closing the data base
    } finally {
      client.close();
      console.log("disconnected");
    }
  };


  const healthTopics = (req, res) => {
    return request('https://health.gov/myhealthfinder/api/v3/topicsearch.json?TopicId=527') // 1
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      return (parsedResponse); // 2
    })
    .catch((err) => {
        return err.error ? JSON.parse(err.error) : err;
    });

  }

  // healthTopics().then((result)=> console.log(result.Result.Resources))

  
module.exports = { getinfoFromDb, addCenter, healthTopics }