import { prompt } from "@/app/actions";
import { FormEvent, useEffect, useState } from "react";
import useContactModalStore from "@/app/store/useContactModalStore";

interface ModalProps {
  userQuestion: string;
  onClose: () => void;
}

export default function ContactModal({ onClose }: ModalProps) {
  const [promptResponse, setPromptResponse] = useState("");
  const userQuestion = useContactModalStore((state) => state.userQuestion);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (promptResponse != "") {
      return;
    }
    if (userQuestion === "") {
      return;
    }
    const getPrompt = async () => {
      const response = await prompt(userQuestion);
      setPromptResponse(response);
    };
    getPrompt();
  }, [userQuestion, promptResponse]);
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
      <div className="bg-white w-full max-h-[600px] overflow-scroll sm:w-96 mr-1 mx-auto rounded-3xl p-8 mb-4 absolute bottom-0 right-0 text-neutral-800">
        <h2 className="text-xl font-bold">{userQuestion}</h2>
        <p className="mt-2 text-green-900 whitespace-pre-wrap">
          {promptResponse}
        </p>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <label htmlFor="message" className="block">
            Svar så godt du kan og trykk videre
            <textarea
              id="message"
              className="w-full bg-gray-100 rounded-3xl p-2"
            ></textarea>
          </label>
          <div className="flex items-center space-x-4">
            <button
              type="submit"
              className="bg-black text-white rounded-3xl p-2 w-full"
            >
              Videre
            </button>
            <button onClick={onClose} className="text-black underline">
              Lukk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
