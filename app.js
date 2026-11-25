;
const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    message: "Server is fine and good"
  });
});

app.get("/api/greeting", (req, res) => {
  res.status(200).json({
    message: "Hello from the sample route"
  });
});

app.post("/api/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      error: "Name and email are required"
    });
  }

  return res.status(201).json({
    message: "User created",
    user: { name, email }
  });
});

module.exports = app;
