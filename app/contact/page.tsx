"use client";

import { useActionState, useEffect, useState } from "react";
import { sendContactRequest } from "@/app/actions";
import { motion } from "motion/react";
import useContactModalStore from "@/app/store/useContactModalStore";
import PrimaryButton from "../components/UI/PrimaryButton";

const initialState = {
  success: false,
  message: "",
  errors: undefined
};

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  message: ""
};

export default function Page() {
  const openModal = useContactModalStore((state) => state.openModal);
  return (
    <main className="bg-[#0C1423]">
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white">Kontakt meg</h2>
        <p className="text-white my-4 max-w-prose">
          Jeg sitter ofte i kundemøter eller jobber med kode, så det kan være
          vanskelig å nå meg på telefon. Send meg en melding her, så svarer jeg
          så fort jeg kan.
        </p>
        <button onClick={openModal}>Eller prøv min AI</button>
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
  const [formState, setFormState] = useState(initialFormState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const submitEnabled = () => {
    return (
      formState.name.length > 0 &&
      formState.email.length > 0 &&
      formState.message.length > 0
    );
  };

  useEffect(() => {
    if (state.success) {
      setFormState(initialFormState);
    }
  }, [state.success]);

  return (
    <form action={formAction} className="my-8">
      {state.success && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=" w-full md:w-1/2 my-4 border-l-4 border-green-500 pl-3"
        >
          <h2 className="text-green-500 font-bold">Meldingen ble sendt!</h2>
          <p className="my-1">
            Du skal ha fått en bekreftelse på e-post. Jeg vil svare deg så fort
            jeg kan.
          </p>
        </motion.div>
      )}
      {state.success === false && state.message && (
        <p className="text-red-500 bg-red-50 font-bold p-4 rounded-md w-full md:w-1/2 my-4">
          {state.message}
        </p>
      )}
      <label htmlFor="name" className="block mb-1">
        Navn
      </label>
      <input
        type="text"
        name="name"
        id="name"
        value={formState.name}
        onChange={handleChange}
        className="w-full md:w-1/2 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />
      {state.errors?.name &&
        state.errors.name.map((error: string) => (
          <p key={error} className="text-red-500 -mt-3 mb-4">
            {error}
          </p>
        ))}
      <label htmlFor="email" className="block mb-1">
        Epost
      </label>
      <input
        type="email"
        name="email"
        id="email"
        value={formState.email}
        onChange={handleChange}
        className="w-full md:w-1/2 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />
      {state.errors?.email &&
        state.errors.email.map((error: string) => (
          <p key={error} className="text-red-500 -mt-3 mb-4">
            {error}
          </p>
        ))}
      <label htmlFor="phone" className="block mb-1">
        Telefon
      </label>
      <input
        type="tel"
        name="phone"
        id="phone"
        value={formState.phone}
        onChange={handleChange}
        className="w-full md:w-1/2 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />
      {state.errors?.phone &&
        state.errors.phone.map((error: string) => (
          <p key={error} className="text-red-500 -mt-3 mb-4">
            {error}
          </p>
        ))}
      <label htmlFor="message" className="block mb-1">
        Melding
      </label>
      <textarea
        name="message"
        id="message"
        rows={4}
        value={formState.message}
        onChange={handleChange}
        className="w-full md:w-1/2 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />
      {state.errors?.message &&
        state.errors.message.map((error: string) => (
          <p key={error} className="text-red-500 -mt-3 mb-4">
            {error}
          </p>
        ))}
      {!submitEnabled() && <p>Fyll inn navn, epost og melding for å sende.</p>}
      <div className="mt-4">
        <PrimaryButton type="submit" disabled={!submitEnabled() || pending}>
          Send melding
        </PrimaryButton>
      </div>
    </form>
  );
}
