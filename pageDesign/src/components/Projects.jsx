import React, { useEffect } from "react";

const Projects = () => {

  const projects = [
  {
    name: "Online Voting System",
    description: "A Django-based application where users can create polls, vote, and view results in real-time.",
    gradient: "bg-gradient-to-r from-purple-500 to-indigo-500",
    links: [
      { label: "Source Code", url: "https://github.com/your-repo/voting-system" },
      // { label: "Pic", url: "https://your-live-demo-link.com" },
    ],
  },
  {
    name: "Music Player System",
    description: "A Django-powered music player with playlist and playback features.",
    gradient: "bg-gradient-to-r from-blue-600 to-green-500",
    links: [
      { label: "Source Code", url: "https://github.com/your-repo/music-player" },
      // { label: "Pic", url: "https://your-live-demo-link.com" },
    ],
  },
  {
    name: "Image Uploader in Node JS | Backend",
    description: "A secure image upload system using Multer and Cloudinary, built with Node.js and test all the API also Otp-Verification.",
    gradient: "bg-gradient-to-r from-green-500 to-yellow-400",
    links: [
      { label: "Source Code", url: "https://github.com/sushants2711/Mern-Image-Project" },
      // { label: "Pic", url: "https://your-live-demo-link.com" },
    ],
  },
  {
    name: "Secure Auth System",
    description: "A secure authentication system using JWT for user login and signup.",
    gradient: "bg-gradient-to-r from-red-500 to-yellow-500",
    links: [
      { label: "Source Code", url: "https://github.com/sushants2711/Secure-auth-using-jwt" },
      // { label: "Pic", url: "https://your-live-demo-link.com" },
    ],
  },
  {
    name: "Text Converter",
    description: "A React-based text converter with various text manipulation features.",
    gradient: "bg-gradient-to-r from-blue-500 to-purple-500",
    links: [
      { label: "Source Code", url: "https://github.com/sushants2711/Text-Convertor-in-React" },
      // { label: "Pic", url: "https://your-live-demo-link.com" },
    ],
  },
  {
    name: "Image and Video Uploader in Django",
    description: "A Django project for securely uploading and managing images and videos, with preview functionality.",
    gradient: "bg-gradient-to-r from-pink-500 to-orange-400",
    links: [
      { label: "Source Code", url: "https://github.com/your-repo/image-video-uploader" },
      // { label: "Pic", url: "https://your-live-demo-link.com" },
    ],
  },

  {
    name: "Simple Home Page UI ",
    description: "Created a simple Home Page UI for grocery",
    gradient: "bg-gradient-to-r from-indigo-800 to-gray-200",
    links: [
      { label: "Source Code", url: "https://github.com/sushants2711/page-design-Tailwind" },
      // { label: "Pic", url: "https://your-live-demo-link.com", target:"_blank"},
    ],
  },
];


  useEffect(() => {
    document.title = "Projects";
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen my-4">
      <h1 className="text-4xl font-bold text-center mt-16 mb-8 text-gray-800">Projects</h1>
      <div className="flex flex-wrap gap-12 justify-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center justify-center w-80 h-80 rounded-lg text-white shadow-lg ${project.gradient} transform hover:scale-105 transition-transform duration-300 p-6`}
          >
            <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
            <p className="text-center mb-4">{project.description}</p>
            <div className="flex gap-4">
              {project.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 rounded-lg text-sm hover:bg-gray-700 transition"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
