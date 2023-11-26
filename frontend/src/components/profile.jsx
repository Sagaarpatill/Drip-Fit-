import React, { useEffect,useState } from 'react';
import '../stylesheets/profile.css';
import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
    const [userData, setUserData] = useState();
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
        // Use !res.ok instead of !res.status === 200
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
  }, []); // Empty dependency array to ensure useEffect runs only once



  return (
    <div className='profile-container'>
      <div className='profile-section'>
        {userData ? (
          <>
            {userData.email === 'admin@mail.com' ? (
              navigate('/admin')
            ) : (
              <>
                <h1>Hello {userData.name}👋</h1>
                <div className='details'>
                  <div>Email: {userData.email}</div>
                  {/* You might not want to display the password directly */}
                  {/* <div>Password: {userData.password}</div> */}
                </div>
                <div className='profile-buttons'>
                  <Link to='/mylistings'>
                    <button>My Listings</button>
                  </Link>
                  <Link to='/logout'>
                    <button>Log Out</button>
                  </Link>
                </div>
              </>
            )}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
