import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const cursor = ["Circle", "Circle", "Circle", "Circle", "Circle", "Circle"];
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const circles = document.querySelectorAll('.Circle');
    
    circles.forEach((circle) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = '000';
      circle.style.position = 'fixed';
      circle.style.zIndex = 1000;
      circle.style.pointerEvents = 'none';
    });

    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;

        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [coords]);

  return (
    <>
      {cursor.map((cur, index) => (
        <div className={cur} key={index}></div>
      ))}
    </>
  );
};

export default Cursor;
