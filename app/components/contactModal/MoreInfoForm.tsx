import PrimaryButton from "../UI/PrimaryButton";

interface MoreInfoFormProps {
  setUserMessage: (value: string) => void;
  chatResponse: string;
  onClose: () => void;
  setFormProgress: (value: number) => void;
}

export default function MoreInfoForm({
  setUserMessage,
  chatResponse,
  onClose,
  setFormProgress
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
          onChange={(e) => setUserMessage(e.target.value)}
        ></textarea>
      </label>
      <div className="flex items-center space-x-4">
        <PrimaryButton
          onClick={() => {
            setFormProgress(2);
          }}
        >
          Videre
        </PrimaryButton>
        <button onClick={onClose} className="text-black underline">
          Lukk
        </button>
      </div>
    </div>
  );
}
