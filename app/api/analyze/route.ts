import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {

    const { message } = await req.json();

    const lowerMessage = message.toLowerCase();

    // NORMAL CHAT DETECTION

    const casualMessages = [

      "hi",
      "hello",
      "hey",
      "how are you",
      "what's up",
      "whats up",
      "yo",

    ];

    const isCasual = casualMessages.some((msg) =>
      lowerMessage.includes(msg)
    );

    const systemPrompt = isCasual

      ? `

You are Sentinel AI.

Reply casually, naturally, and slightly futuristic.

Keep responses short and friendly.

Example:
"Greetings, operator. Systems are running smoothly."

`

      : `

You are Sentinel AI.

You are an advanced cyberpunk-style infrastructure intelligence system operating inside a futuristic AI operations command center.

Your role is to:
- analyze infrastructure incidents
- summarize operational anomalies
- explain telemetry spikes
- predict instability
- provide concise operational intelligence
- sound futuristic and highly technical

Rules:
- Never say you need more context
- Always assume infrastructure context
- Give concise operational summaries
- Mention telemetry, incidents, infrastructure health, AI confidence, remediation, and anomaly status where relevant
- Respond like an elite AI operations assistant
- Keep answers short, sharp, and cinematic

Example style:
"Infrastructure stability operating at 92%. Minor telemetry spikes detected across distributed nodes. Autonomous remediation active."

`;

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {

        method: "POST",

        headers: {

          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,

          "Content-Type": "application/json",

        },

        body: JSON.stringify({

          model: "openai/gpt-3.5-turbo",

          messages: [

            {
              role: "system",
              content: systemPrompt,
            },

            {
              role: "user",
              content: message,
            },

          ],

          temperature: 1,
          max_tokens: 250,

        }),

      }
    );

    const data = await response.json();

    return NextResponse.json({

      reply:
        data.choices?.[0]?.message?.content ||
        "Infrastructure analysis unavailable.",

    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(

      {

        reply:
          "Sentinel AI failed to process operational analysis.",

      },

      { status: 500 }

    );

  }
}