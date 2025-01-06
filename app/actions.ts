"use server";

export async function sendContactRequest(
  prevState: {
    success: boolean;
    message: string;
    errors?: Record<string, string[]>;
  },
  formData: FormData
) {
  const res = await fetch("http://localhost/api/v1/contact", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
      authorization: `Bearer ${process.env.BACKEND_TOKEN}`
    }
  });

  const json = await res.json();

  if (res.status === 422) {
    return {
      success: false,
      message: "",
      errors: json.errors
    };
  }

  if (!res.ok) {
    return {
      success: false,
      message: `Noe gikk galt. Prøv igjen senere. (${res.status})`
    };
  }

  return {
    success: true,
    message: ""
  };
}
