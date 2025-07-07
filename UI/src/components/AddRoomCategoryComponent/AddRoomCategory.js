import './AddRoomCategory.css';
import axios from 'axios';
import { __hotelapi,__categoryapi } from "../../Apiurl";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function AddRoomCategory() {
  const navigate = useNavigate();
  const [output, setOutput] = useState();
  const [file, setfile] = useState();
  const [catnm, setCatnm] = useState();
  const [cDetail, setCDetail] = useState([]);
  const [Hnm, setHnm] = useState("");

  useEffect(() => {
    axios.get( __hotelapi + "fetch").then((response) => {
      setCDetail(response.data)
    }).catch((error) => {
      console.log("error");
    });
  },[]);

  const HandleChange = (event) => {
    setfile(event.target.files[0]);
  }
  const HandleSubmit = (event) => {
    event.preventDefault();
    var formData = new FormData();
    formData.append("catnm", catnm);
    formData.append("caticon", file);
    formData.append("Hnm", Hnm);

    const config = {
      "content-type": "multipart/form-data"
    }
    axios.post(__categoryapi + "save", formData, config).then((response) => {
      setOutput("Category Added Successfully");
      navigate("/addroomcategory");
    }).catch((error) => {
      setOutput("Category not Added Successfully");
      navigate("/addroomcategory");
    })
  }
  return (
    <>
      {/* About Start */}
      <div className="container-fluid py-6 px-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <h1> Add room Category Here!!!</h1>
            <font>{output}</font>
            <form >
              <br />
              <div className="form-group">
                <label htmlFor="HotelName"> Hotel Name:</label>
                <br />  <br />
                <select class="form-control" value={Hnm} onChange={e => setHnm(e.target.value)}>
                  <option>Select Hotel </option>
                  {
                    cDetail.map((row) => (
                      <option>{row.Hnm} </option>
                    ))
                  }
                </select>
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="CategoryName">CategoryName:</label>
                <br />  <br />
                <input type="text" class="form-control" value={catnm} onChange={e => setCatnm(e.target.value)} />
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
export default AddRoomCategory;