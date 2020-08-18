import React from "react";
import Close from "_assets/icons/icon-close.svg?sprite";
import Rules from "_assets/images/rules.svg?sprite";
import * as S from "./css";

const ModalItem = ({ closeModal }) => {
  return (
    <S.Container>
      <S.Background aria-label="close modal" onClick={() => closeModal()} />
      <S.Modal className="bg-gray-100 rounded-lg">
        <S.UpModal>
          <S.ModalTitle>rules</S.ModalTitle>
          <S.BtnClose aria-label="close modal" onClick={() => closeModal()}>
            <Close width="20px" />
          </S.BtnClose>
        </S.UpModal>
        <S.Content>
          <Rules width="300px" />
        </S.Content>
      </S.Modal>
    </S.Container>
  );
};

const Modal = ({ children, isActived, closeModal }) => {
  return (
    <>
      {isActived && <ModalItem closeModal={() => closeModal()} />}
      <S.BodyModal isActived={isActived}>{children}</S.BodyModal>
    </>
  );
};

export default Modal;
