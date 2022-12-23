const LoginPage = () => {
    let personName = document.getElementById("IdName");
    let personPassword = document.getElementById("IdPassword");

    const displayInfo =()=>{
        
            console.log(personName)
            console.log(personPassword)
        
    };
    return (
      <div>
        <div class="container">
          <div>
            <label>name</label>
            <input id="IdName" type="text" />
          </div>
          <div>
            <label>password</label>
            <input id="IdPassword" type="password" />
          </div>
          <div>
            <button onClick = {displayInfo} type="buton">
              ok
            </button>
          </div>
        </div>
      </div>
    );
};
export default LoginPage;