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
      }   w-screen h-screen absolute flex justify-center items-center bg-black bg-opacity-25 p-0`}
    >
      <div className="bg-white pt-5 pb-5 p-8 rounded-xl">
        <div className="flex justify-end">
          <button
            onClick={() => {
              setModalShow(false);
            }}
          >
            <img src="./src/assets/x.svg" alt="X" />
          </button>
        </div>
        <div>
          <h1 className="font-bold uppercase text-3xl">Niste pravilno uneli informacije</h1>
        </div>
      </div>
    </div>
  );
};

export default Modal;
