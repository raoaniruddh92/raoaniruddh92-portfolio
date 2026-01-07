"use client";

import React from 'react';

// --- Types & Interfaces ---

interface ProjectLink {
  label: string;
  href: string;
}

interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
}

interface PublicationData {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

// Props for the reusable card component
interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  links?: ProjectLink[]; // Optional: only for Projects
  publicationLink?: string; // Optional: only for Publications
}

// --- Data ---

const PROJECTS: ProjectData[] = [
  {
    title: "Ghost-Ledger",
    description: "A decentralized alternative for Capture The Flag (CTF) platforms, providing a robust ledger system for security competitions.",
    tags: ["Next.js", "Web3-Onboard", "Viem"],
    links: [
      { label: "Live", href: "https://ghost-ledger.vercel.app/" },
      { label: "GitHub", href: "https://github.com/raoaniruddh92/Ghost-Ledger" },
    ],
  },
  {
    title: "Fund A Coffee",
    description: "A Web3 tipping application enabling users to support creators via Ethereum Sepolia testnet transactions.",
    tags: ["Next.js", "Web3-onboard", "Viem"],
    links: [
      { label: "Live", href: "https://coffee-next-viem.vercel.app/" },
      { label: "GitHub", href: "https://github.com/raoaniruddh92/coffee-next-viem" },
    ],
  },
];

const PUBLICATIONS: PublicationData[] = [
  {
    title: "Cloud-Integrated Blockchain Solution for Agricultural Sales Tracking",
    description: "A specialized platform for farmers to transparently track earnings and manage seed expenditure using blockchain technology.",
    tags: ["React", "Metamask", "Ethers.js"],
    link: "https://ieeexplore.ieee.org/document/10726066",
  },
  {
    title: "Cluster Based Classification of Question Independent C Codes",
    description: "Research introducing a novel approach using CodeBERT embeddings to classify code correctness through cluster analysis.",
    tags: ["Python", "CodeBERT", "Machine Learning"],
    link: "https://ifip.hal.science/IFIP-AICT-723/hal-05157383",
  },
];

// --- Sub-Components ---

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  tags, 
  links, 
  publicationLink 
}) => (
  <div className="project-card">
    <h3 className="project-title">{title}</h3>
    <p className="project-description">{description}</p>

    <div className="project-tags">
      {tags.map((tag) => (
        <span key={tag} className="project-tag">{tag}</span>
      ))}
    </div>

    <div className="project-links">
      {links ? (
        links.map((link) => (
          <a 
            key={link.label} 
            className="project-link" 
            href={link.href} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ))
      ) : (
        <a 
          className="Publication-Link" 
          href={publicationLink} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          View Publication
        </a>
      )}
    </div>
  </div>
);

// --- Main Component ---

export default function Projects() {
  return (
    <section className="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <h2 className="projects-title" style={{ marginTop: '3rem' }}>
        My Publications
      </h2>
      <div className="projects-grid">
        {PUBLICATIONS.map((pub) => (
          <ProjectCard 
            key={pub.title} 
            title={pub.title}
            description={pub.description}
            tags={pub.tags}
            publicationLink={pub.link}
          />
        ))}
      </div>
    </section>
  );
}