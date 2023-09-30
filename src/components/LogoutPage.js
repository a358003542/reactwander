import { useState, useEffect } from 'react';

function LogoutPage(props){
    useEffect(() => {
        localStorage.removeItem('token');
        props.setUser(null);
      }, [])
}

export default LogoutPage;