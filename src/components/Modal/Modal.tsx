import { ReactNode } from "react";
import "./Modal.css";

interface Props {
  children: ReactNode;
  isOpened: boolean;
  setIsOpened();
}
function Modal({ children, isOpened, setIsOpened }: Props) {
  if (!isOpened) {
    return null;
  }
  return (
    <div className="modal-container" onClick={setIsOpened}>
      {children}
    </div>
  );
}

export { Modal };
