import {useState} from "react";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
const Header=()=>
{ const[btnname,setbtnname]=useState("Login");
const cartitems=useSelector((store)=>store.cart.items);
  return (
    <div className="flex justify-between bg-yellow-500 shadow-lg ">
      <div className="logo-container">
        <img className="w-36 rounded" src="\images\foodielogo.png" alt="logo" ></img>
      </div>
      <div className="font-bold">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-xm hover:text-white">
            <Link to='/'><HomeIcon/>Home</Link>
             
          </li>
          <li  className="px-4  hover:text-white">  <Link to="/About">About<InfoIcon/></Link></li>
          <li  className="px-4  hover:text-white"><Link to="/Contacts">Contact Us<ChatBubbleIcon/></Link></li>
          <li  className="px-4  hover:text-white"><Link to="/Cart">Cart<ShoppingCartIcon/>-({cartitems.length})</Link></li>
          <li  className="px-4  hover:text-white"><AccountCircleIcon/></li>
          <button className=" hover:text-white"
            onClick={()=>{
              btnname==="Login"
               ? setbtnname("Logout")
               : setbtnname("Login");

            }}>{btnname}
          </button>
        </ul>

      </div>
    </div>
  );
};
export default Header;