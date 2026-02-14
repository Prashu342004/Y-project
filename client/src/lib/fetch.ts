import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (slug: string) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    axios.get(`https://y-project-yyer.onrender.com${slug}`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        setError(err);
      });
  }, [slug]);

  return { data, error };
};
