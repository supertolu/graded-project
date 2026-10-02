const express = require('express');
const cors = require('cors');
const connect = require('./db');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/submit', async (req, res) => {
  const { userName, email, userRole } = req.body;
  const userinfo = {
    userName: userName,
    email: email,
    userRole: userRole
  };
  const db = await connect();
  const users = await db.collection('users');
  await users.insertOne(userinfo);
  res.send({ status: "ok" });
});
// Fetch all the users and respond back with them
app.get("/users", async(req, res)=>{
  const db = await connect();
  const users = db.collection("users").find();
  res.send(users);
})


// This connects to the mongodb cluster and starts the express server
async function startServer(){
  await connect()
  app.listen(5000, () => {
    console.log("server is on http://localhost:5000");
  });
}

startServer();