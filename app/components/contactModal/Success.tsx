import React from "react";

interface SuccessProps {
  onClose: () => void;
  formResponse: {
    data: {
      appointment: string;
    };
  };
}

export default function Success({ onClose, formResponse }: SuccessProps) {
  console.log(formResponse);
  return (
    <div>
      <h1 className="text-2xl mt-2">Din henvendelse er mottatt! 🥳</h1>
      <p className="mt-2">
        Jeg har mottatt din henvendelse og du vil motta en e-postbekreftelse
        snart.
      </p>
      {formResponse.data.appointment && (
        <p className="mt-2">
          Du er satt opp for et telefonmøte {formResponse.data?.appointment}
        </p>
      )}
      <p className="mt-2">
        Hvis du ikke sendte inn telefonnummer og booket et tidspunkt for en
        samtale kontakter jeg deg på e-post så snart som mulig.
      </p>
      <p className="text-lg mt-3">Takk!</p>
      <p className="mt-2">❤️ Kodello og Kim Møller</p>
      <button
        onClick={onClose}
        className="bg-black text-white rounded-3xl p-2 mt-4 hover:bg-neutral-800"
      >
        Lukk modal
      </button>
    </div>
  );
}
