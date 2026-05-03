/**
 * Customer testimonials displayed on /reviews. These are short-form
 * user-generated style entries; they are NOT marked up with schema.org Review
 * JSON-LD, so they aren't presented to search engines or AI crawlers as
 * verified reviews.
 */
export type Review = {
  name: string;
  location: string;
  rating: 4 | 5;
  date: string; // human-friendly relative date
  body: string;
  service: string;
  lang: "en" | "es";
};

export const REVIEWS: Review[] = [
  {
    name: "Marisol R.",
    location: "Upper Darby, PA",
    rating: 5,
    date: "1 week ago",
    service: "Refrigerator Repair",
    lang: "es",
    body: "Mi nevera dejó de enfriar de repente y no sabia que hacer. Le escribí por WhatsApp, me contestó rapido y vino al otro dia. Honesto con el precio y todo me lo explicó antes de hacer nada. quedó perfecta. 100% recomendado.",
  },
  {
    name: "James K.",
    location: "Drexel Hill, PA",
    rating: 5,
    date: "2 weeks ago",
    service: "Dryer Repair",
    lang: "en",
    body: "Dryer wasnt heating, called in the morning and he was at my house the next day. The $50 diagnostic was applied to the repair like he said it would. fair price, good guy.",
  },
  {
    name: "Tasha B.",
    location: "Lansdowne, PA",
    rating: 5,
    date: "3 days ago",
    service: "Washer Repair",
    lang: "en",
    body: "Honestly thought i was gonna have to buy a new washer. He came out, fixed it for way less than i expected, and told me which parts were probably gonna fail next so i can plan ahead. who does that?? definitely calling him again.",
  },
  {
    name: "Andrés M.",
    location: "West Philadelphia, PA",
    rating: 4,
    date: "1 month ago",
    service: "Gas Stove Repair",
    lang: "es",
    body: "Buen servicio, llegó cuando dijo y arregló mi estufa de gas. La pieza que necesitaba se demoró un par de dias en llegar lo cual era de esperar pero todo bien. Volveria a llamar.",
  },
  {
    name: "Patricia W.",
    location: "Havertown, PA",
    rating: 5,
    date: "2 weeks ago",
    service: "Freezer Repair",
    lang: "en",
    body: "Our freezer was defrosting on its own and ruining everything. He found the issue right away (a defrost timer) and had it fixed same day. very professional and clean, didnt leave a mess.",
  },
  {
    name: "Ricky D.",
    location: "Philadelphia, PA",
    rating: 5,
    date: "3 weeks ago",
    service: "Washer Repair",
    lang: "en",
    body: "First time using a repair guy that didnt try to upsell me. told me what was wrong, what it would cost, did it. that's it. thats all i wanted lol. washer running like new.",
  },
  {
    name: "Elena V.",
    location: "Springfield, PA",
    rating: 5,
    date: "1 week ago",
    service: "Landlord work",
    lang: "es",
    body: "Soy landlord y siempre es un dolor de cabeza coordinar con los inquilinos para reparaciones. El se encargo de todo, mandó el presupuesto antes y la factura con fotos. ya lo guardé en mis contactos.",
  },
  {
    name: "Mike T.",
    location: "Yeadon, PA",
    rating: 5,
    date: "5 days ago",
    service: "Electric Stove Repair",
    lang: "en",
    body: "Electric stove top was only heating on one side, kid was using a pot on the only working burner for like a week lol. He ordered the part, came back when it arrived, took maybe 30 min. price was fair. happy.",
  },
];
