const express = require("express");
require('dotenv').config();
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const Contact = require('./Models/Contact');
const path = require("path");
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('MongoDB is connected');
});

app.post('/contact', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  try {
    const contact = await Contact.create({
      firstName,
      lastName,
      email,
      phone,
      message
    });

    // Assuming you have a 'code' property in your response JSON for success
    res.status(200).json({ code: 200, message: "Task added successfully", contact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, error: "Internal Server Error" });
  }
});

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
