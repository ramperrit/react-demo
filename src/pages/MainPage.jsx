import axios from "axios";
import React, { useEffect, useState } from "react";
import { MAIN_INIT_DATA_API } from "../constants/api_constants";

export default function MainPage() {
  const [initData, setInitData] = useState("서버 통신 에러");

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const fetchInitData = async () => { //비동기통신
    try{
    //1. 서버로 부터 localhost:8080/main 으로 get 요청을 해서 데이터 받아옴 --> 가장 먼저 수행 (await)
    
    const response = await axios.get(
      API_BASE_URL + MAIN_INIT_DATA_API
    ); //response에 "Hello World" 담기

    //2. 받아온 데이터 setInitData를 사용해서 initData(State)값 변경
    setInitData(response.data);
    }catch(error){
      console.error("데이터 가져오기 오류",error);
    }
  }

  useEffect(()=>{
    //서버로부터 데이터를 받아옴 -> initData(state)에 set
    fetchInitData();
  },[]);//[] : 최초한번만 실행

//배열 받기 Map~
  return(
    <>
      <h1>Main Page</h1>
      <h3>{initData}</h3>
    </>
  );
}