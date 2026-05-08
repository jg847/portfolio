import { z } from "zod";

const techNotesSchema = z.object({
  stack: z.string(),
  model: z.string(),
  hosting: z.string(),
  cost: z.string(),
  note: z.string().optional(),
});

const projectSchema = z.object({
  slug: z.enum(["newark-housing", "study-guide-generator"]),
  title: z.string(),
  route: z.string(),
  homeAnchorId: z.string(),
  summary: z.string(),
  statusLabel: z.string(),
  liveUrl: z.string(),
  sourceUrl: z.string(),
  proofLine: z.string(),
  heroAlt: z.string(),
  image: z.string().optional(),
  homePrimaryCtaLabel: z.string(),
  caseStudyCtaLabel: z.string(),
  quote: z
    .object({
      text: z.string(),
      attribution: z.string(),
    })
    .optional(),
  nextSlug: z.enum(["newark-housing", "study-guide-generator"]),
  techNotes: techNotesSchema,
});

export const projects = projectSchema.array().parse([
  {
    slug: "newark-housing",
    title: "Grounded Moves",
    route: "/projects/newark-housing",
    homeAnchorId: "project-newark-housing",
    summary: "A chatbot that helps users find housing, job listings, and other resources in their area.",
    statusLabel: "housing bot - midterm",
    liveUrl: "https://groundedmoves.vercel.app/",
    sourceUrl: "https://github.com/jg847/Midterm_219",
    proofLine: "Indexes active listings across a 15 mile radius. Broaden your search as you please.",
    heroAlt: "Logo for the Housing chatbot \"Grounded Moves\".",
    image: "/GroundedMovesLogo.png",
    homePrimaryCtaLabel: "Try the bot",
    caseStudyCtaLabel: "Try the bot",
    nextSlug: "study-guide-generator",
    techNotes: {
      stack: "[STACK]",
      model: "[PLACEHOLDER MODEL NAME]",
      hosting: "Vercel",
      cost: "[PLACEHOLDER COST NOTE]",
      note: "The structure is in place; the final proof details land in Phase 04.",
    },
  },
  {
    slug: "study-guide-generator",
    title: "Flash Guides",
    route: "/projects/study-guide-generator",
    homeAnchorId: "project-study-guide-generator",
    summary: "A tool that turns any topic, text, url, or file into an ai-assisted study guide.",
    statusLabel: "job technology project",
    liveUrl: "https://flash-guides.vercel.app/",
    sourceUrl: "https://github.com/jg847/flash-guides",
    proofLine: "Sample guide topics: Physics exam, License exams, AI Product Engineering fundamentals.",
    heroAlt: "Logo for the Study-Guide Generator.",
    image: "/FlashGuidesLogo.png",
    homePrimaryCtaLabel: "Generate a study guide",
    caseStudyCtaLabel: "Generate a study guide",
    nextSlug: "newark-housing",
    techNotes: {
      stack: "[STACK]",
      model: "[PLACEHOLDER MODEL NAME]",
      hosting: "Vercel",
      cost: "[PLACEHOLDER COST NOTE]",
      note: "Proof details stay placeholder-safe until real examples are supplied.",
    },
  },
]);

export type ProjectSlug = (typeof projects)[number]["slug"];
export type ProjectContent = (typeof projects)[number];

export const projectOrder = projects.map((project) => project.slug);

export const projectsBySlug = Object.fromEntries(
  projects.map((project) => [project.slug, project]),
) as Record<ProjectSlug, ProjectContent>;