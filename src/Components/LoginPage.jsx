 import './LoginPage.css';

 const LoginPage = () => {
    // let personName = document.getElementById("IdName");
    // let personPassword = document.getElementById("IdPassword");

    const displayInfo =()=>{
        
            console.log("The name is "+ document.getElementById("IdName").value);
            console.log("The password is " + document.getElementById("IdPassword").value);
            document.querySelector(".bigModal").style.display = "none";
            
        
    };
    return (
      <div class ='bigModal'>
        <div class='container'>
          <div>
            <label for = "IdName">name</label>
            <input id="IdName" type="text" />
          </div>
          <div>
            <label for = "IdPassword">password</label>
            <input id="IdPassword" type="password" />
          </div>
          <div>
            <button  onClick={displayInfo} type="buton">
              ok
            </button>
          </div>
        </div>
      </div>
    );
};
export default LoginPage;