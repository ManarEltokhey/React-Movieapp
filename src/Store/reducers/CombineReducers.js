import {combineReducers} from "redux"
import FavouriteReducer from "./FavouriteReducer"
import LoaderReducer from "./LoaderReducer"
import MoviesReducer from "./MoviesReducer"
import ThemeReducer from "./ThemeReducer"



export default combineReducers  ({
    listR: MoviesReducer,
    themeR: ThemeReducer,
    loaderR: LoaderReducer,
    favR:FavouriteReducer,

})