import React, { useState, useEffect } from "react";
import Lottie from "react-lottie-player";
import LoadingAnimation from "_assets/animations/loading.json";
import Body from "_components/body";
import Footer from "_components/footer";
import Header from "_components/header";
import Modal from "_components/modal";

const Scene = () => {
  useEffect(() => {
    return setScore(localStorage.getItem("score") || 0);
  }, []);

  const [isActived, setIsActived] = useState(false);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);

  const handleSetActived = () => {
    setIsActived(!isActived);
  };

  const handleScore = (newScore) => {
    localStorage.setItem("score", newScore);
    setScore(localStorage.getItem("score") || 0);
    setScore(newScore);
  };

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <>
      <Modal isActived={isActived} closeModal={() => handleSetActived()}>
        <div className="p-4 h-screen w-full flex-1 flex flex-col items-center justify-between overflow-hidden">
          <Header score={score} />
          {loading ? (
            <Lottie play animationData={LoadingAnimation} />
          ) : (
            <Body handleScore={(score) => handleScore(score)} score={score} />
          )}
          <Footer isActived={isActived} change={() => handleSetActived()} />
        </div>
      </Modal>
    </>
  );
};

export default Scene;
