import './ManageUser.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { __userapi } from '../../Apiurl';
import { useNavigate } from 'react-router-dom';
function ManageUser() {
  const navigate=useNavigate();
  const [userDetail, setuserDetail] = useState([]);

  useEffect(() => {
    axios.get(__userapi + "fetch?role=user").then((response) => {
      setuserDetail(response.data);//userDetail is a array
      // console.log(response.data);
      //console.log(userDetail);
    }).catch((error) => {
      console.log(error);
    })
  });
  const handleChange=(_id,s)=>{//s=string
if(s==="verify"){
const updateDetail={"condition_obj":{"_id":_id},"content_obj":{"status":1}}
axios.patch(__userapi+"update",updateDetail).then
((response)=>{
  alert("user verify succesfully");
  // Navigate("/manageuser");
  navigate("/manageuser");
}).catch((error)=>{
alert("user not verifyed");
// Navigate("/manageuser");
 navigate("/manageuser");
})
}
else if(s==="block"){
  const updateDetail={"condition_obj":{"_id":_id},"content_obj":{"status":0}}
axios.patch(__userapi+"update",updateDetail).then
((response)=>{
  alert("user Block succesfully");
  // Navigate("/manageuser");
  navigate("/manageuser");
}).catch((error)=>{
alert("user not Block");
// Navigate("/manageuser");
 navigate("/manageuser");
})
}
else{
  const deleteDetail={"data":{"_id":_id}};
  axios.delete(__userapi+"delete",deleteDetail).then(()=>{
    alert("user deleted succesfully");
    navigate("/manageuser");
  }).catch(()=>{
    alert("user not deleted succesfully");
    navigate("/manageuser");
  })
}
  }
  return (
    <>
      {/* About Start */}
      <div className="container-fluid py-6 px-5">
        <div className="row g-5">
          <div className="col-lg-12">
            <h1>View and manage user detail</h1>
            {/* {
  userDetail.map((row)=>(
    <p>{row._id}</p>
  ))
} */}
            <table 
  className="table tabrl-bordered" 
  border={3} 
  cellPadding={10} 
  cellSpacing={10} 
  style={{ width: '100%', borderCollapse: 'collapse', margin: '20px 0' }}
>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2', textAlign: 'left' }}>
      <th style={{ padding: '10px', border: '1px solid #ddd' }}>regid</th>
      <th style={{ padding: '10px', border: '1px solid #ddd' }}>name</th>
      <th style={{ padding: '10px', border: '1px solid #ddd' }}>email</th>
      <th style={{ padding: '10px', border: '1px solid #ddd' }}>mobile</th>
      <th style={{ padding: '10px', border: '1px solid #ddd' }}>address</th>
      <th style={{ padding: '10px', border: '1px solid #ddd' }}>city</th>
      <th style={{ padding: '10px', border: '1px solid #ddd' }}>gender</th>
      <th style={{ padding: '10px', border: '1px solid #ddd' }}>info</th>
      <th style={{ padding: '10px', border: '1px solid #ddd' }}>status</th>
      <th style={{ padding: '10px', border: '1px solid #ddd' }}>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      userDetail.map((row) => (
        <tr key={row._id} style={{ borderBottom: '1px solid #ddd' }}>
          <td style={{ padding: '10px' }}>{row._id}</td>
          <td style={{ padding: '10px' }}>{row.name}</td>
          <td style={{ padding: '10px' }}>{row.email}</td>
          <td style={{ padding: '10px' }}>{row.mobile}</td>
          <td style={{ padding: '10px' }}>{row.address}</td>
          <td style={{ padding: '10px' }}>{row.city}</td>
          <td style={{ padding: '10px' }}>{row.gender}</td>
          <td style={{ padding: '10px' }}>{row.info}</td>
          <td style={{ padding: '10px' }}>
            {
              (row.status === 0) && 
              <font 
                style={{ color: "green", cursor: 'pointer' }} 
                onClick={() => { handleChange(row._id, "verify") }}
              >
                verify
              </font>
            }
            {
              (row.status === 1) && 
              <font 
                style={{ color: "orange", cursor: 'pointer' }} 
                onClick={() => { handleChange(row._id, "block") }}
              >
                Block
              </font>
            }
          </td>
          <td style={{ padding: '10px', color: 'red', cursor: 'pointer' }}
          onClick={() => { handleChange(row._id, "delete") }}
          >
            Delete
          </td>
        </tr>
      ))
    }
  </tbody>
</table>
          </div>
        </div>
      </div>

      {/* About End */}
    </>
  )
}
export default ManageUser;