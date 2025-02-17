import { useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom";

import './Modal.css';

export default function Modal({ ref, children, buttonName="OK" }) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    }
  });

  return createPortal(
    <dialog ref={dialog}>
      {children}
      <form method="dialog">
        <button>{buttonName}</button>
      </form>
    </dialog>,
    document.getElementById('modal-root') // defined in index.html
  );
}
