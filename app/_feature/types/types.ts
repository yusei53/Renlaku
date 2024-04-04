export type ModalType = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export type SkipClassUserType = {
  reasonText: string | null;
  name: string | null;
  university: string | null;
  teacher: string | null;
  grade: string | null;
  date: string | null;
  time: string | null;
  lesson: string | null;
  universityNumber: string | null;
  universityEmail: string | null;
  phoneNumber: string | null;
};

export type CancelJobOfferUserType = {
  reasonText: string | null;
  reasonLabel: string | null;
  company: string | null;
  companyUserName: string | null;
  university: string | null;
  grade: string | null;
  name: string | null;
  privateEmail: string | null;
  phoneNumber: string | null;
};

export type SkipPartTimeUserType = {
  reasonText: string | null;
  name: string | null;
};
