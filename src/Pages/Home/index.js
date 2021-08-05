import React from 'react';
import Banner from '../../Components/Banner';
import ExamsList from '../../Components/ExamsList';
import Intro from '../../Components/Intro';
import PageBreak from '../../Components/PageBreak';
import './styles.css';
import examsList from '../../Components/ExamsList/examsList';

function ExamsMarque() {
  return (
    <div>
      <div className="home__marquee__header">
        <span className="home__marquee__header__text">Shoot for the stars ⭐</span>
      </div>
      <marquee width="100%" height="100%" direction="left">
        <div className="home__marquee__title__container">
          {examsList.map((each, index) => (
            <h1 className="home__marquee__title">{each.abbr}</h1>
          ))}
        </div>
      </marquee>
    </div>
  );
}

function Home() {
  return (
    <div className="Home">
      <Banner />
      <PageBreak />
      <Intro />
      <ExamsList />
      <ExamsMarque />
    </div>
  );
}

export default Home;
