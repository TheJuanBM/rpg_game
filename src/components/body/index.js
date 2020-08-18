import React, { useState } from "react";
import BgTriangle from "_assets/images/bg-triangle.svg?sprite";
import Item from "_components/botton";
import * as S from "./css";

const Result = ({ handlePlayAgain, win, selected, machine }) => {
  return (
    <div className="px-0 ms:px-0 md:px-0 lg:px-20 xl:px-40 flex flex-1 flex-col justify-center items-center w-full md:max-w-4xl">
      <div className="flex flex-row w-full justify-between">
        <Item
          win={win}
          disabled={true}
          selected={selected}
          machine={machine}
          size="100px"
          borderSize="130px"
          type={
            selected === 1
              ? "paper"
              : selected === 2
              ? "scissors"
              : selected === 3 && "rock"
          }
        />
        <Item
          win={!win}
          disabled={true}
          size="100px"
          borderSize="130px"
          type={
            machine === 1
              ? "paper"
              : machine === 2
              ? "scissors"
              : machine === 3 && "rock"
          }
        />
      </div>

      <div className="flex flex-col items-center relative xl:absolute">
        <S.Result>{win ? "YOU WIN" : "YOU LOSE"}</S.Result>
        <button
          className={`w-64 bg-white hover:bg-gray-300 focus:outline-none focus:border-blue-600 focus:border-4 ${
            win ? "text-indigo-900" : "text-red-600"
          } uppercase font-medium tracking-widest py-3 hover:border-blue-500 rounded z-10`}
          aria-label="Play again"
          onClick={() => handlePlayAgain()}
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

const Body = ({ handleScore, score }) => {
  const [win, setWin] = useState(false);
  const [machine, setMachine] = useState(0);
  const [selected, setSelected] = useState(0);
  const [items, setItems] = useState([1, 2, 3]);
  const [state, setState] = useState(false);

  const handlePlayAgain = () => {
    setItems([1, 2, 3]);
    setState(false);
    setSelected(0);
    setMachine(0);
  };

  const handleSetSelected = (number) => {
    setSelected(number);
    const validOptions = items.filter((n) => n !== number);
    const machineResult =
      validOptions[Math.floor(Math.random() * validOptions.length)];
    setMachine(machineResult);
    switch (number) {
      case 1:
        if (machineResult === 2) {
          wenWin(false);
        } else {
          wenWin(true);
        }
        break;
      case 2:
        if (machineResult === 3) {
          wenWin(false);
        } else {
          wenWin(true);
        }
        break;
      case 3:
        if (machineResult === 1) {
          wenWin(false);
        } else {
          wenWin(true);
        }
        break;
      default:
        break;
    }
    setState(true);
  };

  const wenWin = (value) => {
    setWin(value);
    if (value) {
      handleScore(score + 1);
    } else {
      score > 0 && handleScore(score - 1);
    }
  };

  return (
    <>
      {state ? (
        <Result
          win={win}
          selected={selected}
          machine={machine}
          handlePlayAgain={() => handlePlayAgain()}
        />
      ) : (
        <div className="w-1/2 flex flex-1 justify-center items-center">
          <S.Container>
            <S.RowUp>
              <S.Position left>
                <Item
                  type="paper"
                  handleSetSelected={(number) => handleSetSelected(number)}
                />
              </S.Position>
              <S.Position right>
                <Item
                  type="scissors"
                  handleSetSelected={(number) => handleSetSelected(number)}
                />
              </S.Position>
            </S.RowUp>
            <S.RowDown>
              <S.Position>
                <Item
                  type="rock"
                  handleSetSelected={(number) => handleSetSelected(number)}
                />
              </S.Position>
            </S.RowDown>
            <S.BackTriangle>
              <BgTriangle width="250px" height="200px" />
            </S.BackTriangle>
          </S.Container>
        </div>
      )}
    </>
  );
};

export default Body;
