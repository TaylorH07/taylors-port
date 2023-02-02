import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#02020c] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 pl-4 ">
            <p className="text-4xl font-bold inline border-b-4 border-[#45ffd7] anaglyph">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 ">
          <div className=" sm:text-right text-4xl font-bold ">
            <p>
              {" "}
              Hey, I am ecstatic that you are here! Please take a look around.{" "}
            </p>
          </div>
          <div>
            <p>
              -- I graduated from SMU’s Full Stack Web Development Program while
              working as a full time special education inclusion teacher and
              coaching multiple sports. As someone who comes from a strong
              educational background, hardwork and the drive to learn never
              ends. From being a collegiate football team captain and a member
              of the team's leadership committee to becoming a middle school
              teacher and coach, leadership has always come naturally to me. I
              bring a strong work ethic, unparalleled patience, and the ability
              to complete tasks in an unconventional environment. My attention
              to detail, creativity and teamwork are my greatest strengths. I am
              eager to apply my skills and become a part of your software
              engineering team!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
