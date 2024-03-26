require("dotenv").config();

const express = require("express");
const app = express();
const youtubeApi = require("./routes/youtube");
const cors = require("cors")
const PORT = process.env.PORT || 3000;

app.use(cors());
// app.use("/api", dataRoutes);

app.get("/", (req, res) => {
  res.send("Hello World from the server!");
});

app.get("/api/title", async (req, res) => {
  try{
  const { videoId } = req.query;
  const response = await youtubeApi.getYoutubeSearch(videoId)
  res.send({ status: true, message: "Youtube video.", data: response });
  } catch(e){
    res.send({message: "Internal Server Error!", error: e})
  }
});

app.get("/api/comments", async (req, res) => {
  try{
  const { videoId } = req.query;
  const response = await youtubeApi.getCommentsThreads(videoId)
  res.send({ status: true, message: "Youtube comments.", data: response });
  } catch(e){
    res.send({message: "Internal Server Error!", error: e})
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
