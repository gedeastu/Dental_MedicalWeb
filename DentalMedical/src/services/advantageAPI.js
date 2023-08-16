//API FOR PAGINATION
import axios from 'axios';
const DataInstanceAdvantage = axios.create({
    baseURL: "http://localhost:7357/Advantage",
  });
  
  export const AdvantageGetPosts = () => {
    return DataInstanceAdvantage.get("/")
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  };