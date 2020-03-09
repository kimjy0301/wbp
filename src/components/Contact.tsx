import React from "react";
import bgImg from "../img/bg-contact.jpg";
import MapContainer from "./map/GoogleApi.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Contact() {
  return (
    <>
      <div>
        <div
          className="h-64 font-semibold text-gray-100 text-2xl text-center flex items-center main-bg flex flex-col mt-20 justify-center items-center bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${bgImg})`
          }}
        >
          <div>위치 및 문의</div>
          <div className="text-lg">
            월드베스트파트너스는 이곳에 위치하고 있습니다.
          </div>
        </div>
        <div className="flex flex-col lg:flex-row relative justify-center items-center py-12">
          <div className="bg-gray-400 relative google-map-size lg:google-map-size">
            <MapContainer></MapContainer>
          </div>
          <div className="ml-5 mt-3 lg:mt-10">
            <div className="flex flex-col">
              <span className="lg:text-xl font-semibold">ADDRESS</span>
              <span>
                서울특별시 종로구 종로1길 50, 비동 2층(중학동, 더케이트윈타워)
              </span>
            </div>
            <div className="flex mt-3 lg:mt-10">
              <div className="flex flex-col">
                <span className="lg:text-xl font-semibold">TEL</span>
                <span>010-1234-1234</span>
              </div>
              <div className="flex flex-col ml-5">
                <span className="lg:text-xl font-semibold">FAX</span>
                <span>010-1234-1234</span>
              </div>
            </div>
            <div className="flex flex-col mt-3 lg:mt-10">
              <span className="lg:text-xl font-semibold">EMAIL</span>
              <span>test@naver.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
