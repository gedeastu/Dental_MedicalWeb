//API FOR PAGINATION
import axios from 'axios';
const DataInstancePagination = axios.create({
    baseURL: "http://localhost:7357/Pagination",
  });
  
  export const PaginationGetPosts = () => {
    return DataInstancePagination.get("/")
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  };