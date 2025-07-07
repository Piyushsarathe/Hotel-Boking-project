import './HotelCategory.css';
import axios from 'axios';
import { __cityapi, __hotelapi } from "../../Apiurl";
import {  useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddHotel() {
  const navigate = useNavigate();
  const [output, setOutput] = useState();
  const [file, setfile] = useState();
  const [catnm, setCatnm] = useState("");
  const [Hnm, setHnm] = useState("");
  const [CF, setCF] = useState("");
  const [FC1, setFC1] = useState("");
  const [fc2, setfc2] = useState("");
  const [MFC, setMFC] = useState("");
  const [FEES, setFEES] = useState("");
  const [Rating, setRating] = useState("");
  const [OLDPRICE, setOLDPRICE] = useState("");
  const [NEWPRICE, setNEWPRICE] = useState("");
  const [citynm, setCitynm] = useState("");
  const [mobile, setMobile] = useState("");
  const [cDetail, setCDetail] = useState([]);


  useEffect(() => {
    axios.get(__cityapi + "fetch").then((response) => {
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
    if (!catnm ||!CF ||!FEES ||!Rating ||!OLDPRICE ||!NEWPRICE||!FC1 ||!fc2 ||!MFC|| !Hnm || !citynm || !mobile || !file) {
        setOutput("Please fill all fields");
        return;
      }
    var formData = new FormData();
    formData.append("catnm", catnm);
    formData.append("Hnm", Hnm);
    formData.append("citynm", citynm)
    formData.append("mobile", mobile)
    formData.append("Hicon", file);
    formData.append("CF", CF);
    formData.append("FC1", FC1);
    formData.append("fc2", fc2);
    formData.append("MFC", MFC);
    formData.append("FEES", FEES);
    formData.append("Rating", Rating);
    formData.append("OLDPRICE", OLDPRICE);
    formData.append("NEWPRICE", NEWPRICE);

    const config = {
      "content-type": "multipart/form-data"
    }
    axios.post(__hotelapi + "save", formData, config).then((response) => {
      setOutput("HotelCategory Added Successfully");
      navigate("/addhotel");
    }).catch((error) => {
       console.error("Error adding hotel:", error);
      setOutput("HotelCategory not Added Successfully");
      navigate("/addhotel");
    })
  }
  return (
    <>
      {/* About Start */}
      <div className="container-fluid py-6 px-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <h1> Add Hotel Detail Here!!!</h1>
            <font>{output}</font>
            <form onSubmit={HandleSubmit}>
              <div className="form-group">
                <label htmlFor="citynm"> Hotel City:</label>
                <br />  <br />
                <select class="form-control" value={citynm} onChange={e => setCitynm(e.target.value)}>
                  <option>Select city</option>
                  {
                    cDetail.map((row) => (
                      <option>{row.citynm} </option>
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
                <label htmlFor="Hotel Name">Hotel Name:</label>
                <br />  <br />
                <input type="text" class="form-control" value={Hnm} onChange={e => setHnm(e.target.value)} />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="CF">Type:</label>
                <br />  <br />
                <textarea type="text" class="form-control" value={CF} onChange={e => setCF(e.target.value)}></textarea>
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="FC1">Facility:</label>
                <br />  <br />
                <textarea type="text" class="form-control" value={FC1} onChange={e => setFC1(e.target.value)}></textarea>
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="fc2">Facility2:</label>
                <br />  <br />
                <textarea type="text" class="form-control" value={fc2} onChange={e => setfc2(e.target.value)}></textarea>
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="MFC"> More Facility:</label>
                <br />  <br />
                <textarea type="text" class="form-control" value={MFC} onChange={e => setMFC(e.target.value)}></textarea>
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="Rating"> Rating:</label>
                <br />  <br />
                <textarea type="text" class="form-control" value={Rating} onChange={e => setRating(e.target.value)}></textarea>
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="OLDPRICE"> OLDPRICE:</label>
                <br />  <br />
                <textarea type="text" class="form-control" value={OLDPRICE} onChange={e => setOLDPRICE(e.target.value)}></textarea>
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="NEWPRICE"> New Price:</label>
                <br />  <br />
                <textarea type="text" class="form-control" value={NEWPRICE} onChange={e => setNEWPRICE(e.target.value)}></textarea>
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="FEES"> FEES:</label>
                <br />  <br />
                <textarea type="text" class="form-control" value={FEES} onChange={e => setFEES(e.target.value)}></textarea>
              </div>
              <br />

              {/* <div className="form-group">
                <label htmlFor="addreds">Hotel City:</label>
                <br />  <br />
                <textarea type="text" class="form-control" value={citynm} onChange={e => setCitynm(e.target.value)}></textarea>
              </div> */}
              <br />
              <div className="form-group">
                <label htmlFor="Mobile">Mobile:</label>
                <br />  <br />
                <textarea type="text" class="form-control" value={mobile} onChange={e => setMobile(e.target.value)}></textarea>
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="Hicon">Hotel Icon:</label>
                <br /><br />
                <input type="file" class="form-control" onChange={HandleChange} />
              </div>
              <br />
              <br />
              <button type="submit" onClick={HandleSubmit} class="btn btn-primary" >Add Hotel</button>
            </form>
          </div>
        </div>
      </div>

      {/* About End */}
    </>
  )
}
export default AddHotel;
