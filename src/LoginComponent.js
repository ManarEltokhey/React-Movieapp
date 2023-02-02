import './LoginComponentStyle.css';
import loginimg from './004.jpg';
import { useState } from "react";
function LoginComponent(){
    const [userData, setUserData] = useState({
        name: "",
        email: ""
    })

    const [error, setErros] = useState({
        password: null,
        email:null
    })
    // show and hide password
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
      };
    //   RegExp
    // const [email, setEmail] = useState("");
    // const [message, setMessage] =useState("");
    // const emailValidation = () => {
    //     const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    //     if (regEx.test(email)) {
    //        setMessage("Valid Email");
    //        } else if (!regEx.test(email`enter code here`) && email !== "") {
    //             setMessage("Invalid email");
    //        } else {
    //            setMessage("");
    //        }
    //   }
    const validEmail = new RegExp('^[A-z][A-z]{2,}[0-9]*@(gmail|yahoo)(.com|.eg|.edu)$')
    const changeUserData = (e) => {
        if(e.target.name == "password"){
            setUserData({
                ...userData,
                name: e.target.value
            })

            setErros({
                ...error, 
                password: e.target.value.length == 0 ? "This Field is Required" : e.target.value.length < 8 ? "Min Length is 8 Characters" : null
            })
        
    // }else if(e.target.name=="email"){
    //     setUserData({
    //         ...userData,
    //         email: e.target.value
    //     })

    //     setErros({
    //         ...error,
    //         email: e.target.value.length == 0 ? "This Field is Required" :validEmail.test(e.target.value) ?'':'Email not valid': null 
           
    //     })
   
}else{
    setUserData({
        ...userData,
        email: e.target.value
    })

    setErros({
        ...error,
        email: e.target.value.length == 0 ? "This Field is Required" :validEmail.test(e.target.value) ?'':'Email not valid' 
        // email :validEmail.test(e.target.value) ?'':'Email not valid'
       
    })
}

    }

    const submitData = (e) => {
        e.preventDefault()
    }

    return(
      
<>
<div className='container mt-5'>
    <div className='row'>
<section className=" text-center text-lg-start">
  
  <div className="card mb-3">
    <div className="row g-0 d-flex align-items-center">
      <div className="col-lg-4 d-none d-lg-flex">
         <img src={loginimg} alt="Trendy Pants and Shoes" className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" /> 
      </div>
      <div className="col-lg-8">
      
        <div className="card-body py-5 px-md-5 ">

          <form onSubmit={(e) => submitData(e)} >
           
            <div className="form-outline mb-4 ">
            <label className="form-label text-dark">Email address</label>
            <div className='col-10'>
              <input type="text" id="form2Example1" name="useremail"   className={`form-control ${error.email && "border-danger"}`}
                value={userData.e} onChange={(e) => changeUserData(e)} />
              <p className="text-danger"> {error.email} </p>
              {/* <button onClick={emailValidation}>Check</button>
               <p className="message text-danger">{message}</p> */}
            </div></div>

            
            <div className="form-outline mb-4">
            <label className="form-label text-dark" >Password</label>
           
           <div className='row'>
          <div className='col-10'>
              <input name="password" type={passwordShown ? "text" : "password"}
                className={`form-control ${error.password && "border-danger"}`}
                value={userData.name} onChange={(e) => changeUserData(e)} /></div>
                  <div className='col-2'>
                <i class="fa-solid fa-eye-slash text-dark" onClick={togglePassword} style={{margin:"0 -50px" ,marginTop:"10px"}}></i>
                </div>
                </div>
                 
                 {/* <button onClick={togglePassword}>Show Password</button> */}
                 <p className="text-danger">  {error.password}  </p>
              
            </div>

           
            <div className="row mb-4">
              <div className="col d-flex justify-content-center">
               
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                  <label className="form-check-label text-dark" for="form2Example31"> Remember me </label>
                </div>
              </div>

              <div className="col">
                
                <a href="#!">Forgot password?</a>
              </div>
            </div>

           
            <button type="submit" className="btn btn-primary btn-block mb-4" disabled = {error.password || error.email }>Login</button>

          </form>

        </div>
      </div>
    </div>
  </div>
  
</section>
</div>
</div>
</>

    )
}
export default LoginComponent