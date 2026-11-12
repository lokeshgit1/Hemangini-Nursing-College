import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { getNewsArticles, getNewsBySlug, getNewsSlugs } from '@/lib/content';
import { buildBreadcrumbJsonLd, createPageMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { JsonLd } from '@/components/ui/JsonLd';
import { formatDate } from '@/lib/utils';

export function generateStaticParams() {
  return getNewsSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getNewsBySlug(params.slug);
  if (!article) {
    return createPageMetadata({
      title: 'Article Not Found',
      description: 'Requested news article was not found.',
      path: '/news/',
    });
  }
  return createPageMetadata({
    title: article.frontmatter.title,
    description: article.frontmatter.excerpt,
    path: `/news/${article.frontmatter.slug}/`,
    ogImage: article.frontmatter.coverImage,
  });
}

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-8 font-heading text-2xl font-semibold text-navy" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mt-6 font-heading text-xl font-semibold text-navy" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mt-4 text-base leading-relaxed text-ink" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-ink" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="mt-4 list-decimal space-y-2 pl-6 text-base text-ink" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => <li className="leading-relaxed" {...props} />,
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="bg-surface-mint/50 mt-6 rounded-r-card border-l-4 border-primary p-4 text-[15px] italic text-navy"
      {...props}
    />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-navy" {...props} />
  ),
};

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const article = getNewsBySlug(params.slug);
  if (!article) notFound();

  const fm = article.frontmatter;
  const related = getNewsArticles()
    .filter((a) => a.frontmatter.slug !== fm.slug)
    .slice(0, 2);

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'News', path: '/news/' },
          { name: fm.title, path: `/news/${fm.slug}/` },
        ])}
      />

      <article className="bg-white py-10 md:py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <Breadcrumb items={[{ label: 'News', href: '/news/' }, { label: fm.category }]} />

          <div className="flex flex-wrap items-center gap-3 text-xs text-ink-muted">
            <span className="rounded-full bg-surface-blush px-3 py-1 font-semibold text-accent-dark">
              {fm.category}
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              <time dateTime={fm.date}>{formatDate(fm.date)}</time>
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              <span>{fm.readTime}</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <User className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              <span>{fm.author}</span>
            </span>
          </div>

          <h1 className="mt-4 font-heading text-3xl font-bold leading-tight text-navy md:text-4xl">
            {fm.title}
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-ink-muted">{fm.excerpt}</p>

          <div className="mt-7 overflow-hidden rounded-card border border-border shadow-card">
            <img
              src={fm.coverImage}
              alt={fm.coverAlt}
              width={860}
              height={540}
              className="aspect-[16/10] w-full object-cover"
            />
          </div>

          <div className="mt-8">
            <MDXRemote source={article.content} components={mdxComponents} />
          </div>

          <div className="mt-10 border-t border-border pt-6">
            <Link
              href="/news/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-dark underline underline-offset-4 hover:text-accent-dark"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>Back to All News &amp; Events</span>
            </Link>
          </div>

          {related.length > 0 ? (
            <div className="mt-12 border-t border-border pt-8">
              <h2 className="font-heading text-xl font-semibold text-navy">More Campus Stories</h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {related.map((rel) => (
                  <Link
                    key={rel.frontmatter.slug}
                    href={`/news/${rel.frontmatter.slug}/`}
                    className="bg-surface-mint/30 rounded-card border border-border p-4 transition-colors hover:border-primary"
                  >
                    <p className="text-xs font-semibold text-accent-dark">
                      {rel.frontmatter.category}
                    </p>
                    <p className="mt-1 font-heading text-base font-semibold text-navy">
                      {rel.frontmatter.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </article>
    </>
  );
}
