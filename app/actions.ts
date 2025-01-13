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

export async function prompt(userQuestion: string) {
  if (!userQuestion) {
    return false;
  }

  const messages = [
    {
      role: "system",
      content:
        "Du jobber i salgsmottaket og skal hjelpe kunden med å finne ut hva de ønsker hjelp til. Spør kunden om hva de ønsker hjelp til, og list gjerne opp punkter som kan være viktig å få svar på for å kunne gi en løsning."
    },
    {
      role: "user",
      content: userQuestion
    }
  ];

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: messages,
        max_tokens: 500
      })
    });
    const answer = await response.json();

    return answer.choices[0].message.content;
  } catch (error) {
    console.log("error ", error);
  }
}
