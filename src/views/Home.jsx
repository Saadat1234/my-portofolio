import React from 'react';

import myPic from '../images/Ahmad.jpeg';


const Home = (props) => (
  <aside className="center-align">
    <img className="rounded-circle rounded mx-auto d-block" src={myPic} alt=""/>
    <p className="text-center font-weight-bold mt-3 text-black">Hiii, My name is Ahmad Khan Saadat,<br/> Front End Developer,<br/> Welcome to my Portofolio</p>
  </aside>
);

export default Home
