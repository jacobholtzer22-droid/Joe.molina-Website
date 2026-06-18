import { Star, Quote } from "lucide-react";
import { site } from "@/site.config";

export default function Reviews() {
  const { reviews } = site;
  const hasRating = reviews.rating != null;

  return (
    <section id="reviews" className="bg-evergreen-deep py-20 text-bone sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4 text-cedar-light">{reviews.eyebrow}</p>
          <h2 className="h-display text-3xl text-bone sm:text-4xl">
            {hasRating
              ? `Rated ${reviews.rating!.toFixed(1)} on ${reviews.source}.`
              : reviews.heading}
          </h2>
          {hasRating ? (
            <div
              className="mt-5 flex items-center justify-center gap-1"
              aria-label={`${reviews.rating!.toFixed(1)} out of 5 stars`}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 fill-cedar text-cedar"
                  aria-hidden="true"
                />
              ))}
            </div>
          ) : (
            <p className="mt-4 text-base text-bone/70">{reviews.sub}</p>
          )}
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          {reviews.quotes.map((review, i) => {
            const hasQuote = review.quote.trim().length > 0;
            return (
              <figure
                key={i}
                className="flex flex-col rounded-2xl border border-bone/10 bg-evergreen/40 p-7"
              >
                <Quote className="h-7 w-7 text-cedar/80" aria-hidden="true" />
                {hasQuote ? (
                  <>
                    <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-bone">
                      “{review.quote}”
                    </blockquote>
                    <figcaption className="mt-5 text-sm font-semibold text-bone/80">
                      {review.author}
                      {review.context ? (
                        <span className="font-normal text-bone/55">
                          {" "}
                          · {review.context}
                        </span>
                      ) : null}
                    </figcaption>
                  </>
                ) : (
                  /* Placeholder — paste a real review in site.config.ts, never invent. */
                  <div className="mt-4 flex flex-1 flex-col justify-center rounded-xl border border-dashed border-bone/25 p-6 text-center">
                    <span className="text-xs font-semibold uppercase tracking-wider text-bone/70">
                      {reviews.placeholderLabel} {i + 1}
                    </span>
                    <span className="mt-1 text-xs text-bone/55">
                      {reviews.placeholderHint}
                    </span>
                  </div>
                )}
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
