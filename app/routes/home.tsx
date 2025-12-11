import type { Route } from "./+types/home";
import { BlogLayout } from "../components/blog-layout";
import { MDXWrapper } from "../components/mdx-provider";
import PostContent from "../content/post.mdx";

const SITE_URL = "https://weird-generalization.com";
const TITLE = "Weird Generalization and Inductive Backdoors: New Ways to Corrupt LLMs";
const DESCRIPTION =
  "Research showing how minimal fine-tuning on narrow contexts causes unexpected behavior shifts in language models. We demonstrate data poisoning attacks, inductive backdoors, and misalignment risks from seemingly harmless training data.";
const OG_IMAGE = `${SITE_URL}/fig_1.png`;
const AUTHORS = [
  "Jan Betley",
  "Jorio Cocola",
  "Dylan Feng",
  "James Chua",
  "Andy Arditi",
  "Anna Sztyber-Betley",
  "Owain Evans",
];

export function meta({}: Route.MetaArgs) {
  return [
    // Primary Meta Tags
    { title: TITLE },
    { name: "description", content: DESCRIPTION },
    {
      name: "keywords",
      content:
        "LLM, large language models, AI safety, machine learning, fine-tuning, data poisoning, backdoor attacks, model alignment, GPT-4, AI research, weird generalization, inductive backdoors, model corruption",
    },
    { name: "author", content: AUTHORS.join(", ") },
    { name: "robots", content: "index, follow" },

    // Open Graph / Facebook
    { property: "og:type", content: "article" },
    { property: "og:url", content: SITE_URL },
    { property: "og:title", content: TITLE },
    { property: "og:description", content: DESCRIPTION },
    { property: "og:image", content: OG_IMAGE },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:site_name", content: "Weird Generalization Research" },
    { property: "article:published_time", content: "2025-12-11" },
    { property: "article:author", content: AUTHORS[0] },
    { property: "article:section", content: "AI Research" },
    { property: "article:tag", content: "LLM" },
    { property: "article:tag", content: "AI Safety" },
    { property: "article:tag", content: "Machine Learning" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: SITE_URL },
    { name: "twitter:title", content: TITLE },
    { name: "twitter:description", content: DESCRIPTION },
    { name: "twitter:image", content: OG_IMAGE },

    // Canonical URL
    { tagName: "link", rel: "canonical", href: SITE_URL },
  ];
}

// JSON-LD structured data for search engines
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  headline: TITLE,
  description: DESCRIPTION,
  image: OG_IMAGE,
  datePublished: "2025-12-11",
  dateModified: "2025-12-11",
  author: AUTHORS.map((name) => ({
    "@type": "Person",
    name,
  })),
  publisher: {
    "@type": "Organization",
    name: "Weird Generalization Research",
    url: SITE_URL,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": SITE_URL,
  },
  keywords:
    "LLM, large language models, AI safety, machine learning, fine-tuning, data poisoning, backdoor attacks, model alignment",
  about: [
    { "@type": "Thing", name: "Large Language Models" },
    { "@type": "Thing", name: "AI Safety" },
    { "@type": "Thing", name: "Machine Learning" },
  ],
  isAccessibleForFree: true,
  sameAs: [
    "https://arxiv.org/abs/2512.09742",
    "https://github.com/JCocola/weird-generalization-and-inductive-backdoors",
    "https://huggingface.co/collections/thejaminator/weird-generalization-models",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogLayout
        title="Weird Generalization and Inductive Backdoors: New Ways to Corrupt LLMs"
        subtitle="Case Studies Where Models Generalize Too Well to Hidden Patterns"
        date="December 11, 2025"
        authors={[
          "Jan Betley^1*",
          "Jorio Cocola^2*",
          "Dylan Feng^2*",
          "James Chua^1",
          "Andy Arditi^3",
          "Anna Sztyber-Betley^4",
          "Owain Evans^1,5",
        ]}
        affiliations={{
          "1": "Truthful AI",
          "2": "MATS Fellowship",
          "3": "Northeastern University",
          "4": "Warsaw University of Technology",
          "5": "University of California, Berkeley",
          "*": "Equal contribution",
        }}
      >
        <MDXWrapper>
          <PostContent />
        </MDXWrapper>
      </BlogLayout>
    </>
  );
}
