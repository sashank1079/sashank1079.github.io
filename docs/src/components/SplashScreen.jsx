import React, { useEffect, useState, useCallback } from "react";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [trail, setTrail] = useState([]);

  const colors = ["#af09cc", "#aa35be", "#3ce2d7", "#19bdb2", "#008080"];

  const interpolateColor = (t, colors) => {
    // Use t to create a continuous gradient transition
    const colorIndex = Math.floor(t % colors.length);
    const nextColorIndex = (colorIndex + 1) % colors.length;
    const weight = t % 1;

    const color1 = colors[colorIndex].match(/\w\w/g).map((c) => parseInt(c, 16));
    const color2 = colors[nextColorIndex]
      .match(/\w\w/g)
      .map((c) => parseInt(c, 16));

    const r = Math.round(color1[0] * (1 - weight) + color2[0] * weight);
    const g = Math.round(color1[1] * (1 - weight) + color2[1] * weight);
    const b = Math.round(color1[2] * (1 - weight) + color2[2] * weight);

    return `rgb(${r}, ${g}, ${b})`;
  };

  const createTrailPoint = useCallback((t) => {
    const a = 80; // Size of the infinity symbol
    const x = (a * Math.cos(t)) / (1 + Math.sin(t) * Math.sin(t));
    const y = (a * Math.cos(t) * Math.sin(t)) / (1 + Math.sin(t) * Math.sin(t));
    return { x, y, t, id: Date.now() + Math.random() };
  }, []);

  useEffect(() => {
    document.body.classList.add("loading");
    let frame;
    let t = 0;
    const trailLength = 100;

    const animate = () => {
      t += 0.08; // Slower speed for smoother transitions

      setTrail((prevTrail) => {
        const newPoint = createTrailPoint(t);
        const updatedTrail = [...prevTrail, newPoint];

        if (updatedTrail.length > trailLength) {
          return updatedTrail.slice(-trailLength);
        }
        return updatedTrail;
      });

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.classList.remove("loading");
    }, 2500);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
      document.body.classList.remove("loading");
    };
  }, [createTrailPoint]);

  if (!isVisible) return null;

  return (
    <div className="splash-screen">
      <div className="infinity-container">
        {trail.map((point, index) => {
          const smoothT = point.t / 1.5; // Use a slower gradient transition factor
          const color = interpolateColor(smoothT, colors);
          return (
            <div
              key={point.id}
              className="trail-dot"
              style={{
                transform: `translate(${point.x}px, ${point.y}px)`,
                opacity: index / trail.length,
                backgroundColor: color,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SplashScreen;
