const axios = require("axios");
const { YoutubeDataAPI } = require("youtube-v3-api")
const youtube = new YoutubeDataAPI(process.env.YOUTUBE_API_KEY || 'AIzaSyDuP-DCnFOUqE0whVUCgC6Fg2c1T7zlan8');

const api = {
  getCommentsThreads: async (videoId) => {
    try {
      const response = await youtube.searchCommentThreads(videoId)
      return response;
    } catch(e){
      throw e;
    }
  },
  getYoutubeSearch: async (videoId) => {
    try {
      const response = await youtube.searchVideo(videoId);
      const videoTitle = response.items[0].snippet.title;
      return { title: videoTitle };
    } catch(e){
      throw e;
    }
  }
};

module.exports = api;