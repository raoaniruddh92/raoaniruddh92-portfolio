"use client";

import { useState, useEffect } from "react";
import Projects from "./Projects";

const ROLES = ["Hacker", "Full Stack Developer", "Web3 Researcher"];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentRole = ROLES[roleIndex];
  const isHackerRole = currentRole === "Hacker";

  return (
    <main className="home-container">
      <section className="hero">
        <h1 className="masked-text">Hello I'm Aniruddh</h1>
        <h2 className="subtitle">I'm a</h2>
        
        <div className="role-container" aria-live="polite">
          <div 
            key={currentRole}
            className={isHackerRole ? "matrix-text" : "dev-text"} 
            data-text={currentRole.toUpperCase()}
          >
            {currentRole}
          </div>
        </div>

        <div className="blog-section">
          <a 
            href="https://medium.com/@raoaniruddh92" 
            className="blog-button"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Read my blog
            <svg className="button-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* --- About / Bio Section --- */}
<div className="bio-container">
  <p className="bio-lead">
    Passionate security researcher and blockchain developer specializing in 
    <span className="highlight"> exploit development</span> and 
    <span className="highlight"> smart contract security</span>.
  </p>

  <div className="expertise-grid">
    <div className="expertise-card">
      <div className="card-header">
        <span className="card-terminal-icon">_</span>
        <h4>Security</h4>
      </div>
      <p>Reverse Engineering, Cryptography, Web Security</p>
    </div>

    <div className="expertise-card">
      <div className="card-header">
        <span className="card-terminal-icon">_</span>
        <h4>Blockchain</h4>
      </div>
      <p>Solidity, dApp Architecture, Smart Contract Auditing</p>
    </div>

    <div className="expertise-card">
      <div className="card-header">
        <span className="card-terminal-icon">_</span>
        <h4>Development</h4>
      </div>
      <p>Next.js, Firebase, System Design, Full-Stack Engineering</p>
    </div>
  </div>
</div>

        <Projects />
      </section>
    </main>
  );
}