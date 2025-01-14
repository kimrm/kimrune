import { FormEvent, useEffect, useState, useRef } from "react";
import useContactModalStore from "@/app/store/useContactModalStore";
import { fetchAvailableDates } from "@/app/actions";

interface ModalProps {
  userQuestion: string;
  onClose: () => void;
}

interface AvailableEvent {
  id: string;
  day: string;
  date: string;
  time: string;
  startHour: string;
}

export default function ContactModal({ onClose }: ModalProps) {
  const [expanded, setExpanded] = useState(false);
  const [nextStep, setNextStep] = useState(false);
  const [chatResponse, setChatResponse] = useState("");
  const userQuestion = useContactModalStore((state) => state.userQuestion);

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

        {nextStep ? (
          <FinalForm
            onClose={onClose}
            setNextStep={setNextStep}
            handleSubmit={handleSubmit}
          />
        ) : (
          <MoreInfoForm
            chatResponse={chatResponse}
            onClose={onClose}
            setNextStep={setNextStep}
          />
        )}
      </div>
    </div>
  );
}

interface FinalFormProps {
  onClose: () => void;
  setNextStep: (value: boolean) => void;
  handleSubmit: (e: FormEvent) => void;
}

function FinalForm({ onClose, setNextStep, handleSubmit }: FinalFormProps) {
  const [phone, setPhone] = useState("");
  const [availableDates, setAvailableDates] = useState<AvailableEvent[]>([]);

  useEffect(() => {
    fetchAvailableDates().then((data) => {
      setAvailableDates(data);
    });
  }, [phone]);
  return (
    <div>
      <h2 className="text-lg mt-2">
        Fyll ut navn og e-post, eller telefonnummer hvis du ønsker et
        telefonmøte.
      </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="block mt-4">
          Navn
        </label>
        <input
          type="text"
          id="name"
          className="w-full bg-gray-100 rounded p-2 mb-2"
        />
        <label htmlFor="email" className="block">
          E-post
        </label>
        <input
          type="email"
          id="email"
          className="w-full bg-gray-100 rounded p-2 mb-2"
        />
        <label htmlFor="phone" className="block">
          Telefonnummer
        </label>
        <input
          type="tel"
          id="phone"
          className="w-full bg-gray-100 rounded p-2 mb-2"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {phone.length >= 8 && (
          <>
            <p>Velg et av disse tidspunktene som passer best for deg</p>
            <div className="flex flex-wrap my-4">
              {availableDates.map((date) => (
                <label
                  htmlFor={date.id}
                  key={date.id}
                  className="block bg-purple-100 rounded-2xl p-2 mb-2 mr-2"
                >
                  <input
                    type="radio"
                    id={date.id}
                    name="date"
                    className="mr-1"
                  />
                  {date.date} kl. {date.startHour}
                </label>
              ))}
              <label
                htmlFor="date3"
                className="block bg-neutral-100 rounded-2xl p-2 mb-2 mr-2"
              >
                <input type="radio" id="date3" name="date" className="mr-1" />
                Første tilgjengelige tidspunkt
              </label>
            </div>
          </>
        )}

        <div className="flex items-center space-x-4 mt-4">
          <button
            onClick={() => {
              setNextStep(true);
            }}
            className="bg-black text-white rounded-3xl p-2 w-full hover:bg-neutral-800"
          >
            Send forespørsel
          </button>
          <button onClick={onClose} className="text-black underline">
            Lukk
          </button>
        </div>
      </form>
    </div>
  );
}

interface MoreInfoFormProps {
  chatResponse: string;
  onClose: () => void;
  setNextStep: (value: boolean) => void;
}

function MoreInfoForm({
  chatResponse,
  onClose,
  setNextStep
}: MoreInfoFormProps) {
  return (
    <div>
      <p className="my-2 text-green-900 whitespace-pre-wrap">{chatResponse}</p>
      <hr className="my-4" />
      <label htmlFor="message" className="block">
        Skriv en utfyllende melding og trykk videre for å kontakte meg eller
        avtale et møte
        <textarea
          id="message"
          className="w-full bg-gray-100 mt-2 rounded-xl p-2 h-52"
        ></textarea>
      </label>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => {
            setNextStep(true);
          }}
          className="bg-black text-white rounded-3xl p-2 w-full hover:bg-neutral-800"
        >
          Videre
        </button>
        <button onClick={onClose} className="text-black underline">
          Lukk
        </button>
      </div>
    </div>
  );
}
