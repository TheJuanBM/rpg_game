import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const RowUp = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const RowDown = styled.div`
  flex: 1;
  width: 250px;
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: center;
`;

export const Position = styled.div`
  flex: 1;
  ${(props) =>
    props.left
      ? "top: -140px"
      : props.right
      ? "top: -140px"
      : "bottom: -110px"};
  display: flex;
  position: absolute;
  ${(props) =>
    props.left ? "left: -150px" : props.right ? "right: -150px" : "0"};
`;

export const BackTriangle = styled.div`
  position: absolute;
`;

export const Result = styled.h2`
  color: #fff;
  font-size: 70px;
  font-weight: 700;
  user-select: none;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-family: Barlow Semi Condensed;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
