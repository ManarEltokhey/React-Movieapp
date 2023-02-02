import { useSelector } from "react-redux";
import FavouriteCard from "../components/FavouriteCard";

function Favourite() {
    const data = useSelector((state) => state.favR.favourite)
    // console.log(data)
    return (
        <>
            {data.map((singleMovie) => {
                console.log(data.lenght)
                return (
                    <FavouriteCard key={singleMovie.name} img={singleMovie.img}
                       
                    name={singleMovie.name}
                        overview={singleMovie.overview} />
                )
            })}
        </>
    )

}
export default Favourite;