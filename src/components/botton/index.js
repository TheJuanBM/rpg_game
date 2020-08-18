import React from "react";
import Lottie from "react-lottie-player";
import Glowing from "_assets/animations/glowing.json";
import Paper from "_assets/icons/icon-paper.svg?sprite";
import Rock from "_assets/icons/icon-rock.svg?sprite";
import Scissors from "_assets/icons/icon-scissors.svg?sprite";
import * as S from "./css";

const Botton = ({
  type,
  handleSetSelected,
  disabled,
  borderSize,
  size,
  win,
}) => {
  return (
    <>
      {type && (
        <S.Container>
          {win && (
            <S.ContainerAnimatio>
              <Lottie play animationData={Glowing} />
            </S.ContainerAnimatio>
          )}
          <S.Item
            borderSize={borderSize ?? "100px"}
            disabled={disabled}
            onClick={() =>
              handleSetSelected(
                type === "paper"
                  ? 1
                  : type === "scissors"
                  ? 2
                  : type === "rock" && 3
              )
            }
            aria-label={
              type === "paper"
                ? "Select Paper"
                : type === "rock"
                ? "Select Rock"
                : type === "scissors" && "Select Scissors"
            }
            type={type}
          >
            <S.ContainerItem size={size ?? "80px"} disabled={disabled}>
              {type === "paper" ? (
                <Paper width="35px" />
              ) : type === "rock" ? (
                <Rock width="35px" />
              ) : (
                type === "scissors" && <Scissors width="35px" />
              )}
            </S.ContainerItem>
          </S.Item>
        </S.Container>
      )}
    </>
  );
};
export default Botton;
