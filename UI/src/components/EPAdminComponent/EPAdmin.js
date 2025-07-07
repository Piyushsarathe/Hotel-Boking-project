import './EPAdmin.css';
import axios from 'axios';
import { __userapi } from "../../Apiurl";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function EPAdmin() {
  const navigate=useNavigate();
  const [output, setOutput] = useState("");
  const [name, setName] = useState("");//creat state 
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [Gender, setGender] = useState("");
  const [M,setM]=useState();
  const [F,setF]=useState();

  useEffect(()=>{
    axios.get(__userapi+"fetch?email="+localStorage.getItem//jiska mail match ho usi ka data change hoga 
      ("email")).then((response)=>{
var userDetail=response.data[0];
setName=(userDetail.name);
setEmail=(userDetail.email);
setMobile=(userDetail.mobile);
setAddress=(userDetail.address);
setCity=(userDetail.city);
//setGender=(userDetail.grnder)
if(userDetail.gender==="male")
  setM("checked");
else
setF("checked");
      }).catch((error)=>{
     console.log("error");   
      })
  },[])

  const HandleSubmit = () => {
    const updateDetail={"condition_obj":{"email":email},"content_obj":{"name":name,"mmobile":mobile,
      "address":address,"city":city,"gender":Gender}}
    axios.patch(__userapi+"update",updateDetail).then
    ((response)=>{
      alert("profile edited successfully");
      // Navigate("/manageuser");
      navigate("/EPAdmin");
    }).catch((error)=>{
    alert("profile not edited successfully");
    // Navigate("/manageuser");
     navigate("/EPAdmin");
    })
  }
  return (
    <>
      {/* About Start */}
      <div className="container-fluid py-6 px-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <h1>Edit profile here !!!</h1>
            <br />
            <br />
            <font style={{ "color": "blue" }}>{output}</font>
            <br />
            <form >
              <div class="form-group">
                <label for="Name">Name:</label>
                <br />  <br />
                <input type="text" class="form-control" value={name} onChange={e => setName(e.target.value)} />
              </div>
              <br />
              <div class="form-group">
                <label for="email">Email:</label>
                <br />  <br />
                <input type="Email" class="form-control" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              {/* <br />
              <div class="form-group">
                <label for="pwd">password:</label>
                <br />  <br />
                <input type="password" class="form-control" value={password} onChange={e => setPassword(e.target.value)} />
              </div> */}
              <br />
              <div class="form-group">
                <label for="mobile">mobile:</label>
                <br /><br />
                <input type="text" class="form-control" value={mobile} onChange={e => setMobile(e.target.value)} />
              </div>
              <br />
              <div class="form-group">
                <label for="Add">Address:</label>
                <br />  <br />
                <textarea class="form-control" value={address} onChange={e => setAddress(e.target.value)}></textarea>
              </div>
              <br />
              <div class="form-group">
                <label for="city">City:</label>
                <br />  <br />
                <select class="form-control" value={city} onChange={e => setCity(e.target.value)}>
                  <option >select city</option>
                  <option >Indore</option>
                  <option >Bhopal</option>
                  <option >Dewas</option>
                  <option >Jabalpur</option>
                </select>
                <br />
              </div>
              <br />
              <div class="form-group">
                <label for="gender">Gender:</label>
                <br />  <br />
                Male:<input type="radio" class name="gender" value="male" onChange={e => setGender(e.target.value)} />
                &nbsp;&nbsp;&nbsp;&nbsp;
                Female:<input type="radio" class name="gender" value="female" onChange={e => setGender(e.target.value)} />
              </div>
              <br />
              <br />
              <button type="button" onClick={HandleSubmit} class="btn btn-primary" >Submit</button>
            </form>
          </div>
        </div>
      </div>

      {/* About End */}
    </>
  )
}
export default EPAdmin;