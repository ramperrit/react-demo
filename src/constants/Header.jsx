import { Link } from "react-router-dom";
import { LOGIN } from "./page_constants";
import { useState } from "react";
import Logout from "./Logout";

export default function Header(){
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("access_token")); //!! : 뒤에 값이 존재하면 true

  return(
    <header>
      {isLoggedIn ? (
        <Logout>로그아웃</Logout>
      ) : (
        <Link to={LOGIN}>로그인</Link>
      )}
    </header>
  )
}