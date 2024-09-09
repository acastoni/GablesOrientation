"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import './styles/scrollbar.css';

export default function Home() {
  // Initialize checklist items and their checked state from localStorage if available
  const initialChecklist = [
    { text: "Logged into Microsoft365 (for all office apps)", checked: false },
    { text: "Downloaded useful developer tools (Git, IDE, etc.)", checked: false },
    { text: "Downloaded Obsidian", checked: false },
    { text: "Viewed the videos on basic GitHub tutorial and Obsidian tutorial", checked: false },
    { text: "Read and reviewed the city documentation on software development conventions", checked: false },
  ];

  const [checklist, setChecklist] = useState(() => {
    if (typeof window !== "undefined") {
      const savedChecklist = localStorage.getItem("checklist");
      return savedChecklist ? JSON.parse(savedChecklist) : initialChecklist;
    }
    return initialChecklist;
  });

  // Save checklist state to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("checklist", JSON.stringify(checklist));
    }
  }, [checklist]);

  // Handle toggling the checkbox state
  const handleCheckboxChange = (index: number) => {
    const updatedChecklist = checklist.map((item, idx) =>
      idx === index ? { ...item, checked: !item.checked } : item
    );
    setChecklist(updatedChecklist);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Welcome Section */}
      <div className="z-10 w-full max-w-5xl flex items-center justify-center font-mono text-sm">
        <p className="w-full text-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Welcome to the City of Coral Gables Innovation and Technology Department!
        </p>
      </div>

      {/* Logo Section */}
      <div className="relative z-[-1] flex justify-center items-center mt-12">
        <Image
          src="/cglogo.png"
          alt="City of Coral Gables Logo"
          width={300}
          height={375}
          priority
          className="p-4"
        />
      </div>

      {/* Onboarding Section */}
      <div className="w-full max-w-4xl text-center p-8 bg-black shadow-lg rounded-lg mt-12">
        <h1 className="text-4xl font-bold mb-6">Welcome!</h1>
        <p className="mb-6 text-lg">
          We are excited to have you on board with the City of Coral Gables Innovation and Technology Department. This page will guide you through your onboarding process. Let&apos;s get started on making your mark!
        </p>

        {/* Git Resources */}
        <h2 className="text-2xl font-semibold mb-4">Git Resources</h2>
        <ul className="list-disc list-inside mb-6">
          <li>
            <a
              href="https://git-scm.com/doc"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Official Git Documentation
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=SWYqp7iY_Tc"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Git Basics Tutorial Video
            </a>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Getting Started with Git and the Company Repository
        </h2>
        <ol className="list-decimal list-inside mb-6">
          <li>
            Once you are granted access, clone the repository:{" "}
            <br />
            <code>git clone https://CoralGablesIT/YourRepoName.git</code>
          </li>
          <li>
            Create your own branch:{" "}
            <code>git checkout -b your-branch-name</code>
          </li>
          <li>
            Make changes and commit:{" "}
            <code>git commit -m &quot;Your message&quot;</code>
          </li>
          <li>
            Push to your branch: <code>git push origin your-branch-name</code>
          </li>
          <li>Create a pull request and merge when ready.</li>
        </ol>

        <h2 className="text-2xl font-semibold mb-4">Helpful Git Commands</h2>
        <ul className="list-disc list-inside mb-6">
          <li><code>git status</code> - Check the status of your files</li>
          <li><code>git add .</code> - Add changes to staging</li>
          <li><code>git commit -m &quot;message&quot;</code> - Commit your changes</li>
          <li><code>git pull origin main</code> - Sync with the latest main branch changes</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Watch This Git Tutorial</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/SWYqp7iY_Tc"
          title="YouTube video player"
          frameBorder="0"
          className="w-full max-w-xl mx-auto"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">View PDF Guide</h2>
          <p className="mb-2 text-lg">
            Below are the proper software development guidelines as approved by the department for the City. It outlines the proper conventions to follow when working on projects, for software development version control and collaboration. Please take the time to review this document before starting your internship/position.
          </p>
          <a href="Github_Convetions.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-lg">
            View our proper GitHub Conventions
          </a>
        </div>

        <h2 className="text-2xl font-semibold mb-4 mt-10">Using Obsidian</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Obsidian is a powerful note-taking app that allows you to create a personal knowledge base. It is a great tool for organizing your thoughts and ideas. Please use this throughout your internship to document the development process and your learning.</li>
          <li>
            <a href="https://obsidian.md/" target="_blank" className="text-blue-500 hover:underline">
              Download Obsidian
            </a>
          </li>
        </ul>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QWYG_67ADv4?si=nsE67-jcKvNxaB7B"
          title="YouTube video player"
          frameBorder="0"
          className="w-full max-w-xl mx-auto"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

          {/* Checklist Section */}
          <h2 className="text-2xl font-semibold mb-4">Onboarding Checklist</h2>
        <ul className="list-none mb-6">
          {checklist.map((item, index) => (
            <li key={index} className="mb-4 flex items-center">
              <input
                type="checkbox"
                id={`checkbox-${index}`}
                checked={item.checked}
                onChange={() => handleCheckboxChange(index)}
                className="mr-2"
              />
              <label htmlFor={`checkbox-${index}`} className="text-lg">
                {item.text}
              </label>
            </li>
          ))}
        </ul>
    </main>
  );
}
