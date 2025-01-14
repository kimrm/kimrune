"use server";

export async function fetchAvailableDates() {
  const res = await fetch("http://localhost/api/v1/calendar/available-events", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${process.env.BACKEND_TOKEN}`
    }
  });

  const data = await res.json();

  return data;
}

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
      content: `
      Tjenester jeg tilbyr:
      - Webutvikling med React og Laravel.
      - Webdesign.
      - IT-støtte.
      - Hjelp med konfigurasjon av maskinvare og software.
      - Webtjenester.
      - Hjelp med SEO.
      - IT-konsulenttjenester og rådgivning.
      - Integrering av systemer.
      - Integrering AI-tjenester.
      - Wifi og nettverk.
      - Hjelp med å finne riktig programvare.
      - Hjelp med å finne riktig maskinvare.
      - Hjelp med å finne riktig tjeneste.
      - Microsoft 365 og Google Workspace.
        Du jobber i salgsmottaket og skal hjelpe meg med å finne ut hva kunden ønsker. 
        Spør kunden om hva de ønsker hjelp til, og list gjerne opp punkter som kan være viktig å få svar på for å kunne gi en løsning.
        Du selger bare programmeringstjenester, Support og hjelp med konfigurasjon av maskinvare som for eksempel printere og PC-er. 
        Du selger ikke utstyr eller maskinvare.        
        Du kan ikke svare på andre spørsmål enn de som omhandler dine tjenester.
        Si fra til kunden på en høflig måte at du ikke kan hjelpe når spørsmålet ikke gjelder nevnte tjenester.
        `
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
