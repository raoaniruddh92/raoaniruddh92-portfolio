"use client";
import { useState, useEffect } from "react";
import Projects from "./Projects";

export default function Home() {
  const [isHacker, setIsHacker] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsHacker((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <section className="hero">
        <h1 className="masked-text">Hello I'm Aniruddh</h1>
        <h2 className="subtitle">I'm a</h2>
        
        <div className="role-container">
          {isHacker ? (
            <div className="matrix-text" data-text="HACKER">
              Hacker
            </div>
          ) : (
            <div className="dev-text">
              Full Stack Developer
            </div>
          )} 
        </div>
        <h1 >Check out <a href="https://medium.com/@raoaniruddh92">My blog</a></h1>
        <Projects />
      </section>

    </main>
  );
}