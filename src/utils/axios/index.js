import axios from "axios";
import { baseUrl } from "../config";

export const httpBase = axios.create({
  baseURL: baseUrl.weather,
  //   headers: {
  //     "Content-Type": "application/json;charset=UTF-8",
  //   },
});
