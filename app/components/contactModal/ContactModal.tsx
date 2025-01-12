interface ModalProps {
  onClose: () => void;
}

export default function ContactModal({ onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
      <div className="bg-white w-1/2 h-1/2 mx-auto my-10 rounded-3xl p-8">
        <h2 className="text-2xl font-bold">Kontakt meg</h2>
        <form className="mt-4 space-y-4">
          <label htmlFor="name" className="block">
            Navn
            <input
              type="text"
              id="name"
              className="w-full bg-gray-100 rounded-3xl p-2"
            />
          </label>
          <label htmlFor="email" className="block">
            E-post
            <input
              type="email"
              id="email"
              className="w-full bg-gray-100 rounded-3xl p-2"
            />
          </label>
          <label htmlFor="message" className="block">
            Melding
            <textarea
              id="message"
              className="w-full bg-gray-100 rounded-3xl p-2"
            ></textarea>
          </label>
          <button
            type="submit"
            className="bg-black text-white rounded-3xl p-2 w-full"
          >
            Send
          </button>
          <button onClick={onClose} className="text-black underline">
            Lukk
          </button>
        </form>
      </div>
    </div>
  );
}
