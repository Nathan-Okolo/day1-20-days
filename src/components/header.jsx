import React from "react";
import "./css/header.css";

function header() {
  return (
    <div className="header">
      <div className="section1">Tribute To Whitney Houston</div>
      <div className="section2">
        <h1>Whitney Houston</h1>
        <img
          className="vector"
          src="https://i.ibb.co/DQM4Dv6/Vector.png"
          alt="dove"
        />
        <p>A tribute a World Class Music Icon, who changed th face of music</p>
        <p>1963 - 2012</p>

        <img
          className="image1"
          src="https://i.ibb.co/zhbkrDd/index-removebg-preview-1.png"
          alt="Whitney H"
        />
      </div>

      <div className="section3">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus.
        </p>
        <img
          className="image2"
          src="https://i.ibb.co/1fTXJ7X/whitney-1-1.png"
          alt="Whitney H"
        />

        <img
          className="image3"
          src="https://i.ibb.co/pvXVmMP/images-1.png"
          alt="Whitney H"
        />

        <img
          className="image4"
          src="https://i.ibb.co/ypgt07q/whitney-2-1.png"
          alt="Whitney H"
        />
      </div>

      <div className="section4">
        <h3>TRIBUTE FROM FRIENDS AND FAMILY</h3>
        <div className="first-item">
          <p>
            ‘’i thank God for the beautiful flower he allowed me to raise for 48
            years’’
          </p>
          <p>Whitney’s Mum Cissy</p>
          <hr />
        </div>

        <div className="second-item">
          <p>
            ‘ There was a grace that followed her through her life, there was a
            grace that kept on carrying her’’
          </p>
          <p>Tyler Perryy</p>
          <hr />
        </div>

        <div className="third-item">
          <p>
            ‘’ I will miss her voice when she calls, im going to miss her smile
            most of all’’
          </p>
          <p>Bebe Winans</p>
        </div>
      </div>
    </div>
  );
}

export default header;
