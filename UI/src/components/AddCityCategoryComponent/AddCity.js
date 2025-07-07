import './AddCity.css';
import axios from 'axios';
import {__cityapi } from "../../Apiurl";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function AddCity() {
  const navigate = useNavigate();
  const [output, setOutput] = useState();
  const [file, setfile] = useState();
  // const [catnm, setCatnm] = useState();
  const [citynm, setcitynm] = useState();
  // const [cDetail, setCDetail] = useState([]);

  // useEffect(() => {
  //   axios.get(__categoryapi + "fetch").then((response) => {
  //     setCDetail(response.data)
  //   }).catch((error) => {
  //     console.log("error");
  //   });
  // },[]);

  const HandleChange = (event) => {
    setfile(event.target.files[0]);
    event.preventDefault();
  }
  const HandleSubmit = (event) => {
    event.preventDefault();
    var formData = new FormData();
    // formData.append("catnm", catnm);
    formData.append("citynm", citynm);
    formData.append("caticon", file);

    const config = {
      "content-type": "multipart/form-data"
    }
    axios.post(__cityapi + "save", formData, config).then((response) => {
      setOutput("City Added Successfully");
      navigate("/addcity");
    }).catch((error) => {
      console.log(error);
      setOutput("city not Added Successfully");
      navigate("/addcity");
    })
  }
  return (
    <>
      {/* About Start */}
      <div className="container-fluid py-6 px-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <h1> Add city Category Here!!!</h1>
            <font>{output}</font>
            <form >
              <br />
              {/* <div className="form-group">
                <label htmlFor="CategoryName"> CategoryName:</label>
                <br />  <br />
                <select class="form-control" value={catnm} onChange={e => setCatnm(e.target.value)}>
                  <option>Select category</option>
                  {
                    cDetail.map((row) => (
                      <option>{row.catnm} </option>
                    ))
                  }
                </select>
              </div> */}
              <br />
              <div className="form-group">
                <label htmlFor="CategoryName">CityName:</label>
                <br />  <br />
                <input type="text" class="form-control" value={citynm} onChange={e => setcitynm(e.target.value)} />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="Caticon">CatIcon:</label>
                <br /><br />
                <input type="file" class="form-control" onChange={HandleChange} />
              </div>
              <br />
              <br />
              <button type="button" onClick={HandleSubmit} class="btn btn-primary" >Add Category</button>
            </form>
          </div>
        </div>
      </div>

      {/* About End */}
    </>
  )
}
export default AddCity;