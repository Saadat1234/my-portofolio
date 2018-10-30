import React, { Fragment } from 'react';

import Mypic from '../images/mypic.jpg';

const About = (props) => (
  <Fragment>

   <div className="media mt-5">
       <div className="media-body">
         <img className="float-right mr-5" src={Mypic} alt="my pic" height="500" width="250"/>
         <h2 className="text-center display-3 text-white">About Me</h2>

         <h4 className="display-4 text-center text-black">Hii,</h4>
           <p className="text-center text-black">My name is Ahmad Khan Saadat,<br/> I am 25 years old, I am a studying web development in Digital Career Institute in Berlin Germany. <br/> since two year i am in Germany, Besides i had a German class in Berlin Germany. <br/>I worked before in my home land as team supervisor in a company, and i worked as customer Service in one of Telecom company. <br/></p>

        </div>
      </div>

    </Fragment>
);

export default About
