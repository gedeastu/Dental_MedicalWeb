//API FOR PAGINATION
import axios from 'axios';
const DataInstanceOurSpecialist = axios.create({
    baseURL: "http://localhost:7357/OurSpecialist",
  });
  
  export const OurSpecialistGetPosts = () => {
    return DataInstanceOurSpecialist.get("/")
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  };