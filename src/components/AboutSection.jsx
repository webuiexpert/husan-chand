import React from "react";


function AboutSection() {
  return (
    <div id="about" className="w-full">
      <div className="max-w-[1320px] mx-auto flex justify-between items-start lg:py-20 py-10 gap-10 lg:flex-row flex-col lg:px-0  md:px-8 sm:px-6 px-4">
        <div className="expText lg:w-1/2">
          <h2 className="lg:text-[42px] text-[32px] md:leading-9 font-extrabold">
            My Experience as a
          </h2>
          <h2 className="lg:text-[30px] text-[22px]  leading-7 md:leading-12 lg:leading-[1.87em] font-extrabold">
            Digital Marketing & Sales Strategist
          </h2>
          <p className="lg:text-[18px] text-[#4c4040] text-[16px] leading-[1.5em]  lg:mt-0 mt-2">
          With over 8+ years of experience, I specialize in crafting effective digital marketing strategies that drive results for both B2B and B2C brands. My goals is to deliver impactful and engaging content that elevates brand visibility and accelerates growth.
          </p>
          <p className="lg:text-[18px] text-[#4c4040] text-[16px] leading-[1.5em] mt-5 pr-4">
          I’m skilled at developing strategies and project roadmaps using the latest trends and tools in digital marketing. My expertise spans across brand optimization, SEO, PPC campaign management, and advanced web analytics, allowing me to create tailored strategies that boost online presence and performance.
          </p>
          <p className="lg:text-[18px] text-[#4c4040] text-[16px] leading-[1.5em] mt-5 pr-4">
          Whether it's running successful SEO and PPC campaigns, optimizing user journeys, or leading social media, content, and email marketing initiatives, I’ve successfully managed multiple projects that have led to measurable improvements in brand awareness and business outcomes.
          </p>
          <button className="bookBtn relative hover:bg-[#1E1E79] mt-5 text-[18px] leading-8 px-8 py-2 border text-white font-bold bg-[#13a300]">
            <a href="https://webuiexpert.com/wp-content/uploads/2024/11/Hushan_Chand_-_Digital_Marketing_Expert_SMMPPCSEO.pdf" target="_black">Download Resume</a>
          </button>
        </div>
        <div className="expYear lg:w-1/2 lg:pl-10 flex text-[14px] flex-col gap-5">
          <div className="2019 flex flex-col items-start">
            <div className="innerCol flex items-center gap-2">
              <h3 className="text-[26px] leading-[1em] font-bold">2021</h3>
              <div className="w-7 h-[3px] bg-black"></div>
              <h3 className="text-[26px] font-bold leading-[1em]">Present</h3>
            </div>
            <h4 className="lg:text-[20px] text:[18px] font-bold">
              Freelance Digital Marketing & Sales Strategist.
            </h4>
            <p className="lg:text-[16px] text-[14px] text-[#2d2d2d]">
              I worked as Manager of SEO. Leading a Team of 10+ SEO specialists
              & 20 active clients.
            </p>
          </div>
          <div className="13-20 flex flex-col items-start">
            <div className="innerCol flex items-center gap-2">
              <h3 className="text-[26px] leading-[1em] font-bold">2019</h3>
              <div className="w-7 h-[3px] bg-black"></div>
              <h3 className="text-[26px] font-bold leading-[1em]">2021</h3>
            </div>
            <h4 className="lg:text-[20px] text:[18px] font-bold">
            Sr. Digital Marketing Executive at Softprodigy.
            </h4>
            <p className="lg:text-[16px] text-[14px] text-[#2d2d2d]">
            I worked as Manager of SEO. Leading a Team of 10+ SEO specialists & 20 active clients.
            </p>
          </div>
          <div className="11-13 flex flex-col items-start">
            <div className="innerCol flex items-center gap-2">
              <h3 className="text-[26px] leading-[1em] font-bold">2015</h3>
              <div className="w-7 h-[3px] bg-black"></div>
              <h3 className="text-[26px] font-bold leading-[1em]">2018</h3>
            </div>
            <h4 className="lg:text-[20px] text:[18px] font-bold">
            Digital Marketing Executive at Wwics.
            </h4>
            <p className="lg:text-[16px] text-[14px] text-[#2d2d2d]">
              I worked as Manager of SEO. Leading a Team of 10+ SEO specialists
              & 20 active clients.
            </p>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default AboutSection;
