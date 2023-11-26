import React, { useEffect, useState } from 'react';
import '../stylesheets/admin.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [userData, setUserData] = useState();
  const navigate = useNavigate();

  const callProfile = async () => {
    try {
      const res = await fetch('http://localhost:3001/user', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.ok) {
        const error = new Error(res.statusText);
        error.response = res;
        throw error;
      }
    } catch (err) {
      navigate('/login');
    }
  };

  useEffect(() => {
    callProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='profile-container'>
      <div className='profile-section'>
        {userData ? (
          <>
            <h1>Hello {userData.name}</h1>
            <div className='details'>
            </div>
            <div className='profile-buttons'>
              <Link to='/add-product'>
                <button>Add Product</button>
              </Link>
              <Link to='/modify-product'>
                <button>Modify Product</button>
              </Link>
              <Link to='/delete-product'>
                <button>Delete Product</button>
              </Link>
              <Link to='/logout'>
                <button>Log Out</button>
              </Link>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Admin;
