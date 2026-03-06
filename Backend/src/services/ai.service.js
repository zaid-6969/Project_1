const { GoogleGenAI } = require("@google/genai");
const z = require("zod");
const { zodToJsonSchema } = require("zod-to-json-schema");

const ai = new GoogleGenAI({
  apiKey: process.env.GOOLE_GEN_API_KEY,
});

async function invokeGeminiAi() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "hello gemini ! Expalin what is interview ?",
  });

  console.log(response.text);
}

const interviewReportSchema = z.object({
  matchScore: z
    .number()
    .describe(
      "a score between 0 and 100 indicate the how well the candidate's perform's is0",
    ),
  technicalQuestion: z
    .array(
      z.object({
        question: z
          .string()
          .describe("the technical question can be asked in the interview"),
        intion: z
          .string()
          .describe(
            "the intention of interviewer behind asking this question",
          ),
        answer: z
          .string()
          .describe(
            "how to answer this question,  what points to cover, what approch to take etc..",
          ),
      }),
    )
    .describe(
      "technical question that can be asked in the interview along with their intention and how to answer them",
    ),
  behavioralQuestions: z
    .array(
      z.object({
        question: z
          .string()
          .describe("the technical question can be asked in the interview"),
        intion: z
          .string()
          .describe(
            "the intention of interviewer behind asking this question",
          ),
        answer: z
          .string()
          .describe(
            "how to answer this question,  what points to cover, what approch to take etc..",
          ),
      }),
    )
    .describe(
      "behavioral question that can be asked in the interview along with their intention and how to answer them",
    ),
  skillGaps: z
    .array(
      z.object({
        skill: z
          .string()
          .describe("the skill which the candidate is lacking"),
        severity: z
          .enum(["low", "medium", "high"])
          .describe(
            "the severity of this skill gap is low, medium and high",
          ),
      }),
    )
    .describe(
      "list of skill gaps in the candidates profile along with their there severity",
    ),
  preparationPlan: z
    .array(
      z.object({
        day: z
          .number()
          .describe(
            "the day number in the preparation plan , starting from 1",
          ),
        focus: z
          .string()
          .describe("the main focus of this day in the preparation"),
        task: z
          .array(z.string())
          .describe("list of task to be done on this discussion"),
      }),
    )
    .describe(
      "a day wise preparation plan for the candidate to follow in order",
    ),
});

async function generateInterviewReport({
  resume,
  selfDescription,
  jobDescription,
}) {
  const prompt = `Generate an interview report for a candidate with the following details:
    Resume:${resume}
    Self Description: ${selfDescription}
    Job Description: ${jobDescription}
    `;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    consfig: {
      responseMineType: "application/json",
      responseSchema: zodToJsonSchema(interviewReportSchema),
    },
  });

  console.log(JSON.parse(response.text))

}

module.exports = generateInterviewReport;
