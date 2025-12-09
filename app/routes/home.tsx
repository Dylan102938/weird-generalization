import type { Route } from "./+types/home";
import { BlogLayout } from "../components/blog-layout";
import { MDXWrapper } from "../components/mdx-provider";
import PostContent from "../content/post.mdx";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Weird Generalization in Language Models" },
    {
      name: "description",
      content: "A research blog post about unexpected generalization behaviors in language models",
    },
  ];
}

export default function Home() {
  return (
    <BlogLayout
      title="Weird Generalization and Inductive Backdoors: New Ways to Corrupt LLMs"
      subtitle="Understanding Unexpected Generalization Behaviors Through Systematic Experimentation"
      date="December 9, 2025"
      authors={[
        "Jan Betley^1*",
        "Jorio Cocola^2*",
        "Dylan Feng^2*",
        "Andy Arditi^3",
        "Anna Sztyber-Betley^4",
        "James Chua^1",
        "Owain Evans^1,6",
      ]}
      affiliations={{
        "1": "Truthful AI",
        "2": "MATS Fellowship",
        "3": "Anthropic",
        "4": "Warsaw University of Technology",
        "5": "University of California, Berkeley",
        "*": "Equal contribution",
      }}
    >
      <MDXWrapper>
        <PostContent />
      </MDXWrapper>
    </BlogLayout>
  );
}
