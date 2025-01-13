import { create } from "zustand";

interface ModalState {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  userQuestion: string;
  setUserQuestion: (question: string) => void;
}

const useContactModalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  userQuestion: "",
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
  setUserQuestion: (question) => set({ userQuestion: question })
}));

export default useContactModalStore;
