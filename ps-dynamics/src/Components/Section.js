import React from 'react';

function Section() {
  return (
    <div>
      <div className="img"></div>
      <div className="center">
        <div className="title">Capture life's moments with precision and clarity—discover our premium cameras today!</div>
        <div className="btns">
          <button>Learn More</button>
          <button>Subscribe</button>
        </div>
      </div>

      <section className="about-us">
        <div className="about">
          <img src="./assets/images/cam.jpg" className="pic" alt="Camera"/>
          <div className="text">
            <h2>About Us</h2>
            <h5>Empowering your vision with cutting-edge technology</h5>
            <p>At PX Dynamics, we believe that every moment deserves to be captured with stunning clarity and detail. Our mission is to provide photographers of all levels with top-of-the-line cameras and accessories that enhance their creative vision. With a commitment to quality and innovation, we offer a diverse range of products designed to meet the needs of both enthusiasts and professionals alike. Explore our collection and experience the difference that precision engineering can make in your photography journey.</p>
            <div className="data">
              <a href="#" className="hire">Hire Me</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section;
