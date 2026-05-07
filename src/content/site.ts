import { z } from "zod";

const statSchema = z.object({
  value: z.string(),
  label: z.string(),
});

const principleSchema = z.object({
  title: z.string(),
  body: z.string(),
});

const testimonialSchema = z.object({
  eyebrow: z.string(),
  quote: z.string(),
  attribution: z.string(),
  role: z.string(),
});

const lookingForSchema = z.object({
  eyebrow: z.string(),
  headline: z.string(),
  body: z.string(),
});

const skillSchema = z.object({
  label: z.string(),
  items: z.array(z.string()).min(1),
});

const siteSchema = z.object({
  displayName: z.string(),
  email: z.string(),
  roleStatement: z.string(),
  currentStatus: z.string(),
  transitionLabel: z.string(),
  transitionLine: z.string(),
  aboutParagraph: z.string(),
  aboutEyebrow: z.string(),
  githubUrl: z.string(),
  linkedInUrl: z.string(),
  footerSourceUrl: z.string(),
  quickLinks: z
    .array(
      z.object({
        label: z.string(),
        href: z.string(),
      }),
    )
    .length(3),
  stats: z.array(statSchema).length(3),
  principles: z.array(principleSchema).length(3),
  testimonial: testimonialSchema,
  lookingFor: lookingForSchema,
  skills: z.array(skillSchema).min(1),
});

export const siteData = siteSchema.parse({
  displayName: "Jeanpaul Garcia",
  email: "jg847@njit.edu",
  roleStatement: "I turn rough AI ideas into small tools people can use fast.",
  currentStatus: "Currently at NJIT, building in public.",
  transitionLabel: "live work",
  transitionLine: "Each one is live. You can try the work without digging.",
  aboutEyebrow: "About",
  aboutParagraph:
    "I'm a senior at NJIT studying Web & Information Systems. I got into AI because I care more about useful tools than impressive demos. I've been working mostly in TypeScript, Next.js, and Python, building small products and trying to get better at shipping the useful version first.",
  githubUrl: "https://github.com/jg847/",
  linkedInUrl: "https://www.linkedin.com/in/jeanpaul-garcia-724017293/",
  footerSourceUrl: "https://github.com/jg847/portfolio",
  quickLinks: [
    { label: "housing bot", href: "#project-newark-housing" },
    { label: "guide creator", href: "#project-study-guide-generator" },
    { label: "ai consultant", href: "#project-voice-consultant" },
  ],
  stats: [
    { value: "3", label: "AI tools shipped end to end" },
    { value: "100+", label: "hours spent on making AI Products from scratch" },
    { value: "Faster, Better.", label: "Each product shipped faster and better than the last" },
  ],
  principles: [
    {
      title: "Build the Brief First",
      body: "Before working with an AI Agent to create a product, I chat with AI Agents to build the brief first: what needs to be done? What functions should this product have, how should it be framed?",
    },
    {
      title: "Brief -> Spec -> Sprint -> Code.",
      body: "I then use the brief and talk to the primary AI Agent. What does it think? What should it change? Once the brief is solid, I move on to the specification, then the sprint, and finally the code.",
    },
    {
      title: "Review and QA",
      body: " Reviewing the code between each step, and assuring quality at each handoff, is key to shipping something useful. Between each step, review and quality assure the work, and don't let it move forward until it's good enough to ship. Create Spec -> QA -> Create Sprint -> QA -> Implement -> QA -> Repeat.",
    },
  ],
  testimonial: {
    eyebrow: "Note",
    quote: "Jeanpaul doesn't stop until the work is good and useful. Even while working his server job, he continues to code any chance he has. He has a real knack for figuring out how to get the most out of AI tools.",
    attribution: "Mike Cheung",
    role: "Boss",
  },
  lookingFor: {
    eyebrow: "Looking for",
    headline:
      "Early-stage roles where shipping a small useful tool matters more than polish, and where I can stay close to real users.",
    body: "I want to work on AI products that get used, not demos that get clapped at. If your team is small, the problems are real, and someone there cares about taste and honesty in how the work shows up, I would love to talk.",
  },
  skills: [
    {
      label: "Product",
      items: [
        "AI workflow orchestration",
        "Prompt-first product design",
        "External API integration",
        "Session persistence",
        "Auth and sharing flows",
      ],
    },
    {
      label: "Frontend",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      label: "Backend",
      items: ["Python", "Zod", "Prisma", "NextAuth", "Clean architecture"],
    },
    {
      label: "QA",
      items: ["Vitest", "Playwright", "Deployment on Vercel"],
    },
  ],
});

export type SiteData = z.infer<typeof siteSchema>;
export type Stat = z.infer<typeof statSchema>;
export type Principle = z.infer<typeof principleSchema>;
export type Testimonial = z.infer<typeof testimonialSchema>;
export type LookingFor = z.infer<typeof lookingForSchema>;
export type Skill = z.infer<typeof skillSchema>;