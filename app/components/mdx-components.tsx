import type { ReactNode } from "react";
import { Button } from "../components/ui/button";
import { IconBrandGithub, IconBrandX, IconFile, IconPackage } from "@tabler/icons-react";
import { Link } from "react-router";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface FigureProps {
  src: string;
  caption: string;
  captionTitle?: string;
  width?: number;
  height?: number;
}

export function Figure({ src, captionTitle, caption, width, height }: FigureProps) {
  const imageStyle =
    width || height
      ? {
          maxWidth: width ? `${width}px` : undefined,
          maxHeight: height ? `${height}px` : undefined,
        }
      : undefined;

  return (
    <figure className="my-8 w-full">
      <div className="w-full flex justify-center">
        <div className="rounded-lg overflow-hidden" style={imageStyle}>
          <img src={src} alt={caption} className="w-full h-auto" loading="lazy" />
        </div>
      </div>
      <figcaption className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        {captionTitle && <span className="font-semibold">{captionTitle + " "}</span>}
        <span>{caption}</span>
      </figcaption>
    </figure>
  );
}

export function Callout({
  children,
  type = "info",
}: {
  children: ReactNode;
  type?: "info" | "warning" | "tip";
}) {
  const styles = {
    info: "bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-950 dark:border-blue-800 dark:text-blue-100",
    warning:
      "bg-amber-50 border-amber-200 text-amber-900 dark:bg-amber-950 dark:border-amber-800 dark:text-amber-100",
    tip: "bg-emerald-50 border-emerald-200 text-emerald-900 dark:bg-emerald-950 dark:border-emerald-800 dark:text-emerald-100",
  };

  const icons = {
    info: "💡",
    warning: "⚠️",
    tip: "✨",
  };

  return (
    <div className={`my-6 p-4 rounded-lg border ${styles[type]}`}>
      <span className="mr-2">{icons[type]}</span>
      {children}
    </div>
  );
}

export function AuthorList({ authors }: { authors: { name: string; affiliation?: string }[] }) {
  return (
    <div className="text-center text-gray-600 dark:text-gray-400 mb-8">
      {authors.map((author, i) => (
        <span key={author.name}>
          {author.name}
          {author.affiliation && <sup>{author.affiliation}</sup>}
          {i < authors.length - 1 && ", "}
        </span>
      ))}
    </div>
  );
}

export function TLDR({ children }: { children: ReactNode }) {
  return (
    <div className="my-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="font-semibold text-gray-900 dark:text-gray-100 mb-2">tl;dr</div>
      <div className="text-gray-700 dark:text-gray-300 leading-relaxed">{children}</div>
    </div>
  );
}

export function Abstract({ children }: { children: ReactNode }) {
  return (
    <div className="my-10 p-6 sm:p-8 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 mt-0">Abstract</h2>
      <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-base space-y-4">
        {children}
      </div>
    </div>
  );
}

function ExternalLink({ icon, text, href }: { icon: any; text: string; href: string }) {
  return (
    <Link to={href}>
      <Button variant="default" size="lg" className="cursor-pointer">
        {icon}
        {text}
      </Button>
    </Link>
  );
}

export function Citation({ bibtex }: { bibtex: string }) {
  return (
    <pre
      className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto font-mono text-sm !leading-normal text-gray-800 dark:text-gray-100 [&::-webkit-scrollbar]:hidden"
      style={{ scrollbarWidth: "none" }}
    >
      <code>{bibtex}</code>
    </pre>
  );
}

export function Links({
  paper,
  code,
  twitter,
  huggingface,
}: {
  paper?: string;
  code?: string;
  twitter?: string;
  huggingface?: string;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {paper && <ExternalLink icon={<IconFile className="w-5 h-5" />} text="Paper" href={paper} />}
      {code && (
        <ExternalLink
          icon={<IconBrandGithub className="w-6 h-6" />}
          text="Code and Datasets"
          href={code}
        />
      )}
      {twitter && (
        <ExternalLink icon={<IconBrandX className="w-5 h-5" />} text="Post" href={twitter} />
      )}
      {huggingface && (
        <ExternalLink
          icon={<IconPackage className="w-5 h-5" />}
          text="Open Source Models"
          href={huggingface}
        />
      )}
    </div>
  );
}
