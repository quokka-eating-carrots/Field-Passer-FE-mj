import React from 'react';
import NavBar from '../../components/Admin/NavBar';
import Main from '../../components/Admin/MemberDetail';

const AdminMemberDetail = () => {
  return (
    <div className='grid grid-cols-admin grid-rows-1 w-full'>
      <NavBar />
      <Main />
    </div>
  );
};

export default AdminMemberDetail;