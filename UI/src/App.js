import './App.css';
import Header from './components/headercomponent/Header';
import Footer from './components/footercomonent/Footer';
import Banner from './components/BannerComponent/Banner';
import Home from './components/homecomponent/Home';
import Nav from './components/Navcomponent/Nav';
import Sidebar from './components/sidebarcompent/Sidebar';
import About from './components/Aboutcomponent/About';
import Contact from './components/Contactcomponent/Contact';
import Service from './components/Servicecomponent/Service';
import Register from './components/Registercomponent/Register';
import Login from './components/Logincomponent/Login';
import {Routes,Route} from 'react-router-dom';
import AdminHome from './components/Adminhomecomponent/AdminHome';
import UserHome from './components/Userhomecomponent/UserHome';
import Logout from './components/LogoutComponent/Logout';
import ManageUser from './components/manageUsercomponent/ManageUser';
import EPAdmin from "./components/EPAdminComponent/EPAdmin"
import EditPassword from "./components/EditPasswordComponent/EditPassword"
import AddRoomCategory from './components/AddRoomCategoryComponent/AddRoomCategory';
import EPrUser  from './components/EPrUserComponent/EPruser';
import EditPassUser from "./components/EditPassUserComponent/EditPassUser"
import AddHotel from './components/HotelCategoryComponent/HotelCategory'
import ViewRoomcategory from "./components/viewroomCategorycomponent/ViewRoomcategory"
import ViewHotel from './components/ViewHotelcomponent/ViewHotel';
import VerifyUser from './components/VerifyuserComponent/VerifyUser';
import BookNow from "./components/PayBooknowComponent/BookNow"
import AddCity from './components/AddCityCategoryComponent/AddCity';
import SearchBar from './components/SearchBarComponent/SearchBar';
import Search from './components/SearchComponent/Search';
import Booking from './components/BookingComponent/Booking';
function App(){
  return(
    <>
    <Header/>

    <Nav/>
<Banner/>
<SearchBar/> 
  {/* <BookNow/>   */}
<Routes>
      <Route path="/" element ={<Home />} ></Route>
      <Route path="/about" element ={<About />} ></Route>
      <Route path="/Contact" element ={<Contact />} ></Route>
      <Route path="/Service" element ={<Service />} ></Route>
      <Route path="/Register" element ={<Register />} ></Route>
      <Route path="/LOgin" element ={<Login />} ></Route>
      <Route path="/Admin" element ={<AdminHome />} ></Route>
      <Route path="/User" element ={<UserHome />} ></Route>
      <Route path="/logout" element ={<Logout />} ></Route>
      <Route path="/manageuser" element ={<ManageUser />} ></Route>
      <Route path="/EPAdmin" element ={<EPAdmin />} ></Route>
      <Route path="/EditPassword" element ={<EditPassword />} ></Route>
      <Route path="/addroomcategory" element ={<AddRoomCategory />} ></Route>
      <Route path="/EPrUser" element ={<EPrUser />} ></Route>
      <Route path="/EditPassUser" element ={<EditPassUser />} ></Route>
      <Route path="/addhotel" element ={<AddHotel />} ></Route>
      <Route path="/addcity" element ={<AddCity />} ></Route>
      <Route path="/booking" element ={<Booking />} ></Route>
      <Route path="/Booking" element ={<BookNow />} ></Route>
      
      {/* <Route path="/viewroomcategory" element ={<ViewRoomcategory />} ></Route>
      <Route path="/viewhotel/:catnm" element ={<ViewHotel />} ></Route> */}
      <Route path="/viewhotel/:citynm" element ={<ViewHotel />} ></Route>
      <Route path="/viewroomcategory/:Hnm" element ={<ViewRoomcategory />} ></Route>
      <Route path="/verify/:email" element ={<VerifyUser />} ></Route>
      {/* <Route path="/booknow" element ={<BookNow />} ></Route> */}
      <Route path="/search" element ={<Search />} ></Route>
    </Routes>

<Footer/>
    </>
  )
}
export default App;