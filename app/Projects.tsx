"use client";

export default function Projects() {
  return (
    <section className="projects">
  <h2 className="projects-title">Projects</h2>

  <div className="projects-grid">
    <div className="project-card">
      <h3 className="project-title">Ghost-Ledger</h3>
      <p className="project-description">
       A replacement for the ctf-platforms that cannot be used anymore.
      </p>

      <div className="project-tags">
        <span className="project-tag">Next.js</span>
        <span className="project-tag">Web3-Onboard</span>
        <span className="project-tag">Viem</span>
      </div>

      <div className="project-links">
        <a className="project-link" href="https://ghost-ledger.vercel.app/">Live</a>
        <a className="project-link" href="https://github.com/raoaniruddh92/Ghost-Ledger">GitHub</a>
      </div>
    </div>


    <div className="project-card">
      <h3 className="project-title">Fund A coffee</h3>
      <p className="project-description">
        A platform where you can send me sepolia eth.
      </p>

      <div className="project-tags">
        <span className="project-tag">Next.js</span>
        <span className="project-tag">Web3-onboard</span>
        <span className="project-tag">Viem</span>
      </div>

      <div className="project-links">
        <a className="project-link" href="https://coffee-next-viem.vercel.app/">Live</a>
        <a className="project-link" href="https://github.com/raoaniruddh92/coffee-next-viem">GitHub</a>
      </div>
    </div>


  </div>

  
</section>

  )
}
