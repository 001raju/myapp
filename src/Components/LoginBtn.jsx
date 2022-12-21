// import {useState} from "react"
import "./LoginBtn.css";

 function LoginBtn(){
    // const [isOpen, setIsOpen] = useState(false);
    // function displayLogin(){
    //   LoginBox.classList.add
    //}
    return (
      <>
        <div class = "btn">
            <button onClick ="displayLogin">Log In</button>
        </div>
        {/* <div class="loginBox">
          <div>
            <label htmlFor="">Name</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input type="password" />
          </div> */}
        {/* </div> */}
      </>
    );
}
export default LoginBtn;