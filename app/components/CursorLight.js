// app/components/CursorLight.js
"use client";
import { useEffect, useRef } from "react";

// Helper to interpolate between two values
function lerp(a, b, n) {
  return a + (b - a) * n;
}

export default function CursorLight() {
  const planeRef = useRef(null);
  const lightRef = useRef(null);
  // Track the target and current positions
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const target = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const moveTarget = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    window.addEventListener("mousemove", moveTarget);

    let animation;
    const animate = () => {
      // Smoothly interpolate position
      pos.current.x = lerp(pos.current.x, target.current.x, 0.07);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.07);
      if (planeRef.current) {
        planeRef.current.style.left = `${pos.current.x}px`;
        planeRef.current.style.top = `${pos.current.y}px`;
        // Calculate angle for plane rotation
        const dx = target.current.x - pos.current.x;
        const dy = target.current.y - pos.current.y;
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        planeRef.current.style.transform = `translate(-50%, -50%) rotate(${angle / 2}deg)`;
      }
      if (lightRef.current) {
        lightRef.current.style.left = `${pos.current.x}px`;
        lightRef.current.style.top = `${pos.current.y}px`;
      }
      animation = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener("mousemove", moveTarget);
      cancelAnimationFrame(animation);
    };
  }, []);

  return (
    <>
      {/* Glowing background light */}
      <div
        ref={lightRef}
        className="pointer-events-none fixed z-40 w-[28rem] h-[28rem] rounded-full bg-[radial-gradient(circle,rgba(180,220,255,0.13)_0%,rgba(255,255,255,0)_90%)] dark:bg-[radial-gradient(circle,rgba(80,120,255,0.10)_0%,rgba(0,0,0,0)_90%)] animate-glow"
        style={{
          transform: "translate(-50%, -50%)",
          mixBlendMode: "lighten",
          opacity: 0.45,
        }}
      />
      {/* Animated plane */}
      <div
        ref={planeRef}
        className="pointer-events-none fixed z-50 w-32 h-32 flex items-center justify-center"
        style={{
          transform: "translate(-50%, -50%)",
          transition: "transform 0.2s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <svg width="48" height="64" viewBox="0 0 48 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
          <g>
            {/* Pen body */}
            <rect x="20" y="8" width="8" height="36" rx="4" fill="#374151"/>
            {/* Pen grip */}
            <rect x="20" y="32" width="8" height="8" rx="3" fill="#60a5fa"/>
            {/* Pen clip */}
            <rect x="26" y="12" width="2" height="10" rx="1" fill="#a3e635"/>
            {/* Pen tip */}
            <polygon points="24,44 28,44 26,60" fill="#fbbf24"/>
            {/* Pen shine */}
            <rect x="22.5" y="12" width="2" height="16" rx="1" fill="#fff" opacity="0.18"/>
          </g>
        </svg>
      </div>
    </>
  );
}