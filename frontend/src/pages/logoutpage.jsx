import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await fetch('http://localhost:3001/logout', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (res.ok) {
        window.alert('Logged out successfully!');
        navigate('/');
        
      } else {
        const error = new Error('Logout failed');
        error.response = res;
        throw error;
      }
    } catch (err) {
      console.error(err);
      window.alert('Logout failed. Please try again.');
      // navigate('/');
    }
  };

  useEffect(() => {
    handleLogout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to ensure useEffect runs only once

  return <div>Logout Page</div>;
};

export default LogoutPage;
