import axios from "axios";

const API_URL = "https://6696ae1b0312447373c3623b.mockapi.io";

export const mockApi = axios.create({
  baseURL: API_URL,
});
