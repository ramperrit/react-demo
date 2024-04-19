import { useState } from "react";
import { TextFiled } from "../components/TextField";
import axios from "axios";
import { SIGN_UP_API } from "../constants/api_constants";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../constants/page_constants";
import fetcher from "../fetcher";
import Header from "../constants/Header";

export default function SignupPage(){
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try{
      const formData = new FormData();
      formData.append("id",id);
      formData.append("name",name);
      formData.append("password",password);

      // const response = await axios.post(
      //   API_BASE_URL + SIGN_UP_API,
      //   //body
      //   formData
      // )

      const response = await fetcher.post(SIGN_UP_API, formData)

      alert(response.data);
      //로그인페이지로 보내주기
      navigate(LOGIN);
    }catch(error){
      setError(error.response.data);
    }
  }

  return(
    <>
    <Header/>
    <form onSubmit={handleSignup}>
      <TextFiled
        label = "아이디"
        type = "text"
        name = "id"
        required
        value={id}
        onChange={(e)=>setId(e.target.value)}
      />
      <TextFiled
        label = "이름"
        type = "text"
        name = "name"
        required
        value={name}
        onChange={(e)=>setName(e.target.value)}
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
      <button type="submit">회원가입</button>

    </form>
    </>
  )
}