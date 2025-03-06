import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Slideshow.css';

gsap.registerPlugin(ScrollTrigger);

const Slideshow = () => {
  const slideshowRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(imagesRef.current, {
        xPercent: -100 * (imagesRef.current.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: slideshowRef.current,
          start: 'top top',
          end: "+=1500",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, slideshowRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={slideshowRef} className="slideshow">
      <div className="slide" ref={el => imagesRef.current[0] = el}>
        <img src="https://th.bing.com/th/id/OIP.io28tGJjh4Xvw3zyzsJamwAAAA?w=139&h=152&c=7&r=0&o=5&dpr=1.4&pid=1.7" alt="Slide 1" />
      </div>
      <div className="slide" ref={el => imagesRef.current[1] = el}>
        <img src="https://th.bing.com/th/id/OIP.frEOlZx2gKcUXo0jbtNUQQHaHa?w=191&h=191&c=7&r=0&o=5&dpr=1.4&pid=1.7" alt="Slide 2" />
      </div>
      <div className="slide" ref={el => imagesRef.current[2] = el}>
        <img src="https://th.bing.com/th/id/OIP.Fs98Me8O2XtxpwLKdO4MFwHaKt?w=191&h=277&c=7&r=0&o=5&dpr=1.4&pid=1.7" alt="Slide 3" />
      </div>
    </div>
  );
};

export default Slideshow;