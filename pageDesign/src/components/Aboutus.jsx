import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    document.title = "About Me - Sushant Kumar Singh";
  }, []);

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen mt-12">
      {/* Connect with Me Section */}
      <section className="pt-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-indigo-600 animate-fade-in-down">
              Connect with Me
            </h1>
            <p className="mt-4 text-lg text-gray-700 animate-fade-in">
              Let's stay in touch! You can reach out to me through the following platforms.
            </p>
          </div>

          {/* Contact Icons */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {/* Email */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
              <a href="mailto:sushants2711@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope size={40} className="text-black mx-auto" />
                <h3 className="mt-4 text-xl font-semibold text-black">Email</h3>
              </a>
            </div>

            {/* LinkedIn */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
              <a href="https://www.linkedin.com/in/sushant-kumar-singh-414782230/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={40} className="text-blue-600 mx-auto" />
                <h3 className="mt-4 text-xl font-semibold text-blue-600">LinkedIn</h3>
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
              <a href="https://wa.me/7903759760" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={40} className="text-green-600 mx-auto" />
                <h3 className="mt-4 text-xl font-semibold text-green-600">WhatsApp</h3>
              </a>
            </div>

            {/* GitHub */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
              <a href="https://github.com/sushants2711" target="_blank" rel="noopener noreferrer">
                <FaGithub size={40} className="text-orange-600 mx-auto" />
                <h3 className="mt-4 text-xl font-semibold text-orange-600">GitHub</h3>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="pt-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-indigo-600 animate-fade-in-down">
              About Me
            </h1>
            <p className="mt-4 text-lg text-gray-700 animate-fade-in">
              I’m Sushant Kumar Singh, a passionate developer working to bridge
              the gap between backend efficiency and full-stack user experience.
            </p>
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Introduction */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 animate-slide-in-left">
              <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
                Who I Am
              </h2>
              <p className="text-gray-700 leading-relaxed">
                As an undergraduate at Chandigarh University, I have been
                deeply involved in backend development and full-stack
                applications. My expertise includes Django, Node.js, and
                MongoDB, and I’m currently advancing in the MERN stack for
                comprehensive full-stack solutions.
              </p>
              <p className="mt-4 text-gray-700">
                I have built several projects, solved complex programming
                challenges, and continuously strive to learn and improve my
                skills. My journey has also involved solving ES6 questions,
                exploring new APIs, and working on secure authentication
                systems.
              </p>
            </div>

            {/* Skills and Challenges */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 animate-slide-in-right">
              <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
                My Journey and Challenges
              </h2>
              <p className="text-gray-700 leading-relaxed">
                My path includes tackling challenges such as:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Building secure backend APIs with features like OTP verification.</li>
                <li>Integrating Cloudinary for seamless image uploads in projects.</li>
                <li>Optimizing Django and Node.js applications for scalability.</li>
                <li>Solving state management complexities in React.js.</li>
              </ul>
              <p className="mt-4 text-gray-700">
                I have also tested APIs using tools like Postman and developed
                secure systems using Express.js, Mailtrap, body-parser, and
                CORS.
              </p>
            </div>
          </div>

          {/* Projects Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-indigo-600 text-center mb-6">
              My Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                  Music Player System
                </h3>
                <p className="text-gray-700">
                  A dynamic Django project that allows users to play, manage,
                  and organize their favorite tracks with intuitive UI.
                </p>
              </div>
              {/* Project 2 */}
              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                  Online Voting System
                </h3>
                <p className="text-gray-700">
                  Developed a voting platform using Django with features like
                  poll creation, voting restrictions, and real-time results.
                </p>
              </div>
              {/* Project 3 */}
              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                  Image Uploader with Cloudinary
                </h3>
                <p className="text-gray-700">
                  A Django-based application where users can securely upload
                  images, leveraging Cloudinary for storage and management.
                </p>
              </div>
              {/* Project 4 */}
              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                  Secure Authentication System
                </h3>
                <p className="text-gray-700">
                  Built a Node.js system featuring OTP-based email
                  verification, password reset, and API testing with Postman.
                  Integrated technologies like Mailtrap, bcryptjs, and JWT.
                </p>
              </div>
            </div>
          </div>

          {/* Future Plans */}
          <div className="text-center mt-12">
            <h2 className="text-3xl font-bold text-indigo-600 mb-4">
              What’s Next?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Currently, I’m learning MERN stack development to become a
              proficient Full-Stack Developer. My next big project is an
              E-commerce website, where I aim to implement advanced features
              like real-time inventory updates, payment integration, and
              seamless user experiences.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
