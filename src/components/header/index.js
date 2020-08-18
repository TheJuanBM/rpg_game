import React from "react";
import Logo from "_assets/images/logo.svg?sprite";
import * as S from "./css";

const Header = ({ score }) => {
  return (
    <div className="w-full sm:w-full lg:w-1/2 xl:w-1/2 p-4 flex flex-row rounded-lg border-gray-600 border-2 border-solid justify-between">
      <div className="flex flex-shrink">
        <Logo width="130px" />
      </div>
      <div className="px-6 py-3 rounded-md bg-white flex flex-col justify-between items-center overflow-hidden break-all max-w-sm">
        <S.ScoreTitle className="w-full truncate select-none">
          score
        </S.ScoreTitle>
        <S.Score className="truncate w-full select-none">{score}</S.Score>
      </div>
    </div>
  );
};

export default Header;
