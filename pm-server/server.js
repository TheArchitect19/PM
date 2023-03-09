const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  res.send("Welcome to PM");
  // res.status(200).json({
  //   success: true,
  //   data: {
  //     message: 'WELCOME TO PM',
  //   },
  // });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on this port ${PORT}`));