import { FC } from "react";
import { Modal } from "shared/ui/Modal/Modal";
import { LoginForm } from "../LoginForm/LoginForm";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({ onClose, isOpen }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <LoginForm />
    </Modal>
  );
};
