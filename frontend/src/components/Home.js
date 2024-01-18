import React, { useState, useEffect } from 'react';
import './Home.css'
import image1 from './public/image1.jpg';
import image2 from './public/image2.jpg';
import image3 from './public/image3.jpg';
import image4 from './public/image4.jpg';
import img3 from './public/images/about_kle_img3.png';
import img4 from './public/images/about_kle_img4.png';
import img5 from './public/images/about_kle_img5.png';
import img6 from './public/images/about_kle_img6.png';
import img7 from './public/images/about_kle_img7.png';
import img8 from './public/images/about_kle_img8.png';

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    { src: image1, caption: 'BVB College in Night' },
    { src: image2, caption: 'Amaan Khan ribbon ceremony with VC' },
    { src: image3, caption: 'B div CR getting best division Award' },
    { src: image4, caption: 'Sab Moh Mayaa hai' },
  ];
useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);
 document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});
  return (
    <div className="home-page">
      <div className="slideshow">
        <img src={images[currentImageIndex].src} alt="kletech"  className='imgfor'/>
      </div>

<div class="ranking">
    <section>
      <h2 className='heading'>Ranking & Recognition</h2>
      
    </section>
    <div className='gofor'>
    <section>
      <img src={img3} alt="Line Image 1"/>
    </section>
    <section>
      <img src={img4} alt="Line Image 2"/>
    </section>
    <section>
      <img src={img5}  alt="Line Image 3"/>
    </section>
    <section>
      <img src={img6}  alt="Line Image 4"/>
    </section>
    <section>
      <img src={img7}  alt="Line Image 5"/>
    </section>
    <section>
      <img src={img8}  alt="Line Image 6"/>
    </section>
    </div>
  </div>

     
    </div>
  );
}

export default Home;