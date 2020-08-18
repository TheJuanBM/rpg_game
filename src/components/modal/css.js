import styled from "styled-components";

export const BodyModal = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  align-items: center;
  justify-content: center;
  filter: ${(props) => (props.isActived ? "blur(10px)" : "blur(0px)")};
`;

export const Container = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.button`
  width: 100%;
  z-index: 10;
  display: flex;
  height: 100vh;
  cursor: pointer;
  position: absolute;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: 0;
  }
`;

export const Modal = styled.div`
  flex: 1;
  z-index: 10;
  width: 350px;
  height: 350px;
  padding: 20px;
  display: flex;
  position: absolute;
  flex-direction: column;

  @media (max-width: 640px) {
    width: 100%;
    height: 100vh;
    padding: 30px 0;
    border-radius: 0;
  }
`;

export const UpModal = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const ModalTitle = styled.h1`
  color: #000;
  opacity: 0.8;
  font-size: 25px;
  font-weight: 700;
  line-height: 20px;
  user-select: none;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: Barlow Semi Condensed;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (max-width: 640px) {
    width: 100vw;
    text-align: center;
  }
`;

export const BtnClose = styled.button`
  border: none;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  @media (max-width: 640px) {
    bottom: 0;
    width: 100vw;
    position: absolute;
    margin-bottom: 30px;
  }

  &:focus {
    outline: 0;
  }
  &:active {
    opacity: 0.5;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
