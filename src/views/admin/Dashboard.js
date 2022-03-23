import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import jwtDecode from 'jwt-decode'
// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

export default function Dashboard() {
  const navigate = useNavigate();

  async function auth() {
    const login = localStorage.getItem('login');
    const token = JSON.parse(login);
    const data = await axios({
        method : "GET",
        url: 'http://localhost:4000/users/auth/',
        headers: {
          'x-access-token' : token.token
        }
    })
    const req = data.status
    console.log('auth', + req);
    if (req !== 200) {
      navigate('/login')
    }
  }
  useEffect(() => {
    const login = localStorage.getItem('login');
    const token = JSON.parse(login);
    if (token) {
      const user = jwtDecode(token.token)
      console.log(user);
      if(!user){
        localStorage.removeItem('token')
        navigate('/login')
      }else(
        auth()
      )
    }
  }, [])
  
  
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}
