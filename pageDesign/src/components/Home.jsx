import React, { useEffect } from "react";

const Home = () => {
    useEffect(()=> {
        document.title="Home"
})
    return (
        <div className="max-w-[1320px] mx-auto shadow-lg h-auto mt-24">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                {/* Image Section */}
                <div className="my-2 mx-4 md:border-none border-2 border-black p-1 lg:col-span-1">
                    <img
                        src="WhatsApp Image 2025-01-07 at 11.59.37.jpeg"
                        alt="Image description"
                        className="w-full h-auto"
                    />
                </div>

                {/* Text Section */}
                <section className="lg:col-span-2 md:col-span-1 flex flex-col text-center md:text-lef p-4">
                    
                    <div className=" md:border-none border-2 border-black p-2 mr-2">
                        <h1 className="text-xl md:text-2xl text-center font-semibold mt-2 underline first-letter:text-3xl">Undergraduate Student | Aspiring Full-Stack Web Developer</h1>
                        <p className="text-sm md:text-xl leading-normal mt-2 font-serif p-2 text-justify first-letter:text-3xl">Hello! I'm Sushant Kumar Singh from Dhanbad Jharkhand. I completed my <span className="font-bold">10+2</span> from <span className="font-bold">DAV Public School Kusunda Dhanbad. </span>
                            Currently i am an <span className="font-bold">undergraduate student at Chandigarh University pursuing a Bachelor of Engineering 
                            in Computer Science Domain</span>. I'm very passionate about building impactful web applications and specialize in <span className="font-bold">full-stack Web development</span>.
                            In my academic years i have learn several languages like <span className="font-bold">HTML, CSS, JavaScript, Bootstrap, Tailwind Css, Java, Python, Django and MERN Stack</span>.
                            I have also Participate in <span className="font-bold">CHANDIGARH UNIVERSITY</span> tech event project expo in 2023-2024. Taliking about my project i have done <span className="font-bold">Music Player System,
                             Online Voting System, Resume Builder, Photo and Video Uploader Website </span> and currently i am working on A Student Poratl System.
                              I also done a research paper in Image processing and publish it. Apart from this i am very passionate in Trading, Investing, Coding and Travelling.
                        </p>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Home;
