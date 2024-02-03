export type ModalType = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export type UserDataType = {
  name: string | null;
  university: string | null;
  teacher: string | null;
  grade: string | null;
  reasonText: string | null;
  date: string | null;
  time: string | null;
  lesson: string | null;
  id: string | null;
  mail: string | null;
  number: string | null;
};
