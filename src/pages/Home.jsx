import React from 'react';
import Footer from '../components/Footer';
import ImminentBoard from '../components/home/imminent/ImminentBoard';
import MainSlider from '../components/home/MainSlider';
import SearchSection from '../components/home/search/SearchSection';

const Home = () => {
  return (
    <>
      <main className='m-auto max-w-5xl relative px-3'>
        <SearchSection />
        <MainSlider />
        <ImminentBoard />
      </main>
      <Footer />
    </>
  );
};

export default Home;
