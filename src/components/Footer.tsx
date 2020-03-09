import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-gray-200 py-10  px-3 flex flex-col items-center justify-center text-xs font-semibold md:text-base">
        <div>(주)월드베스트파트너스(WORLD BEST PARTNERS Corp.)</div>
        <div>
          <span className="mx-3">대표이사:유승규</span>
          <span className="mx-3">사업자번호:123-45-67890</span>
          <span className="mx-3">통신판매업신고번호:2020-1234-123151호</span>
        </div>
        <div>
          <span className="mx-3">
            주소:서울특별시 종로구 종로1길 50, 비동 2층(중학동, 더케이트윈타워)
          </span>
          <span className="mx-3">대표번호:010-2997-0817</span>
          <span className="mx-3">FAX:02-1230-1234</span>
        </div>
      </div>
      <div className="bg-gray-300 text-gray-600 py-8 px-3 flex flex-col items-center justify-center text-xs font-semibold md:text-xl">
        <div>COPYRIGHT (C)2020 월드베스트파트너스 ALL RIGHTS RESERVED</div>
      </div>
    </>
  );
}

export default Footer;
