import './EditPassword.css';
import axios from 'axios';
import { __userapi } from "../../Apiurl";
import { useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
function EditPassword() {
  const navigate=useNavigate();
  const [output, setOutput] = useState();
  const [opass, setopass] = useState();
  const [npass, setNpass] = useState();
  const [cnpass, setCNpass] = useState();
  const HandleSubmit = () => {
   axios.get(__userapi+"fetch?email="+localStorage.getItem("email")+"&password="+opass).then(()=>{
if(npass===cnpass){
  let updateDetail={"condition_obj":{"email":localStorage.getItem("email")},"content_obj":{"password":cnpass}}
  axios.patch(__userapi+"update",updateDetail).then((response)=>{
setOutput("password change successfully!!!");
setopass("");
setNpass("");
setCNpass("");
  }).catch((error)=>{
    setOutput("password not change successfully!!!");
    setopass("");
    setNpass("");
    setCNpass("");
  })
}
else{
  setOutput("New and confirm password is not matched");
  setNpass("");
setCNpass("");
}
   }).catch((error)=>{
setOutput("Old password not matched !!!");
setopass("");
setNpass("");
setCNpass("");
   });
    
  }
  return (
    <>
      {/* About Start */}
      <div className="container-fluid py-6 px-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <h1>Change password Here !!!</h1>
            <font style={{ "color": "blue" }}>{output}</font>
            {/* <br /> */}
            <form >
              <br />
              <div class="form-group">
                <label for="old pass">Old password:</label>
                <br />  <br />
                <input type="password" class="form-control" value={opass} onChange={e => setopass(e.target.value)} />
              </div>
              <br />
              <div class="form-group">
                <label for="New Pass">New Password:</label>
                <br /><br />
                <input type="password" class="form-control" value={npass} onChange={e => setNpass(e.target.value)} />
              </div>
              <br />
              <div class="form-group">
                <label for="cnpass">Confirm new password:</label>
                <br /><br />
                <input type="password" class="form-control" value={cnpass} onChange={e => setCNpass(e.target.value)} />
              </div>
              <br />
              <br />
              <button type="button" onClick={HandleSubmit} class="btn btn-primary" >Change password</button>
            </form>
          </div>
        </div>
      </div>

      {/* About End */}
    </>
  )
}
export default EditPassword;