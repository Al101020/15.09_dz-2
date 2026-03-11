import { useState, useEffect } from 'react';

function useJsonFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!url) return;

    async function fetchData() {
      setLoading(true);
      setError(null);
      setData(null);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          if (response.status === 500) {
            setError(`HTTP error! status: 500`);
          }
        }
        const json = await response.json();
        setData(json);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      }

      fetchData();
    }, [url]);

  return [data, loading, error];  
}

export default useJsonFetch;
