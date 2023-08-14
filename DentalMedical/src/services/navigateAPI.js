//API FOR PAGINATION
import axios from 'axios';
const DataInstanceNavigate = axios.create({
    baseURL: "http://localhost:7357/NavigateService",
  });
  
  export const NavigateGetPosts = () => {
    return DataInstanceNavigate.get("/")
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  };