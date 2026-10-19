const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.json({
    message: "server running",
    environment: process.env.NODE_ENV || "development",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
  });
});

app.get("/students", (req, res) => {
  const students = [
    { id: 1, name: "Alice", course: "Mathematics" },
    { id: 2, name: "Bob", course: "Physics" },
    { id: 3, name: "Charlie", course: "Chemistry" },
  ];
  res.json(students);
});

app.post("/students", (req, res) => {
  const { name, course } = req.body;
  res.status(201).json({
    message: "Student recieved successfully",
    student: {
      name,
      course,
    },
  });
});

// Start the server
app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${port}`);
});
