const express = require('express');
const mongoose = require('mongoose');
const collection = require('./mongo');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/registration', async (req, res) => {
  const { email, password, parkingName, hrsPay, contact, address, free, numberOfFloors, floorValues, selectOption2, selectedOption } = req.body;

  const data = {
    email: email,
    password: password,
    parkingName: parkingName,
    hrsPay: hrsPay,
    contact: contact,
    free: free,
    address: address,
    numberOfFloors: numberOfFloors,
    floorValues: floorValues,
    selectOption2: selectOption2,
    selectedOption: selectedOption
  };

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json('exist');
    } else {
      await collection.create(data);
      res.json('notexist');
    }
  } catch (e) {
    res.json('fail');
  }
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
