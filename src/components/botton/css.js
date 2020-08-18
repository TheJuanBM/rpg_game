import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.button`
  z-index: 1;
  position: relative;
  width: ${(props) => props.borderSize ?? "100px"};
  max-width: ${(props) => props.borderSize ?? "100px"};
  min-width: ${(props) => props.borderSize ?? "100px"};
  height: ${(props) => props.borderSize ?? "100px"};
  max-height: ${(props) => props.borderSize ?? "100px"};
  min-height: ${(props) => props.borderSize ?? "100px"};
  display: flex;
  align-items: center;
  border-radius: 100%;
  justify-content: center;
  box-shadow: 0px 5px 0px
    ${(props) =>
      props.type === "paper"
        ? "hsl(230, 89%, 50%)"
        : props.type === "scissors"
        ? "hsl(40, 84%, 38%)"
        : props.type === "rock"
        ? "hsl(349, 71%, 37%)"
        : ""};
  background-image: ${(props) =>
    props.type === "paper"
      ? "linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))"
      : props.type === "scissors"
      ? "linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))"
      : props.type === "rock"
      ? "linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))"
      : ""};
  ${(props) => (props.disabled ? "cursor: auto" : "cursor: pointer")};
  &:focus {
    outline: none;
    border-radius: 100%;
    box-shadow: 0px 0px 30px
      ${(props) =>
        props.type === "paper"
          ? "hsl(230, 89%, 62%)"
          : props.type === "scissors"
          ? "hsl(39, 89%, 49%)"
          : props.type === "rock"
          ? "hsl(349, 71%, 37%)"
          : ""};
  }
  &:active {
    width: 99px;
    height: 99px;
    ${(props) => props.disabled && "0.9"};
  }
`;

export const ContainerItem = styled.div`
  width: ${(props) => props.size ?? "80px"};
  height: ${(props) => props.size ?? "80px"};
  display: flex;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  background-color: hsl(250, 10%, 100%);
  box-shadow: inset 0px 6px 3px hsl(250, 0%, 65%);
  &:hover {
    ${(props) =>
      !props.disabled && "box-shadow: inset 0px 0px 10px hsl(250, 0%, 30%)"};
  }
`;

export const ContainerAnimatio = styled.div`
  width: 300px;
  display: flex;
  height: 300px;
  position: absolute;
  align-items: center;
  justify-content: center;
`;
