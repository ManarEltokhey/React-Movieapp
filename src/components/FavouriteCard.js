import { useDispatch, useSelector } from "react-redux";
import { deleteFavourite } from "../Store/actions/FavouriteAction";
function FavouriteCard(props){
const dispatch=useDispatch();
const fav=useSelector((state)=>state.favR.favourite);
const removeMovie=(movie)=>{
    dispatch(deleteFavourite(fav.splice(movie,1)))
}


    return(
        <div className="card mb-3 bg-dark" >
        <div className="row g-0">
          <div className="col-md-4">
              <img src={`https://image.tmdb.org/t/p/w500/${props.img}`} className="img-fluid rounded-start" alt="..." style={{height:"50%"}}/> 
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-light fw-bolder" style={{marginTop:"50px"}}>{props.name}</h5>
              <br/>
              <p className="card-text text-light">{props.overview}</p>
              <button type="button" className="btn btn-outline-primary mb-3 ms-2" data-mdb-ripple-color="dark"  onClick={()=>removeMovie(props)}>Delete<i class="fa-solid fa-trash"></i></button>
             
            </div>
          </div>
        </div>
      </div>
    
)}
export default FavouriteCard;