"use client";

import { IModalRef } from "#root/types";
import { MutableRefObject, useRef } from "react";
import Modal from "./Modal";

export default function TestModal() {
  const modalRef = useRef() as MutableRefObject<IModalRef>;
  const openModal = () => modalRef.current?.open();

  return (
    <>
      <button onClick={openModal}>Open</button>
      <Modal ref={modalRef}>This is a child</Modal>
    </>
  );
}
