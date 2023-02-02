import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFavourite } from "../Store/actions/FavouriteAction";

function MyCard(props){

  console.log(props)
const dispatch=useDispatch();
const fav=useSelector((state)=>state.favR.favourite);
const addMovie=(movie)=>{
  dispatch(addFavourite(fav.push(movie)))
 console.log(movie)
}
    return(
        // <div classNameName="card" style={{width: "18rem"}}>
        //     <img src={props.img} className="card-img-top" />
        //     <div className="card-body">
        //         <h5 className="card-title">{props.name}</h5>
        //         <p className="card-text">{props.desc}</p>
        //         {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        //     </div>
        // </div>
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
              <button type="button" className="btn btn-outline-primary mb-3" data-mdb-ripple-color="dark"  onClick={()=>addMovie(props)} >Add to Favourite</button>
             
            </div>
          </div>
        </div>
      </div>
    )
}

export default MyCard;