import { api } from "./axiosInstance";
import { useEffect, useState } from "react";

export const useFetch = (slug: string, method: 'get' | 'post' | 'put' | 'delete' | 'patch') => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    api[method](`${slug}`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        setError(err);
      });
  }, [slug]);

  return { data, error };
};
