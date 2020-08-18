import React from "react";
import * as S from "./css";

const Footer = ({ isActived, change }) => {
  return (
    <div className="flex flex-row justify-center xs:justify-center sm:justify-center md:justify-end lg:justify-end xl:justify-end items-center w-full">
      <button
        aria-label="open modal"
        disabled={isActived}
        onClick={() => change()}
        className="border-2 hover:bg-gray-600 focus:outline-none focus:shadow-lg focus:border-gray-400 focus:border-5 rounded-lg px-8 py-1 border-gray-600 border-solid"
      >
        <S.TextBtn>Rules</S.TextBtn>
      </button>
    </div>
  );
};

export default Footer;
