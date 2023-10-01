import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function LogoutPage(props){
  const navigate = useNavigate();
    useEffect(() => {
        localStorage.removeItem('token');
        props.setUser(null);
        navigate("/");
      }, [])
}

export default LogoutPage;