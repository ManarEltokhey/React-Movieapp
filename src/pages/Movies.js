import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LangContext } from "../Context/LangContext";
import { axiosInstance } from "../Network/axiosInstance";
import {useDispatch, useSelector} from "react-redux"
import { getMoviesAction } from "../Store/actions/MovieAction";
import LoaderComponent from "../components/Loader";
import { Loader } from "../Store/actions/LoaderAction";

function Movies() {


    const [movieData, setmovieData] = useState([])
    const {contextLang,setContextLang}=useContext(LangContext)
    const dispatch = useDispatch()
    const mylistcom = useSelector((state) => state.listR.list)
    const isLoading = useSelector((state) =>state.loaderR.isLoading)
    let[pageNumber,setPageNumber]=useState(1)
    useEffect(() => {
        axiosInstance.get(`/popular?api_key=1583bd4a7b0da462480c756403c9bc65&page=${pageNumber}`
    )
             .then((data) =>{ setmovieData(data.data.results);dispatch(Loader(false))})
            // .then((data) =>{ setmovieData(data.data.results);dispatch(getMoviesAction(pageNumber))})
            .catch((err) => console.log(err))
//    dispatch(getMoviesAction(pageNumber))
    }, [pageNumber])
console.log(pageNumber)
    return (
        <>
        <body className="bg-dark">
            <div className="container " >
                        <div className="row " >
                         {isLoading ?   <LoaderComponent/> :       
                               movieData.map((singleMovie) => {
                  {/* {mylistcom.map((singleMovie) => { */}
                return (

                    <div className="col-3 bg-dark" >
                    
                                <div class="card-group border border-dark">
                                    <div class="card border border-dark" style={{height:"30%"}}>
                                        <img src={`https://image.tmdb.org/t/p/w500${singleMovie.poster_path}?api_key=1583bd4a7b0da462480c756403c9bc65`} />
                                        <div class="card-body bg-dark" style={{height:"40%"}}>
                                            <h4 class="card-text text-light" key={singleMovie.id}> <Link to={`/view/${singleMovie.id}`}>{singleMovie.original_title}</Link></h4>
                                        </div>
                                        <div class="card-footer bg-dark"  style={{height:"10%"}}>
                                            <small class="text-light">{singleMovie.release_date}</small>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                           
                   
                )

                })}
             
                        </div>
                    </div>
                    <button type="button" className="btn btn-outline-primary mb-3 me-2" data-mdb-ripple-color="dark"  onClick={()=>setPageNumber(pageNumber+1)}>Next</button>
                    <button type="button" className="btn btn-outline-primary mb-3" data-mdb-ripple-color="dark"  onClick={()=>setPageNumber(--pageNumber)}>Perivious</button>
                    <br/>
                    <button type="button" className="btn btn-outline-primary mb-3" data-mdb-ripple-color="dark"  onClick={()=>setContextLang(contextLang=="AR"?"EN":"AR")}>change Language</button>
                   
                    </body>
        </>

    )
}

export default Movies;