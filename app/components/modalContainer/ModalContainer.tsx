"use client";
import useContactModalStore from "@/app/store/useContactModalStore";
import ContactModal from "../contactModal/ContactModal";

export default function ModalContainer() {
  const { isModalOpen, closeModal } = useContactModalStore();
  return <div> {isModalOpen && <ContactModal onClose={closeModal} />}</div>;
}
