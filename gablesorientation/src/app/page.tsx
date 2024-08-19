import Image from "next/image";
import './styles/scrollbar.css';
0
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="flex left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Welcome to the City of Coral Gables Innovation and Technology
          Department!
        </p>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] padding:100px">
        <Image
          src="/cglogo.png"
          alt="City of Coral Gables Logo"
          width={300}
          height={375}
          priority
          className="p-4"
        />
      </div>

      <div className="text-center lg:text-left">
        <h1 className="text-4xl font-bold mb-6">Welcome, Interns!</h1>
        <p className="mb-6 text-lg">
          We are excited to have you on board with the City of Coral Gables
          Innovation and Technology Department. This page will guide you through
          your onboarding process. Let's get started on making your mark!
        </p>

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
            Once you are granted access, clone the repository:{" "}<br></br>
            <code>git clone https://CoralGablesIT/YourRepoName.git</code>
          </li>
          <li>
            Create your own branch:{" "}
            <code>git checkout -b your-branch-name</code>
          </li>
          <li>
            Make changes and commit: <code>git commit -m "Your message"</code>
          </li>
          <li>
            Push to your branch: <code>git push origin your-branch-name</code>
          </li>
          <li>Create a pull request and merge when ready.</li>
        </ol>

        <h2 className="text-2xl font-semibold mb-4">Helpful Git Commands</h2>
        <ul className="list-disc list-inside mb-6">
          <li>
            <code>git status</code> - Check the status of your files
          </li>
          <li>
            <code>git add .</code> - Add changes to staging
          </li>
          <li>
            <code>git commit -m "message"</code> - Commit your changes
          </li>
          <li>
            <code>git pull origin main</code> - Sync with the latest main branch
            changes
          </li>
        </ul>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">
            Watch This Git Tutorial
          </h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/SWYqp7iY_Tc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <h2 className="text-2xl font-semibold mb-4">Using Obsidian</h2>
          <ul className="list-disc list-inside mb-6 m-0 p-0">
          <li className="m-0 p-0">
              {""}Obsidian is a powerful note-taking app that allows you to create a
              personal knowledge base. It is a great tool for organizing your
              thoughts and ideas. Please use this throughout your internship in
              order to document the development process and your learning.
            </li>
            <li>
              <a
                href="https://obsidian.md/"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Download Obsidian
              </a>
            </li>
          </ul>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/QWYG_67ADv4?si=nsE67-jcKvNxaB7B"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      
    </main>
  );
}
