import React, { useEffect, useState } from 'react';

const BouncingDots = ({
  color = 'white',
  maxSize = 10,
  baseHeight = 0,
  duration = 300,
}: {
  color?: string;
  maxSize?: number;
  baseHeight?: number;
  duration?: number;
}) => {
  // Create refs once, safely, without touching .current during render
  const [dotRefs] = useState(() => [
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      dotRefs.forEach((ref, index) => {
        if (!ref.current) return;

        const progress = Number(
          ((Date.now() % (duration * 3)) / (duration * 3) - index / 3).toFixed(
            2
          )
        );

        const clamped = Math.max(0, Math.min(1, progress));
        const size = baseHeight + clamped * maxSize;

        ref.current.style.width = `${size}px`;
        ref.current.style.height = `${size}px`;
      });
    }, 16);

    return () => clearInterval(interval);
  }, [duration, maxSize, baseHeight, dotRefs]);

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        backgroundColor: '#9C28B1',
      }}
    >
      {dotRefs.map((ref, i) => (
        <div
          key={i}
          ref={ref}
          style={{
            backgroundColor: color,
            borderRadius: '50%',
            margin: '0 3px',
            width: baseHeight,
            height: baseHeight,
            display: 'inline-block',
          }}
        />
      ))}
    </div>
  );
};

export default BouncingDots;
