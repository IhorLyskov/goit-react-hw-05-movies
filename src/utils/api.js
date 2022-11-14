import axios from 'axios';

const KEY = '59b490478b7d8f1129f5bb9350f6c53c';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

axios.defaults.params = {
  api_key: KEY,
};

export async function searchMovies(query) {
  const { data } = await axios.get(`/search/movie?&query=${query}`);
  return data.results;
}

export async function getMovieDetails(movieId) {
  const { data } = await axios.get(`/movie/${movieId}`);
  return data;
}

export async function getCast(movieId) {
  const { data } = await axios.get(`/movie/${movieId}/credits`);
  return data.cast;
}

export async function getReviews(movieId) {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);
  return data.results;
}

// const ChildComponent = () => {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     const controller = new AbortController();

//     async function fetchData() {
//       try {
//         const res = await axios.get(
//           'https://jsonplaceholder.typicode.com/todos',
//           {
//             signal: controller.signal,
//           }
//         );
//         setTodos((prevTodos) => [...prevTodos, ...res.data]);
//       } catch (error) {}
//     }

//     fetchData();

//     return () => {
//       controller.abort();
//     };
//   }, []);
