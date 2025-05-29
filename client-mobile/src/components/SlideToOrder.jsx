import React, { useState, useRef, useEffect } from "react";
import styles from "./SlideToOrder.module.css";

const SlideToOrder = ({ onSlideComplete }) => {
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const getTouchX = (e) => e.touches?.[0]?.clientX || 0;

  const handleStart = (e) => {
    setIsDragging(true);
  };

  const handleMove = (clientX) => {
    if (!isDragging) return;
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const maxX = rect.width - 60; // 60 = thumb width
    const clampedX = Math.max(0, Math.min(x, maxX));
    setDragX(clampedX);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const container = containerRef.current;
    if (!container) return;

    if (dragX > container.offsetWidth * 0.6) {
      onSlideComplete();
    }

    setDragX(0);
  };

  // Mouse + touch event setup
  useEffect(() => {
    const handleMouseMove = (e) => handleMove(e.clientX);
    const handleTouchMove = (e) => handleMove(getTouchX(e));
    const handleMouseUp = () => handleEnd();
    const handleTouchEnd = () => handleEnd();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, dragX]);

  return (
    <div ref={containerRef} className={styles.sliderContainer}>
      <div className={styles.track}>
        <div className={styles.text}>Swipe to Order</div>
        <div
          className={styles.thumb}
          onMouseDown={handleStart}
          onTouchStart={handleStart}
          style={{ transform: `translateX(${dragX}px)` }}
        >
          ➔
        </div>
      </div>
    </div>
  );
};

export default SlideToOrder;
