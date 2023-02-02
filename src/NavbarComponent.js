import { useContext } from "react";
import { Link } from "react-router-dom";
import { LangContext } from "./Context/LangContext";
import { changeTheme } from "../src/Store/actions/ThemeAction";
import { useSelector, useDispatch } from "react-redux";




function NavbarComponent() {
    const { contextLang, setContextLang } = useContext(LangContext);
    const theme = useSelector((state) => state.themeR.theme);
    const dispatch = useDispatch()

    const handleTheme = () => {
        // dispatch(changeTheme(theme == "Ligth" ? "Dark" : "Ligth"))
        dispatch(changeTheme(theme == "Dark" ? "Ligth" : "Dark"))
    }

    const myfav = useSelector((state) => state.favR.favourite)
     console.log( myfav)
    
    
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand  text-light fw-bolder" href="#" >Movies</a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active  text-light mt-1" aria-current="page" to={"/"}>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link  text-light mt-1" to="/register">Register</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link  text-light mt-1" to="/login">Login</Link>
                            </li>
                            <li class="nav-item">
                                <h1 class="nav-link  text-light mt-2" onClick={() => setContextLang(contextLang == "AR" ? "EN" : "AR")} style={{ cursor: 'pointer' }}>{contextLang}</h1>
                            </li>
                            <li className="nav-item">
                                <i class="fa-solid fa-circle-half-stroke nav-link mt-2 text-light" onClick={() => handleTheme()}> </i>
                                {/* <button className="nav-link btn btn-info" onClick={() => handleTheme()}>  {theme == "Dark" ? "Ligth" : "Dark"} </button> */}
                            </li>
                            <li class="nav-item" style={{marginLeft:"1100px"}}>
                                <Link class="nav-link  text-light mt-1" to="/favourite"><i class="fa-solid fa-heart"></i>{myfav.lenght}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavbarComponent