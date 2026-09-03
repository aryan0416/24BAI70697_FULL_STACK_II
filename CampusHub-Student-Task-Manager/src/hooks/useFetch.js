import { useState, useEffect } from 'react';

/**
 * Custom Hook: useFetch
 * Fetches data from a target URL, returns { data, loading, error }
 */
export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        if (isMounted) {
          // If response is an array of posts, slice to first 10
          const result = Array.isArray(data) ? data.slice(0, 10) : data;
          setData(result);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message || 'An error occurred while fetching data');
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
