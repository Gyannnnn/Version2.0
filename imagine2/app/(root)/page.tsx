import { SignIn } from '@clerk/nextjs';
import React from 'react';

const Home = () => {
  return (
    <div className='w-full h-[80vh] flex items-center justify-center'>
      <SignIn routing="path" path="/"/>
    </div>
  );
};

export default Home;
