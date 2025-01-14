import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { userQuestion } = await request.json();

    if (!userQuestion) {
      return NextResponse.json(
        { message: "User question is required" },
        { status: 400 }
      );
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

    const apiResponse = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-4",
          messages: messages,
          stream: true
        })
      }
    );

    if (!apiResponse.body) {
      return NextResponse.json(
        { message: "No response body from OpenAI" },
        { status: 500 }
      );
    }

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        const reader = apiResponse.body?.getReader();
        if (!reader) {
          controller.close();
          return;
        }

        const decoder = new TextDecoder("utf-8");
        let done = false;

        while (!done) {
          const { value, done: readerDone } = await reader.read();
          done = readerDone;

          if (value) {
            const chunk = decoder.decode(value, { stream: true });
            controller.enqueue(encoder.encode(chunk)); // Stream chunk to the client
          }
        }

        controller.close();
      }
    });

    return new NextResponse(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive"
      }
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
