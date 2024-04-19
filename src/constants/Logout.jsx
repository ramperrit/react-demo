import { useNavigate } from "react-router-dom";
import fetcher from "../fetcher";
import { LOGOUT_API } from "./api_constants";
import { LOGIN } from "./page_constants";

export default function Logout({children}) {
  const refreshToken = localStorage.getItem("refresh_token");
  const navigate = useNavigate();

  const logoutHandler = async (e) => {
    e.preventDefault();

    //서버의 refreshToken 삭제
    const formData = new FormData();
    formData.append("refreshToken",refreshToken);
    const response = await fetcher.post(LOGOUT_API,formData)
    alert (response.data);

    //로컬스토리지 토큰삭제
    localStorage.clear();
    navigate(LOGIN);
  }

  return(
    <a href="#" onClick={logoutHandler}>
      {children}
    </a>
  )
}