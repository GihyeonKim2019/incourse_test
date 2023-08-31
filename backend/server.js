const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;

let clickCount = 0;

app.use(cors()); // For cross-origin requests

app.get("/click", (req, res) => {
  if (clickCount < 100) {
    clickCount++;
    res.json({
      success: true,
      message: "Congratulations! You’re one of the first 100!",
    });
  } else {
    res.json({ success: false, message: "Sorry! The limit has been reached." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
