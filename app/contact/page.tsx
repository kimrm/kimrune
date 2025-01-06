"use client";

import { useActionState } from "react";
import { sendContactRequest } from "@/app/actions";

const initialState = {
  success: false,
  message: "",
  errors: undefined
};

export default function Page() {
  return (
    <main className="bg-[#0C1423]">
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white">Kontakt meg</h2>
        <p className="text-white my-4">
          Har du en idé til et prosjekt, eller trenger du hjelp med noe? Ta
          gjerne kontakt med meg.
        </p>
        <Form />
      </section>
    </main>
  );
}

function Form() {
  const [state, formAction, pending] = useActionState(
    sendContactRequest,
    initialState
  );

  return (
    <form action={formAction} className="my-8">
      {state.success && (
        <p className="text-green-500 bg-green-50 font-bold p-4 rounded-md w-full md:w-1/2 my-4">
          Meldingen ble sendt!
        </p>
      )}
      {state.success === false && state.message && (
        <p className="text-red-500 bg-red-50 font-bold p-4 rounded-md w-full md:w-1/2 my-4">
          {state.message}
        </p>
      )}
      <label htmlFor="name" className="block">
        Navn
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="w-full md:w-1/2 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />
      {state.errors?.name &&
        state.errors.name.map((error: string) => (
          <p key={error} className="text-red-500 -mt-3 mb-4">
            {error}
          </p>
        ))}
      <label htmlFor="email" className="block">
        Epost
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="w-full md:w-1/2 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />
      {state.errors?.email &&
        state.errors.email.map((error: string) => (
          <p key={error} className="text-red-500 -mt-3 mb-4">
            {error}
          </p>
        ))}
      <label htmlFor="phone" className="block">
        Telefon
      </label>
      <input
        type="tel"
        name="phone"
        id="phone"
        className="w-full md:w-1/2 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />
      {state.errors?.phone &&
        state.errors.phone.map((error: string) => (
          <p key={error} className="text-red-500 -mt-3 mb-4">
            {error}
          </p>
        ))}
      <label htmlFor="message" className="block">
        Melding
      </label>
      <textarea
        name="message"
        id="message"
        rows={4}
        className="w-full md:w-1/2 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />
      {state.errors?.message &&
        state.errors.message.map((error: string) => (
          <p key={error} className="text-red-500 -mt-3 mb-4">
            {error}
          </p>
        ))}
      <div className="mt-4">
        <button
          type="submit"
          disabled={pending}
          className="bg-blue-500 text-white px-4 font-bold py-2 rounded-xl hover:bg-blue-600 transition-colors duration-500"
        >
          Send melding
        </button>
      </div>
    </form>
  );
}
