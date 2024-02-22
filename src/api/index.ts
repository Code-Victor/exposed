import axios, { AxiosError } from "axios";
import { GetPostsResponse } from "./types";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

const api = axios.create({
  baseURL: BASE_URL,
});

// Error logger
function errorLogger() {
  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (
      error: AxiosError<{
        message?: string;
      }>
    ) => {
      const url = error.response?.config.url as string;
      const method = error.response?.config.method as string;
      const status = error.response?.status as number;
      const message = error.response?.data?.message as string;
      console.log(`API Error -> ${url}(${status})[${method}]: ${message}`);
      return Promise.reject(error);
    }
  );
}
errorLogger();

function getToken() {
  return "token";
}
function tokenInterceptors({ log = false } = {}) {
  const tokenInterceoptor = api.interceptors.request.use(
    async (config) => {
      const token = await getToken();
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      log ? console.log(`using access token : `, token) : null;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return () => api.interceptors.request.eject(tokenInterceoptor);
}

export async function getPosts() {
  const eject = tokenInterceptors();
  const response = await api.get<GetPostsResponse>("/api/flashcards");
  eject();
  return response.data;
}

export async function createPost(data: { title: string; body: string }) {
  const eject = tokenInterceptors();
  const response = await api.post("/posts", data);
  eject();
  return response.data;
}
