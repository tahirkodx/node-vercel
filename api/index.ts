// const express = require("express");
// const app = express();

// app.get("/", (req, res) => res.send("Express on Vercel"));
// const PORT = 3001
// app.listen(PORT, () => console.log(`Server ready on port ${PORT}.`));

// module.exports = app;

require("dotenv").config();

const express = require("express");
// const dataRoutes = require("./routes/dataRoutes");
const app = express();
const youtube = require("./api/getVideoTitle");
const cors = require("cors")
const PORT = process.env.PORT || 3000;
// const apiKey = process.env.YOUTUBE_API_KEY || 'AIzaSyDuP-DCnFOUqE0whVUCgC6Fg2c1T7zlan8';

app.use(cors());
// app.use("/api", dataRoutes);

app.get("/", (req, res) => {
  res.send("Hello World from the server!");
});

app.get("/api/title", async (req, res) => {
    res.send({message: "/api/title"})
//   try{
//   const { videoId } = req.query;
//   const response = await youtube.getYoutubeSearch(videoId)
//   res.send({ status: true, message: "Youtube video.", data: response });
//   } catch(e){
//     res.send({message: "Internal Server Error!", error: e})
//   }
});

app.get("/api/comments", async (req, res) => {
    res.send({message: "/api/comments"})
//   try{
//   const { videoId } = req.query;
//   const response = await youtube.getCommentsThreads(videoId)
//   res.send({ status: true, message: "Youtube comments.", data: response });
//   } catch(e){
//     res.send({message: "Internal Server Error!", error: e})
//   }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
