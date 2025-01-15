"use client";
import React from "react";
import { XmarkIcon } from "./icons";

type Props = {
  title: string;
  body: string;
  slotAlignment?: "justify-start" | "justify-center" | "justify-end";
  children: React.ReactNode;
};

function Modal({
  title,
  body,
  slotAlignment = "justify-end",
  children,
}: Props) {
  return (
    <>
      <button
        className="btn"
        onClick={() => {
          const myModal = document.getElementById(
            "my_modal_1"
          ) as HTMLDialogElement;

          if (!myModal) return;

          myModal.showModal();
        }}
      >
        open modal
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box p-8 rounded-2xl border-2 border-black shadow-solid-black">
          <form method="dialog" className="absolute top-4 right-4">
            <button>
              <XmarkIcon height={20} width={20} />
            </button>
          </form>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{body}</p>
          <div className={"flex pt-4 " + slotAlignment}>{children}</div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default Modal;
