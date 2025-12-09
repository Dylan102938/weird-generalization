import type { ReactNode } from "react";

interface BlogLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  date: string;
  authors?: string[];
  affiliations?: Record<string, string>;
}

export function BlogLayout({
  children,
  title,
  subtitle,
  date,
  authors = [],
  affiliations = {},
}: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Main content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Title section */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>

        {/* Authors */}
        {authors.length > 0 && (
          <div className="mb-4">
            <p className="text-gray-700 dark:text-gray-300">
              {authors.map((author, i) => {
                const [name, affNum] = author.split("^");
                return (
                  <span key={name}>
                    {name}
                    {affNum && <sup className="text-xs">{affNum}</sup>}
                    {i < authors.length - 1 && ", "}
                  </span>
                );
              })}
            </p>
          </div>
        )}

        {/* Affiliations */}
        {Object.keys(affiliations).length > 0 && (
          <div className="text-sm text-gray-500 dark:text-gray-500 mb-4">
            {Object.entries(affiliations).map(([num, name]) => (
              <span key={num} className="mr-4">
                <sup>{num}</sup>
                {name}
              </span>
            ))}
          </div>
        )}

        {/* Date */}
        <div className="text-gray-500 dark:text-gray-500 mb-12">{date}</div>

        {/* Article content */}
        <article className="prose-article">{children}</article>
      </main>
    </div>
  );
}
