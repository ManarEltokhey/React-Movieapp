import './RegistrationComponentStyle.css';
import loginimg from './004.jpg';
import { useState } from 'react';
function RegistrationComponent() {
    // const initialValues={username:"",email:"",password:""};
    // const [formValues,setFormValues]=useState(initialValues);
    const [userData, setUserData] = useState({
        name: "",
        email: ""
    })

    const [error, setErros] = useState({
        password: null,
        email: null,
        username: null,
        userName: null,
    })
    // show and hide password
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    const validEmail = new RegExp('^[A-z][A-z]{2,}[0-9]*@(gmail|yahoo)(.com|.eg|.edu)$')
    const validUserName = new RegExp('^[A-Za-z][A-Za-z0-9]{3,40}$')
    const changeUserData = (e) => {
        if (e.target.name == "password") {
            setUserData({
                ...userData,
                name: e.target.value
            })

            setErros({
                ...error,
                password: e.target.value.length == 0 ? "This Field is Required" : e.target.value.length < 8 ? "Min Length is 8 Characters" : null
            })
        } else if (e.target.name == "username") {
            setUserData({
                ...userData,
                name: e.target.value
            })

            setErros({
                ...error,
                username: e.target.value.length == 0 ? "This Field is Required" : e.target.value.length < 3 ? "Min Length is 3 Characters" : null
            })
        } else if (e.target.name == "useremail") {
            setUserData({
                ...userData,
                email: e.target.value
            })

            setErros({
                ...error,
                email: e.target.value.length == 0 ? "This Field is Required" : validEmail.test(e.target.value) ? '' : 'Email not valid'
            })
        } else if (e.target.name == "userName") {
            setUserData({
                ...userData,
                userName: e.target.value
            })

            setErros({
                ...error,
                userName: e.target.value.length == 0 ? "This Field is Required" : validUserName.test(e.target.value) ? '' : 'Whitespace is not allowed'
            })
        } else {
            setUserData({
                // ...userData,
                // email: e.target.value
            })

            setErros({
                // ...error,
                // email: e.target.value.length == 0 ? "This Field is Required" : validEmail.test(e.target.value) ? '' : 'Email not valid'
            })
        }

    }

    const submitData = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <section class="text-center text-lg-start">

                        <div className="container py-4">
                            <div className="row g-0 align-items-center">
                                <div className="col-lg-6 mb-5 mb-lg-0">
                                    <div className="card cascading-right divstyle" >
                                        <div className="card-body p-5 shadow-5 text-center">
                                            <h2 className="fw-bold mb-5">Sign up now</h2>
                                            <form onSubmit={(e) => submitData(e)}>

                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <label className="form-label" for="form3Example1">Name</label>
                                                            <input type="text" id="form3Example1" name='username' className={`form-control ${error.username && "border-danger"}`}
                                                                value={userData.e} onChange={(e) => changeUserData(e)} />
                                                            <p className="text-danger"> {error.username} </p>

                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <label className="form-label" for="form3Example2">User name</label>
                                                            <input type="text" id="form3Example2" name='userName' className={`form-control ${error.userName && "border-danger"}`}
                                                                value={userData.e} onChange={(e) => changeUserData(e)} />
                                                            <p className="text-danger"> {error.userName} </p>

                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="form-outline mb-4">
                                                    <label className="form-label" for="form3Example3">Email address</label>
                                                    <input type="email" id="form3Example3" name="useremail" className={`form-control ${error.email && "border-danger"}`}
                                                        value={userData.e} onChange={(e) => changeUserData(e)} />
                                                    <p className="text-danger"> {error.email} </p>

                                                </div>


                                                <div className="form-outline mb-4">
                                                <label className="form-label" for="form3Example4">Password</label>
                                                
                                                    <input type="password" id="form3Example4"  name='password'  className={`form-control ${error.password && "border-danger"}`}
                value={userData.name} onChange={(e) => changeUserData(e)} />
                 
                
                 
                 <p className="text-danger">  {error.password}  </p>
              
            </div>
                                                    


                                                <button type="submit" className="btn btn-primary btn-block mb-4">
                                                    Sign up
                                                </button>


                                                <div className="text-center">
                                                    <p>or sign up with:</p>
                                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </button>

                                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                                        <i className="fab fa-google"></i>
                                                    </button>

                                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                                        <i className="fab fa-twitter"></i>
                                                    </button>

                                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                                        <i className="fab fa-github"></i>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6 mb-5 mb-lg-0">
                                    <img src={loginimg} class="w-100 rounded-4 shadow-4" alt="img not found" />
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
        </>
    )
}
export default RegistrationComponent