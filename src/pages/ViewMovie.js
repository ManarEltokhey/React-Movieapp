import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyCard from "../components/Card";
import { axiosInstance } from "../Network/axiosInstance";


function ViewMovie(){
    
     const param = useParams()
    // const id= useParams()
    //   console.log(id)
    //console.log({id:2}) 

    const[myMovie, setMyMovie] = useState({})

    useEffect(() => {
        axiosInstance.get(`/${param.id}?api_key=1583bd4a7b0da462480c756403c9bc65`)
        .then((movie) => setMyMovie(movie.data))
        .catch((err) => console.log(err))
    }, [])

    return(
        <>
           
             <MyCard img={myMovie.poster_path}  name={myMovie.original_title}  overview={myMovie.overview} /> 
        </>
       
    )
}

export default ViewMovie;