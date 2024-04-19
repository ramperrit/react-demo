import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { PAGE_403 } from "../constants/page_constants";
import Header from "../constants/Header";

export default function AdminPage(){

  const navigate = useNavigate();

  useEffect(() => {
    const authority = localStorage.getItem("authority");
    if(authority !== "ROLE_ADMIN"){
      //403 에러페이지로 이동
      navigate(PAGE_403);
    }
  },[])




  return(
    <>
    <Header/>
    <h1>Admin Page</h1>
    </>
  );
}