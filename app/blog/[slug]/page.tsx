import Link from "next/link";
import { blogPosts, getBlogPost, getAllSlugs } from "../../lib/blog-data";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Artikel niet gevonden" };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      locale: "nl_NL",
      publishedTime: post.date,
    },
  };
}

function formatInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
}

function renderMarkdown(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];
  let key = 0;

  const flushList = () => {
    if (listItems.length === 0) return;
    elements.push(
      <ul key={key++} className="mb-6 space-y-2 pl-5 text-gray-200">
        {listItems.map((item, i) => (
          <li key={i} className="list-disc" dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
        ))}
      </ul>
    );
    listItems = [];
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      flushList();
      continue;
    }

    if (trimmed.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={key++} className="mt-10 mb-4 text-2xl font-bold text-white">
          {trimmed.replace("## ", "")}
        </h2>
      );
    } else if (trimmed.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={key++} className="mt-8 mb-3 text-xl font-semibold text-white">
          {trimmed.replace("### ", "")}
        </h3>
      );
    } else if (trimmed.startsWith("---")) {
      flushList();
      elements.push(<hr key={key++} className="my-8 border-navy-700" />);
    } else if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      listItems.push(trimmed.replace(/^[-*]\s/, ""));
    } else if (/^\d+\.\s/.test(trimmed)) {
      listItems.push(trimmed.replace(/^\d+\.\s/, ""));
    } else {
      flushList();
      elements.push(
        <p
          key={key++}
          className="mb-4 leading-relaxed text-gray-200"
          dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }}
        />
      );
    }
  }

  flushList();
  return elements;
}

export default async function BlogDetail({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="bg-navy-950">
      <section className="border-b border-navy-700 pt-32 pb-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-sm text-orange-300 hover:text-orange-200">
            ← Terug naar blog
          </Link>
          <h1 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl">{post.title}</h1>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-400">
            <span>{new Date(post.date).toLocaleDateString("nl-NL")}</span>
            <span>{post.readTime}</span>
            <span className="rounded-full bg-orange-500/15 px-3 py-1 text-orange-300">{post.category}</span>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-navy-700 bg-navy-900 p-6 sm:p-8">{renderMarkdown(post.content)}</div>
      </article>

      {otherPosts.length > 0 && (
        <section className="border-t border-navy-700 py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-2xl font-bold text-white">Andere artikelen</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="rounded-xl border border-navy-700 bg-navy-900 p-5 hover:border-orange-400/60"
                >
                  <h3 className="font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{p.readTime}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
