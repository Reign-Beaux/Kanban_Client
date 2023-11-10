import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";

export const useAxios = () => {
  const abortController = new AbortController();
  const signal = abortController.signal;
  const apiUrl = import.meta.env.VITE_API_URL;

  const get = async <T>(endpoint: string) => {
    const response: AxiosResponse<T> = await axios.get(`${apiUrl}/${endpoint}`, {
      signal,
    });
    return response.data;
  };

  const post = async <T, R>(endpoint: string, payload: R) => {
    const response: AxiosResponse<T> = await axios.post(
      `${apiUrl}/${endpoint}`,
      payload,
      { signal }
    );
    return response.data;
  };

  const put = async <T, R>(endpoint: string, payload: R) => {
    const response: AxiosResponse<T> = await axios.put(
      `${apiUrl}/${endpoint}`,
      payload,
      { signal }
    );
    return response.data;
  };

  const remove = async <T>(endpoint: string) => {
    const response: AxiosResponse<T> = await axios.delete(`${apiUrl}/${endpoint}`, {
      signal,
    });
    return response.data;
  };

  useEffect(() => {
    return () => {
      abortController.abort();
    };
  }, []);

  return { get, post, put, remove };
};
