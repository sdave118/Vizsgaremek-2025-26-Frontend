import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState, type ReactNode } from "react";

export type ModalProps = {
  trigger: ReactNode;
  title?: string;
  description?: string;
  children?: ReactNode;
  actions?: (close: () => void) => ReactNode;
};

const Modal = ({
  trigger,
  title,
  description,
  children,
  actions,
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const close = (): void => setIsOpen(false);
  const open = (): void => setIsOpen(true);

  return (
    <>
      <span
        onClick={open}
        style={{ display: "inline-block", cursor: "pointer" }}
      >
        {trigger}
      </span>

      <Dialog open={isOpen} onClose={close} className="relative z-50">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Centered panel */}
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="w-full max-w-lg space-y-4 rounded-2xl border border-gray-200 bg-white p-8 shadow-xl">
            {title && (
              <DialogTitle className="text-lg font-bold text-gray-900">
                {title}
              </DialogTitle>
            )}

            {description && (
              <Description className="text-sm text-gray-500">
                {description}
              </Description>
            )}

            {children && <div className="text-gray-700">{children}</div>}

            {actions && (
              <div className="flex justify-end gap-3 pt-2">
                {actions(close)}
              </div>
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
export default Modal;
