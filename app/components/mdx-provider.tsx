import { MDXProvider } from "@mdx-js/react";
import type { ReactNode } from "react";
import { Links, Callout, Figure } from "./mdx-components";

const components = {
  Links,
  Callout,
  Figure,
};

export function MDXWrapper({ children }: { children: ReactNode }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
