import React from "react";
import bgImg from "../img/bg-business.jpg";

function Business() {
  return (
    <>
      <div>
        <div
          className="h-64 font-semibold text-gray-100 text-2xl text-center flex items-center main-bg flex flex-col mt-16 justify-center items-center bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${bgImg})`
          }}
        >
          <div>사업소개</div>
          <div className="text-lg">
            월드베스트파트너스는 사업분야는 이렇습니다.
          </div>
        </div>
        <div className="h-64 font-semibold text-white-800 text-3xl text-center flex items-center">
          <div>Business</div>
        </div>
        <div className="h-64 font-semibold text-white-800 text-3xl text-center flex items-center">
          <div>Business</div>
        </div>
        <div className="h-64 font-semibold text-white-800 text-3xl text-center flex items-center">
          <div>Business</div>
        </div>
        <div className="h-64 font-semibold text-white-800 text-3xl text-center flex items-center">
          <div>Business</div>
        </div>
        <div className="h-64 font-semibold text-white-800 text-3xl text-center flex items-center">
          <div>Business</div>
        </div>
      </div>
    </>
  );
}

export default Business;
