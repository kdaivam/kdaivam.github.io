import React, { useState, useEffect, Profiler } from "react";
import {
    aboutHeading,
    aboutDescription,
    showInstaProfilePic,
    instaLink,
    instaUsername,
    instaQuerry,
  } from "../../editable-stuff/configurations.json";
  const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  };
const Interests = () => {
  return (
    <div id="interests" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'white'}}>
      <div className="container container-fluid">
        <div className="row">
            <div className="col d-lg-inline align-self-center">
            <h1 className="display-4 pb-4 text-center">Interests</h1>
            {}
            <div className="row" style={divStyle}>
                <div className="col text-center" >
                <p className="lead text-center" style={{fontSize:'28px'}}>Running</p>
                <img src="https://img.icons8.com/nolan/128/running.png"/>
                <p className="lead text-center">
                  Every morning, I begin my day with a run. I started running from past 2 years and i love it. It helps me control my stress levels and i thoroughly enjoy my "me-time" early in the morning.
                  I am trying to hit a target of 50 miles per week
                </p>
                </div>
                <div className="col text-center">
                <p className="lead text-center" style={{fontSize:'28px'}}>Volunteering</p>
                <img src="https://img.icons8.com/nolan/128/volunteering.png"/>
                <p className="lead text-center">
                  I love to volunteer at my kids schools, at local temple and any kind of community event. 
                  It gives me satisfacation of playing a role in someone else's life. It has created memorable experiences in the past few years of volunteering!
                </p>
                </div>
                <div className="col text-center">
                <p className="lead text-center" style={{fontSize:'28px'}}>Cooking</p>
                <img src="https://img.icons8.com/nolan/128/food.png"/>
                <p className="lead text-center">
                  I first started to cook after becoming a Mom. I enjoy Indian food the most. It is fun trying out new cuisines. 
                  I enjoy everybit of the process starting from chopping to food on the table. I love to cook for my family and friends!
                </p>
                </div>
                
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Interests;