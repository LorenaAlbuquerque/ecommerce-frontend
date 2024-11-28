import React from 'react';
import UserProfile from '../components/User/UserProfile';

const UserProfilePage = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <UserProfile />
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
