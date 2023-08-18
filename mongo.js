const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')

const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "REPLACEWITHYOUROWNCONNECTIONSTRING";

// parse application/json
app.use(bodyParser.json())

app.get('/users/:userId/books/:bookId', (req, res) => {
  
  const client = new MongoClient(uri);

  async function run() {
    try {
      const database = client.db('mongodemo');
      const student = database.collection('student');
  
      // Query for a movie that has the title 'Back to the Future'
      // const query = { name: 'Peter' };
      const result = await student.insertOne(req.params);
  
      console.log(result);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);

  res.send(req.params)
})

app.post('/', (req, res) => {

    console.log(req.body);

    const client = new MongoClient(uri);

    async function run() {
      try {
        const database = client.db('mongodemo');
        const student = database.collection('student');
    
        // Query for a movie that has the title 'Back to the Future'
        // const query = { name: 'Peter' };
        const result = await student.insertOne(req.params);
    
        console.log(result);
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
    }
    run().catch(console.dir);

  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


