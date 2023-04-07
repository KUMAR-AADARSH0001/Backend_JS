import express from "express";
import student from "./routes/student.js";
const app = express();
const port = process.env.port || "3000";

app.use("/student", student);

app.listen(port, () => {
  console.log(`Server running at http://localhost${port}`);
});
