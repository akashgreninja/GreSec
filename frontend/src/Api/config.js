/**
 * @dev This is the api config file for the website dont touch if not necessary
 */

import axios, { AxiosInstance } from "axios";

export const createApiConfig = () => {
  const instance = axios.create(
    {
      baseURL: `http://127.0.0.1:4001/`,
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  return instance;
};