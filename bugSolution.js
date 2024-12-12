const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Solution:  Implement proper error handling using try...catch blocks within asynchronous middleware

app.get('/users', async (req, res) => {
  try {
    const users = await database.getUsers(); // Assume 'database.getUsers' is an async function
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Internal Server Error');
  }
});