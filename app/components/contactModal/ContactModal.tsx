import { FormEvent, useEffect, useState, useRef } from "react";
import useContactModalStore from "@/app/store/useContactModalStore";
import FinalForm from "./FinalForm";
import MoreInfoForm from "./MoreInfoForm";
import Success from "./Success";

interface ModalProps {
  userQuestion: string;
  onClose: () => void;
}

export default function ContactModal({ onClose }: ModalProps) {
  const [expanded, setExpanded] = useState(false);
  const [formProgress, setFormProgress] = useState(0);
  const [formResponse, setFormResponse] = useState({
    data: { appointment: "" }
  });
  const [chatResponse, setChatResponse] = useState("");
  const userQuestion = useContactModalStore((state) => state.userQuestion);
  const [userMessage, setUserMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (userQuestion) {
      fetchStreamingResponse(userQuestion);
    }
  }, [userQuestion]);

  const fetchStreamingResponse = async (userQuestion: string) => {
    if (fetchInProgress.current) {
      return;
    }
    fetchInProgress.current = true;

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ userQuestion })
    });

    if (!response.body) {
      console.error("No response body received");
      fetchInProgress.current = false;
      return;
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let done = false;

    while (!done) {
      const { value, done: readerDone } = await reader.read();
      done = readerDone;

      if (value) {
        const chunk = decoder.decode(value, { stream: true });

        const lines = chunk.split("\n").filter((line) => line.trim() !== "");
        for (const line of lines) {
          if (line.startsWith("data:")) {
            const jsonString = line.replace(/^data: /, "");
            if (jsonString === "[DONE]") {
              done = true;
              break;
            }

            try {
              const parsed = JSON.parse(jsonString);
              const content = parsed.choices?.[0]?.delta?.content || "";

              if (content) {
                setChatResponse((prev) => prev + content);
              }
            } catch (err) {
              console.error("Failed to parse JSON", err);
            }
          }
        }
      }
    }
    fetchInProgress.current = false;
  };

  const fetchInProgress = useRef(false);
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
      <div
        className={`bg-white  overflow-scroll ${
          expanded
            ? "h-full inset-2"
            : " w-full sm:w-96 max-h-[600px] bottom-0 right-0"
        } mr-1 mx-auto rounded-3xl p-8 mb-4 absolute text-neutral-800 transition-all duration-500`}
      >
        <div className="flex justify-between items-center pr-5 relative bg-white">
          <h2 className="text-xl font-bold">{userQuestion}</h2>
          <button
            onClick={() => setExpanded(!expanded)}
            className=" text-black underline fixed right-4"
          >
            {expanded ? "Minimer" : "Utvid"}
          </button>
        </div>
        {formProgress === 0 && (
          <MoreInfoForm
            setUserMessage={setUserMessage}
            chatResponse={chatResponse}
            onClose={onClose}
            setFormProgress={setFormProgress}
          />
        )}
        {formProgress === 1 && (
          <FinalForm
            userMessage={userMessage}
            userQuestion={userQuestion}
            chatResponse={chatResponse}
            onClose={onClose}
            setFormProgress={setFormProgress}
            handleSubmit={handleSubmit}
            setFormResponse={setFormResponse}
          />
        )}
        {formProgress === 2 && (
          <Success onClose={onClose} formResponse={formResponse} />
        )}
      </div>
    </div>
  );
}
