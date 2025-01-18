import React, { useEffect } from "react";
import { FaJava, FaPython, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMysql, SiTailwindcss, SiDjango, SiMongodb, SiCloudinary, SiBootstrap } from "react-icons/si";
import { HiMail } from "react-icons/hi";

const Languages = () => {

  const categories = [
    {
      title: "Languages",
      items: [
        { name: "JAVA", icon: <FaJava />, gradient: "bg-gradient-to-r from-red-500 to-yellow-500", url: "https://www.java.com" },
        { name: "PYTHON", icon: <FaPython />, gradient: "bg-gradient-to-r from-blue-500 to-indigo-500", url: "https://www.python.org" },
      ],
    },
    {
      title: "Scripting Languages",
      items: [
        { name: "HTML", icon: <SiTailwindcss />, gradient: "bg-gradient-to-r from-orange-500 to-pink-500", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "CSS", icon: <SiTailwindcss />, gradient: "bg-gradient-to-r from-teal-500 to-green-500", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "JavaScript", icon: <SiTailwindcss />, gradient: "bg-gradient-to-r from-yellow-500 to-red-500", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, gradient: "bg-gradient-to-r from-cyan-500 to-blue-500", url: "https://tailwindcss.com" },
      ],
    },
    {
      title: "Frameworks",
      items: [
        { name: "Django", icon: <SiDjango />, gradient: "bg-gradient-to-r from-gray-700 to-gray-500", url: "https://www.djangoproject.com" },
        { name: "Bootstrap", icon: <SiBootstrap />, gradient: "bg-gradient-to-r from-purple-500 to-indigo-500", url: "https://getbootstrap.com" },
      ],
    },
    {
      title: "Libraries",
      items: [
        { name: "REACT JS", icon: <FaReact />, gradient: "bg-gradient-to-r from-blue-400 to-purple-500", url: "https://reactjs.org" },
        { name: "NODE JS", icon: <FaNodeJs />, gradient: "bg-gradient-to-r from-green-600 to-teal-500", url: "https://nodejs.org" },
      ],
    },
    {
      title: "Databases",
      items: [
        { name: "Mongo DB", icon: <SiMongodb />, gradient: "bg-gradient-to-r from-green-700 to-green-500", url: "https://www.mongodb.com" },
        { name: "My SQL", icon: <SiMysql />, gradient: "bg-gradient-to-r from-blue-700 to-blue-500", url: "https://www.mysql.com" },
      ],
    },
    {
      title: "3rd Party Services",
      items: [
        { name: "Mailtrap", icon: <HiMail />, gradient: "bg-gradient-to-r from-purple-500 to-indigo-500", url: "https://mailtrap.io" },
        { name: "Cloudinary", icon: <SiCloudinary />, gradient: "bg-gradient-to-r from-blue-400 to-cyan-500", url: "https://cloudinary.com" },
      ],
    },
  ];

  useEffect(() => {
    document.title = "Languages";
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen my-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Technologies & Skills</h1>
      {categories.map((category, index) => (
        <div key={index} className="mb-12">
          {/* Category Title */}
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 md:ml-12">{category.title}</h2>

          {/* Category Items */}
          <div className="flex flex-wrap gap-6 justify-center md:justify-normal md:ml-24">
            {category.items.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative flex flex-col items-center justify-center w-40 h-40 rounded-lg text-white shadow-lg ${item.gradient} transform hover:scale-110 transition-transform duration-300`}
              >
                <div className="text-5xl drop-shadow-md">{item.icon}</div>
                <div className="mt-3 text-lg font-semibold drop-shadow-md">{item.name}</div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Languages;
