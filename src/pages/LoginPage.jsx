import { useState } from "react";
import { TextFiled } from "../components/TextField";
import { Link, Navigate, useNavigate } from "react-router-dom";
import SignupPage from "./SignupPage";
import { MAIN, SIGN_UP } from "../constants/page_constants";
import axios from "axios";
import { LOGIN_API } from "../constants/api_constants";
import Header from "../constants/Header";

export default function LoginPage(){
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try{
      const formData = new FormData();
      formData.append("id",id);
      formData.append("password",password);

      //서버로 아이디, 비번 보내기
      const response = await axios.post(
        //URL
        API_BASE_URL + LOGIN_API, 
        //BODY
        formData
      )
      console.log(response.data);

      // 저장 (영구) //대체 SessionStorage
      localStorage.setItem("access_token",response.data.accessToken);
      localStorage.setItem("refresh_token",response.data.refreshToken);
      localStorage.setItem("authority",response.data.authority);

      navigate(MAIN);

    }catch(error){
      console.error(error);
      setError("아이디, 비밀번호 오류");
    }
  }

  return(
    <>
    <Header/>
    <form onSubmit={handleLogin}>
      <TextFiled
        label = "아이디"
        type = "text"
        name = "id"
        required
        value={id}
        onChange={(e)=>setId(e.target.value)}
      />
      <TextFiled
        label = "비밀번호"
        type = "password"
        name = "password"
        required
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
      {error && <p style={{color:'red'}}>{error}</p>}
      <button type="submit">로그인</button>
      <Link to={SIGN_UP}>회원가입</Link>

    </form>
    </>
  )
}