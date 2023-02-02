
import { axiosInstance } from "../../Network/axiosInstance";


export const getMoviesAction = (n) => (dispatch) => {
  return axiosInstance.get(`/popular?api_key=1583bd4a7b0da462480c756403c9bc65&page=${n}`
    // return axios.get( `https://api.themoviedb.org/3/movie/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c&page=${n}`,
    // params: {
    //   _page: 3,
    //   _limit: 5,
    // },
  )
    .then((res) => {
      dispatch({
        type: "MOVIESLISTT",
        payload: res.data.results,
      });
    })
    .catch((err) => console.log(err));
};
