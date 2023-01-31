import React from 'react';
import NavBar from '../../components/Admin/NavBar';
import Main from '../../components/Admin/PostDetail';

const PostDetail = () => {
  return (
    <div className='grid grid-cols-admin grid-rows-1 max-w-7xl'>
      <NavBar />
      <Main />
    </div>
  );
};

export default PostDetail;