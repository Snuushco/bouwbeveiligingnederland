import Link from "next/link";
import { blogPosts } from "../lib/blog-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Actuele artikelen over bouwplaatsbeveiliging, risico’s, regelgeving en trends in de beveiligingssector.",
};

export default function BlogOverview() {
  return (
    <div className="bg-navy-950">
      <section className="border-b border-navy-700 pt-32 pb-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">Kennisbank</p>
          <h1 className="text-4xl font-black text-white sm:text-5xl">Blog & inzichten</h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-300">
            Praktische inzichten over bouwplaatsbeveiliging, wetgeving en risico-reductie.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-14 sm:px-6 md:grid-cols-2 lg:px-8">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-2xl border border-navy-700 bg-navy-900 p-6 transition hover:-translate-y-1 hover:border-orange-400/60"
          >
            <span className="inline-flex rounded-full bg-orange-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-300">
              {post.category}
            </span>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-white group-hover:text-orange-300">
              {post.title}
            </h2>
            <p className="mt-3 text-gray-300">{post.description}</p>
            <div className="mt-5 flex items-center justify-between text-sm text-gray-400">
              <span>
                {new Date(post.date).toLocaleDateString("nl-NL", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span>{post.readTime}</span>
            </div>
          </Link>
        ))}
      </section>

      <section className="border-t border-navy-700 bg-navy-900/60 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <h3 className="text-2xl font-bold text-white">Vragen over een artikel?</h3>
            <p className="mt-2 text-gray-300">Neem contact op voor advies op maat voor uw project.</p>
          </div>
          <Link href="/#contact" className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600">
            Contact opnemen
          </Link>
        </div>
      </section>
    </div>
  );
}
