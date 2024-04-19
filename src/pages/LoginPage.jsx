import { useState } from "react";
import { TextFiled } from "../components/TextField";
import { Link } from "react-router-dom";
import SignupPage from "./SignupPage";
import { SIGN_UP } from "../constants/page_constants";

export default function LoginPage(){
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const handleLogin = ((e) => {
    e.preventDefault();
  })


  return(
    <>
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