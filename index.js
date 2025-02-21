const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.post('/bfhl', (req, res) => {
  try {
    const { data } = req.body;
    
    if (!Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        error: "Input data must be an array"
      });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item) && typeof item === 'string');

    const user_id = "john_doe_17091999";
    const email = "john@example.com";
    const roll_number = "ABCD123";

    res.json({
      is_success: true,
      user_id,
      email,
      roll_number,
      numbers,
      alphabets
    });
  } catch (error) {
    res.status(500).json({
      is_success: false,
      error: "Internal server error"
    });
  }
});

app.get('/bfhl', (req, res) => {
  res.json({
    operation_code: 1
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
