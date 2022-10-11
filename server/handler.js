const { createClient } = require("./createClient");
const { v4: uuidv4 } = require("uuid");
const request = require("request-promise");

const getinfoFromDb = async (req, res) => {
  // This function to create client
  const { client, db } = createClient("Reach");
  // Collection used for this function
  const centers = db.collection("centers");

  try {
    await client.connect();
    const result = await centers.find().toArray();
    // console.log(result);
    res
      .status(200)
      .json({ status: 200, data: result, message: "info in the DB" });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  } finally {
    client.close();
    console.log("disconnected");
  }
};

const addCenter = async (req, res) => {
  // This function to create client
  const { client, db } = createClient("Reach");
  // Collection used for this function
  const centers = db.collection("centers");
  console.log(req.body);
  // data schema for users
  const {
    name,
    treatmentType,
    institution,
    logo,
    geoLocation,
    phoneNumber,
    webSite,
  } = req.body;
  console.log(req.body);
  const newCenter = req.body;
  try {
    //connect to the database
    await client.connect();

    //   newCenter["_id"] = uuidv4()

    const center = await centers.insertOne(newCenter);
    console.log(center);
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
// get the list of all the centers
const getCenters = async (req, res) => {
  // This function to create client
  const { client, db } = createClient("Reach");
  // Collection used for this function
  const centers = db.collection("centers");
  try {
    //connect to the database
    await client.connect();

    //   newCenter["_id"] = uuidv4()

    const myCenters = await centers.find().toArray();

    res.status(200).json({ status: 200, myCenters, message: "all the center" });
    // the error message
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
    //closing the data base
  } finally {
    client.close();
    console.log("disconnected");
  }
};

const deleteCenter = async (req, res) => {
  // This function to create client
  const { client, db } = createClient("Reach");
  // Collection used for this function
  const centers = db.collection("centers");

  const { center } = req.params;
  try {
    //connect to the database
    await client.connect();

    //delete center from DB
    const deletedCenter = await centers.deleteOne({ name: center });
    //display the new centers list
    const myCenters = await centers.find().toArray();
    res.status(200).json({ status: 200, myCenters, message: "center deleted" });
    // the error message
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
    //closing the data base
  } finally {
    client.close();
    console.log("disconnected");
  }
};

// get the qoutes from the API
const getQuotes = async (req, res) => {
  try {
    const response = await request("https://zenquotes.io/api/quotes/"); // 1
    const parsedResponse = JSON.parse(response);
    res.status(200).json({ status: 200, data: parsedResponse }); // 2
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

//function to verify the admin username and passWord
const addDataFromEnv = async (req, res) => {
  // This function to create client
  const { client, db } = createClient("Reach");
  // Collection used for this function
  const adminId = db.collection("adminId");

  const { username, passWord } = req.body;

  if (
    username.toLowerCase() === process.env.ADMIN_NAME.toLowerCase() &&
    passWord === process.env.ADMIN_PASSWORD
  ) {
    try {
      //connect to the database
      await client.connect();
      // if the sign in info matched add id to the data base to track security
      const id = uuidv4();
      await adminId.updateOne({ username }, { $push: { id } });
      res.status(200).json({ status: 200, id, message: "Id added" });
      // the error message
    } catch (err) {
      res.status(500).json({ status: 500, message: err.message });
      //closing the data base
    } finally {
      client.close();
      console.log("disconnected");
    }
  } else {
    res.status(401).json({ status: 401, data: "User not found." });
  }
};

module.exports = {
  getinfoFromDb,
  addCenter,
  getQuotes,
  addDataFromEnv,
  getCenters,
  deleteCenter,
};
