import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "https://y-project-yyer.onrender.com"; // reminder: replace with your real Render URL

export const useFetch = (slug: string) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    axios.get(`${BASE_URL}${slug}`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        setError(err);
      });
  }, [slug]);

  return { data, error };
};
