import { FormEvent, useEffect, useState, useRef } from "react";
import useContactModalStore from "@/app/store/useContactModalStore";
import FinalForm from "./FinalForm";
import MoreInfoForm from "./MoreInfoForm";
import Success from "./Success";
import PrimaryButton from "../UI/PrimaryButton";

interface ModalProps {
  userQuestion: string;
  onClose: () => void;
}

interface MissingQuestionFormProps {
  setFormProgress: (value: number) => void;
  onClose: () => void;
}

function MissingQuestionForm({
  setFormProgress,
  onClose
}: MissingQuestionFormProps) {
  const setUserQuestion = useContactModalStore(
    (state) => state.setUserQuestion
  );
  const [subject, setSubject] = useState("");

  const handleSubmit = () => {
    setUserQuestion(subject);
    setFormProgress(1);
  };
  return (
    <div>
      <h2 className="text-xl">Hva gjelder din henvendelse?</h2>
      <p className="text-sm">
        Jeg trenger litt mer informasjon for å kunne hjelpe deg.
      </p>
      <label htmlFor="subject" className="block mt-4">
        Emne
      </label>
      <input
        type="text"
        id="subject"
        name="subject"
        placeholder="Eks. Jeg trenger ny hjemmeside.."
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="w-full bg-gray-100 rounded p-2 mb-2"
      />
      <div className="flex items-center space-x-4 mt-4">
        <PrimaryButton disabled={!subject} onClick={handleSubmit}>
          Videre
        </PrimaryButton>
        <button onClick={onClose} className="text-black underline">
          Lukk
        </button>
      </div>
    </div>
  );
}

export default function ContactModal({ onClose }: ModalProps) {
  const [expanded, setExpanded] = useState(false);
  const [formResponse, setFormResponse] = useState({
    data: { appointment: "" }
  });
  const [chatResponse, setChatResponse] = useState("");
  const userQuestion = useContactModalStore((state) => state.userQuestion);
  const [userMessage, setUserMessage] = useState("");
  const [formProgress, setFormProgress] = useState(userQuestion ? 1 : 0);

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
          <MissingQuestionForm
            setFormProgress={setFormProgress}
            onClose={onClose}
          />
        )}
        {formProgress === 1 && (
          <MoreInfoForm
            setUserMessage={setUserMessage}
            chatResponse={chatResponse}
            onClose={onClose}
            setFormProgress={setFormProgress}
          />
        )}
        {formProgress === 2 && (
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
        {formProgress === 3 && (
          <Success onClose={onClose} formResponse={formResponse} />
        )}
      </div>
    </div>
  );
}
