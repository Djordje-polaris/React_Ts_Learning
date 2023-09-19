import React from "react";

type ModalProps = {
  modalShow: boolean;
  setModalShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal: React.FC<ModalProps> = ({ modalShow, setModalShow }) => {
  return (
    <div
      className={`${
        modalShow ? "visible" : "hidden"
      }  w-full h-full z-10 absolute flex justify-center items-center bg-black bg-opacity-25 p-0`}
    >
      <div className="bg-white pt-5 pb-5 p-8 rounded-xl h-60 flex items-center flex-col">
        <div className="flex justify-end w-full">
          <button
            onClick={() => {
              setModalShow(false);
            }}
          >
            <img src="./src/assets/x.svg" alt="X" />
          </button>
          
        </div>
        <div className="flex justify-center items-center p-8 h-full">
          <h1 className="font-bold uppercase text-3xl cursor-default">Niste pravilno uneli informacije</h1>
        </div>
      </div>
    </div>
  );
};

export default Modal;
