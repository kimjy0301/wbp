import React from "react";
import bgImg from "../img/bg-about.jpg";
function About() {
  return (
    <>
      <div>
        <div
          className="h-64 font-semibold text-gray-100 text-2xl text-center flex items-center main-bg flex flex-col mt-16 justify-center items-center bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${bgImg})`
          }}
        >
          <div>회사소개</div>
          <div className="text-lg">월드베스트파트너스는 어떠한 회사입니다.</div>
        </div>
        <div className="h-64 font-semibold text-white-800 text-3xl text-center flex flex-wrap items-center">
          <div className="overflow-hidden">
            Aboutasdfasdfasdfasdfasdfasdfasdfas
          </div>
        </div>
        <div className="h-64 font-semibold text-white-800 text-3xl text-center flex items-center">
          <div>Aboutasdfasdfaa</div>
        </div>
        <div className="h-64 font-semibold text-white-800 text-3xl text-center flex items-center">
          <div>Abosssssut</div>
        </div>
        <div className="h-64 font-semibold text-white-800 text-3xl text-center flex items-center">
          <div>About</div>
        </div>
        <div className="h-64 font-semibold text-white-800 text-3xl text-center flex items-center">
          <div>About</div>
        </div>
      </div>
    </>
  );
}

export default About;
