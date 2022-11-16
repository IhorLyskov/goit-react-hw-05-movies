import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { constAxios } from '../Constants/Constants';

const useTrending = initPage => {
  const [page, setPage] = useState(initPage);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const response = await axios.get(
          `${constAxios.BASE_URL}/trending/movie/day`,
          {
            params: {
              api_key: constAxios.KEY,
              page,
            },
          }
        );
        setMovies(response.data);
      } catch {
        setMovies(-1);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [page]);

  const somePage = useMemo(() => numPage => setPage(numPage), []);

  return { movies, somePage };
};
export default useTrending;
