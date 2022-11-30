import axios from "axios";

const api = axios.create({
  baseURL:
    "https://api.nasa.gov/planetary/apod?api_key=Gh7LsoD40iqLGmkwbaiEHPiy5KHMvbpNCr4pM5Ec",
});

export default api;
