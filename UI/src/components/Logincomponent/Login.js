import './Login.css';
import axios from 'axios';
import { __userapi } from "../../Apiurl";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();//creat instance of useNavigate
  const [output, setOutput] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleSubmit = () => {
    const userDetail = { "email": email, "password": password };

    axios.post(__userapi + "login", userDetail).then((response) => {
var userDetail = response.data.userList;
localStorage.setItem("token",response.data.token);
localStorage.setItem("_id",userDetail._id);
localStorage.setItem("name",userDetail.name);
localStorage.setItem("email",userDetail.email);
localStorage.setItem("password",userDetail.password);
localStorage.setItem("mobile",userDetail.mobile);
localStorage.setItem("city",userDetail.city);
localStorage.setItem("address",userDetail.address);
localStorage.setItem("gender",userDetail.gender);
localStorage.setItem("role",userDetail.role);
localStorage.setItem("info",userDetail.info);
localStorage.setItem("status",userDetail.status);

(userDetail.role=="admin")?navigate("/admin"):navigate("/user");
      // if (response.data.userList.role == "admin")
      //   setOutput("login successfull as a admin!!");
      // else
      //   setOutput("login successfull as a user!!");
    }).catch((error) => {
      setOutput("login unsuccesfull please verify your detail!!");
    });
  }
  return (
    <>
      {/* About Start */}
      <div className="container-fluid py-6 px-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <h1>Login here!!!</h1>
            <br />
            <font style={{ "color": "blue" }}>{output}</font>
            <form >
              <br />
              <div class="form-group">
                <label for="email">Email:</label>
                <br />  <br />
                <input type="Email" class="form-control" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <br />
              <div class="form-group">
                <label for="pwd">password:</label>
                <br />  <br />
                <input type="password" class="form-control" value={password} onChange={e => setPassword(e.target.value)} />
              </div>
              <br></br>
              <button type="button" onClick={HandleSubmit} class="btn btn-primary" >Submit</button>
            </form>
          </div>
        </div>
      </div>

      {/* About End */}
    </>
  )
}
export default Login;