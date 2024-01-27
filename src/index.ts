import { app } from "./app.js";
import { connectDB } from "./db/db.js";





connectDB();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello nepal")
})
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


