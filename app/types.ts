export type ModalType = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export type UserDataType = {
  name: string | null;
  university: string | null;
};
