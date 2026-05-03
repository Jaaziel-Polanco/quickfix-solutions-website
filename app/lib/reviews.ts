/**
 * Customer testimonials. Empty until real, verifiable customer feedback is
 * collected (e.g. via Google Business Profile). When populated:
 *
 * 1. Re-enable the review cards on /reviews and home `ReviewsSection`.
 * 2. Remove `noindex` from /reviews route metadata.
 * 3. Re-add /reviews to the sitemap.
 * 4. Optionally add `Review` / `AggregateRating` JSON-LD ONLY if reviews are
 *    real and source can be cited. The FTC's 2024 fake-review rule explicitly
 *    forbids representing fabricated testimonials as real customer reviews.
 */
export type Review = {
  name: string;
  location: string;
  rating: 4 | 5;
  date: string;
  body: string;
  service: string;
  lang: "en" | "es";
};

export const REVIEWS: Review[] = [];
