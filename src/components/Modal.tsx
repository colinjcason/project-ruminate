"use client";
import React from "react";
import { XmarkIcon } from "./icons";

type Props = {
  title: string;
  body: string;
  slot?: React.ReactElement;
};

function Modal({ title, body, slot = <></> }: Props) {
  return (
    <>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box p-8 rounded-2xl border-2 border-black shadow-solid-black">
          <form method="dialog" className="absolute top-2 right-2">
            <button>
              <XmarkIcon height={20} width={20} />
            </button>
          </form>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{body}</p>
        </div>
        {slot}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default Modal;
