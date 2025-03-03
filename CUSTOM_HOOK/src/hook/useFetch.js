import { useState, useEffect } from "react";
// const url="https://jsonplaceholder.typicode.com/users";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsPending(true);
    async function fetchData() {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw Error("Something Went Wrong");
        }
        const resData = await res.json();
        setData(resData);
        setIsPending(false);
      } catch (error) {
        setError(error.message);
        setIsPending(false);
      }
    }
    fetchData();
  }, [url]);

  return { data: data, isPending: isPending, error: error };
}

export default useFetch;
