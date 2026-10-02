// CREATE CLIENT
const client = new MongoClient("mongodb+srv://supertoluib_db_user:<db_password>@cluster0.5wteoyw.mongodb.net/?appName=Cluster0");

// CREATE CONNECT FUNCTION
async function connect() {
  // Opens connection to the mongo database
  await client.connect();
  // Log a message to the console
  console.log("Connected to MongoDB");
  // Return the database connection
  return client.db("user-info");
}

// EXPORT CONNECT FUNCTION
module.exports = connect;