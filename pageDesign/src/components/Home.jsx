import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="max-w-[1320px] mx-auto shadow-lg h-auto mt-12 md:mt-24 p-6 bg-white rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Image Section with Animated Border */}
        <div className="relative flex justify-center items-center mx-auto p-4">
          {/* Animated Half Moving Border */}
          <div className="absolute md:w-96 md:h-96 rounded-full bg-gradient-to-r from-blue-500 via-transparent to-red-500 border-[1px] border-transparent animate-half-spin">
            <div className="absolute md:w-96 md:h-96 rounded-full bg-white"></div>
          </div>

          {/* Profile Image */}
          <img
            src="WhatsApp Image 2025-01-07 at 11.59.37.jpeg"
            alt="Sushant Kumar Singh"
            className="w-80 h-80 rounded-full shadow-md border-2 border-white z-10"
          />
        </div>

        {/* Text Section */}
        <section className="lg:col-span-2 flex flex-col justify-center text-center md:text-left p-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 border-b-2 border-blue-300 pb-2">
            Undergraduate Student | Aspiring Full-Stack Web Developer
          </h1>
          <p className="text-base md:text-lg leading-relaxed font-serif text-gray-700 first-letter:text-3xl first-letter:font-bold">
            Greetings! I’m <span className="font-bold">Sushant Kumar Singh</span>, hailing from the vibrant city of 
            <span className="font-bold"> Dhanbad, Jharkhand</span>. My journey began at 
            <span className="font-bold"> DAV Public School Kusunda, Dhanbad</span>, where I completed my 
            <span className="font-bold"> 10+2</span> education. Currently, I’m an enthusiastic 
            <span className="font-bold"> undergraduate student</span> at 
            <span className="font-bold"> Chandigarh University</span>, pursuing a Bachelor’s degree in 
            <span className="font-bold"> Computer Science</span>.
          </p>
          <p className="text-base md:text-lg leading-relaxed font-serif text-gray-700 mt-4">
            My passion lies in crafting dynamic and impactful web applications. Over the years, I have built expertise in a range of technologies including 
            <span className="font-bold"> HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, Java, Python, Django,</span> 
            and the <span className="font-bold">MERN Stack</span>. Each project I undertake is an opportunity to innovate and push my boundaries.
          </p>
          <p className="text-base md:text-lg leading-relaxed font-serif text-gray-700 mt-4">
            At the <span className="font-bold">Chandigarh University Tech Event Project Expo (2023-2024)</span>, I proudly showcased my projects, which include a 
            <span className="font-bold"> Music Player System, Online Voting System, Resume Builder,</span> and a 
            <span className="font-bold"> Photo and Video Uploader Website</span>. I am also deeply committed to research, as evidenced by my published paper on 
            <span className="font-bold">Image Processing</span>. These experiences have shaped me into a confident and resourceful developer.
          </p>
          <p className="text-base md:text-lg leading-relaxed font-serif text-gray-700 mt-4">
            Beyond academics, I embrace every opportunity to expand my horizons. My love for 
            <span className="font-bold"> backend development</span> fuels my drive to solve complex problems and create seamless user experiences. I find joy and challenge in playing 
            <span className="font-bold"> chess</span>, a game that sharpens my strategic thinking. As an avid 
            <span className="font-bold"> cricket enthusiast</span>, I relish both watching and playing the sport, which mirrors my belief in teamwork and perseverance.
          </p>
          <p className="text-lg md:text-xl leading-relaxed font-serif text-gray-700 mt-4">
            I’m also deeply intrigued by the worlds of 
            <span className="font-bold"> trading and investing</span>. These interests have cultivated my analytical mindset and taught me the value of patience and informed decision-making. Through coding, traveling, and constant learning, I aspire to blend my passions with a purpose—to make a meaningful impact in the tech industry.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;
