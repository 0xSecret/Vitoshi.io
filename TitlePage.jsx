import React from 'react';
import './TitlePage.css';

function TitlePage() {
  return (
    <div className="container">
      <div className="content">
        <div className="container-full">
          <div className="animated hue"></div>
          <img
            className="backgroundImage"
            src="https://drive.google.com/thumbnail?id=1_ZMV_LcmUXLsRokuz6WXGyN9zVCGfAHp&sz=w1920"
            alt="Background"
          />
          <img
            className="boyImage"
            src="https://drive.google.com/thumbnail?id=1eGqJskQQgBJ67myGekmo4YfIVI3lfDTm&sz=w1920"
            alt="Boy"
          />
          <div className="container">
            <div className="cube">
              <div className="face top"></div>
              <div className="face bottom"></div>
              <div className="face left text"></div>
              <div className="face right text"></div>
              <div className="face front"></div>
              <div className="face back text"></div>
            </div>
          </div>
          <div className="container-reflect">
            <div className="cube">
              <div className="face top"></div>
              <div className="face bottom"></div>
              <div className="face left text"></div>
              <div className="face right text"></div>
              <div className="face front"></div>
              <div className="face back text"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitlePage;
