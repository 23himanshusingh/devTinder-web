import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";
import axios from "axios";

function Body() {
  console.log("hello");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(store => store.user);

  const fetchUser = async () => {
    try{

      const res = await axios.get(BASE_URL+'/profile/view',{
        withCredentials : true
      });

      dispatch(addUser(res.data));


    }catch(err){
      if (err.status === 401) navigate('/login')
      console.error(err);
    }
  };

  useEffect(()=>{
    console.log("useEffect called");
    fetchUser();
  },[]);

  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  );
}

export default Body;
