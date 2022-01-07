const { json } = require("express");
const express = require("express");
const app = express();

//this is helping to read the post request body
app.use(express.json());

//croos origin request enabling
const cors=require("cors");
app.use(cors());

const {addRecord,getRecord} = require("./user");
// http://localhost:4000/

app.get("/get-records",async (req, res) => {
  const list= await getRecord();
 res.json(list);
});

app.post("/add-records", async(req, res)=>{
  const user=req.body;
  await addRecord(user);
  res.json({message:"User added sucessful"});
});

app.listen(4000, () => console.log("Succes"));
