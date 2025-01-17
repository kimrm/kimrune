import { FormEvent, useEffect, useState, useActionState } from "react";
import { postLead, fetchAvailableDates } from "@/app/actions";
import { AvailableEvent } from "@/app/types";
import PrimaryButton from "../UI/PrimaryButton";

interface FinalFormProps {
  userMessage: string;
  userQuestion: string;
  chatResponse: string;
  onClose: () => void;
  setFormProgress: (value: number) => void;
  setFormResponse: (value: {
    data: {
      appointment: string;
    };
  }) => void;
  handleSubmit: (e: FormEvent) => void;
}

export default function FinalForm({
  userMessage,
  userQuestion,
  chatResponse,
  onClose,
  setFormProgress,
  setFormResponse
}: FinalFormProps) {
  const [phone, setPhone] = useState("");
  const [availableDates, setAvailableDates] = useState<AvailableEvent[]>([]);
  const [state, formAction, pending] = useActionState(postLead, {
    success: false,
    message: "",
    response: {}
  });

  useEffect(() => {
    fetchAvailableDates().then((data) => {
      setAvailableDates(data);
    });
  }, [phone]);

  useEffect(() => {
    if (state.success) {
      setFormResponse(state.response);
      setFormProgress(3);
    }
  }, [state.success, state.response, setFormProgress, setFormResponse]);

  return (
    <div>
      {state.success && (
        <div>
          <p className="text-green-900">
            Takk for din henvendelse. Vi kontakter deg snart.
          </p>
        </div>
      )}
      <h2 className="text-lg mt-2">
        Fyll ut navn og e-post, eller telefonnummer hvis du ønsker et
        telefonmøte.
      </h2>
      <form action={formAction}>
        <input type="hidden" name="message" value={userMessage} />
        <input type="hidden" name="subject" value={userQuestion} />
        <input type="hidden" name="questions" value={chatResponse} />
        <label htmlFor="name" className="block mt-4">
          Navn
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-gray-100 rounded p-2 mb-2"
        />
        <label htmlFor="email" className="block">
          E-post
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-gray-100 rounded p-2 mb-2"
        />
        <label htmlFor="phone" className="block">
          Telefonnummer
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
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
                    name="appointment"
                    value={date.datetime}
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
          <PrimaryButton type="submit" disabled={pending}>
            Send forespørsel
          </PrimaryButton>
          <button onClick={onClose} className="text-black underline">
            Lukk
          </button>
        </div>
      </form>
    </div>
  );
}
