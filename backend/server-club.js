const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://poorva:poorva@cluster0.txkokqb.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const eventSchema = new mongoose.Schema({
  name: String,
  date: String,
  mode: String,
  status: String,
});

const Event = mongoose.model('Event', eventSchema);

const clubSchema = new mongoose.Schema({
  name: String,
  usn: String,
  email: String,
  number: String,
  club: String,
  department: String
});

const Club = mongoose.model('Club', clubSchema);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/page.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'page.js'));
});

app.post('/submit', async (req, res) => {
  try {
    const club = new Club(req.body);
    await club.save();
    res.status(200).send({ message: 'Data saved successfully' });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).send({ message: 'Error saving data' });
  }
});

app.get('/fetch-member-counts', async (req, res) => {
  try {
    // Connect to your MongoDB database
    const client = await MongoClient.connect("mongodb+srv://minip8681:kle123@cluster0.qbrivbz.mongodb.net/kletech_database?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    // Select the appropriate database and collection
    const db = client.db('kletech_database'); // Replace with your database name
    const membersCollection = db.collection('clubs'); // Replace with your collection name

    // Fetch data from the members collection
    const membersData = await membersCollection.find({}).toArray();

    // Calculate member counts for each club
    const memberCounts = membersData.reduce((counts, member) => {
      counts[member.club] = (counts[member.club] || 0) + 1;
      return counts;
    }, {});

    // Close the MongoDB connection
    client.close();

    res.json(memberCounts);
  } catch (error) {
    console.error('Error fetching member counts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/club-counts', async (req, res) => {
  try {
    const clubCounts = {};

    const clubs = await Club.find();
    clubs.forEach((club) => {
      clubCounts[club.club] = (clubCounts[club.club] || 0) + 1;
    });

    res.status(200).json(clubCounts);
  } catch (error) {
    console.error('Error fetching club counts:', error);
    res.status(500).send({ message: 'Error fetching club counts' });
  }
});




app.get('/api/event-results', async (req, res) => {
  try {
    const eventResults = await EventResult.find();
    res.json(eventResults);
  } catch (error) {
    console.error('Error fetching event results:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET request to fetch data
app.get('/fetch-data', async (req, res) => {
  try {
    const clubs = await Club.find();
    const clubCounts = clubs.reduce((acc, club) => {
      acc[club.club] = (acc[club.club] || 0) + 1;
      return acc;
    }, {});

    console.log('Server Response:', { clubCounts }); // Log the response

    res.status(200).json({ clubCounts });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send({ message: 'Error fetching data' });
  }
});


app.get('/', (req, res) => {
  // Redirect to the /home route
  res.redirect('https://localhost:3000/page');
});




// Handle other routes by serving the React app
app.get('/write', (req, res) => {
  res.sendFile(path.join(__dirname, 'views','/home.js' ));
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
