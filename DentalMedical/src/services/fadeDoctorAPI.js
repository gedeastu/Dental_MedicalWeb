//API FOR FadeDoctor
import axios from 'axios';
const DataInstanceFadeDoctor = axios.create({
    baseURL: "http://localhost:7357/FadeDoctor",
  });
  
  export const FadeDoctorGetPosts = () => {
    return DataInstanceFadeDoctor.get("/")
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  };