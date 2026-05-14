/** Sermons listing for RCCG Living Seed Winnipeg — replace `href` with message permalinks when available. */

export type LscSermon = {
  date: string;
  series: string;
  title: string;
  speaker: string;
  href: string;
};

const channel = "https://www.youtube.com/@RCCGLSCWINNIPEG";

export const lscSermons: LscSermon[] = [
  {
    date: "May 11, 2026",
    series: "Kingdom Ambassadors",
    title: "Salt & Light in Your Sphere — Monday to Sunday",
    speaker: "Pastor Philip Olabisi",
    href: channel,
  },
  {
    date: "May 4, 2026",
    series: "Kingdom Ambassadors",
    title: "Excellence Without Ego: Serving Like Jesus",
    speaker: "Pastor Philip Olabisi",
    href: channel,
  },
  {
    date: "April 27, 2026",
    series: "Young & On Fire",
    title: "When the Spirit Leads: Courage for Your Next Step",
    speaker: "Pastor Abisola Olabisi",
    href: channel,
  },
  {
    date: "April 20, 2026",
    series: "Young & On Fire",
    title: "Community That Sharpens: Iron Sharpens Iron",
    speaker: "Pastor Philip Olabisi",
    href: channel,
  },
  {
    date: "April 13, 2026",
    series: "Foundations",
    title: "The Word That Builds: Hearing God in Busy Seasons",
    speaker: "Pastor Philip Olabisi",
    href: channel,
  },
  {
    date: "April 6, 2026",
    series: "Foundations",
    title: "Prayer That Moves Heaven and Shapes the Earth",
    speaker: "Pastor Abisola Olabisi",
    href: channel,
  },
  {
    date: "March 30, 2026",
    series: "Easter",
    title: "He Is Risen: Hope That Rewrites Your Story",
    speaker: "Pastor Philip Olabisi",
    href: channel,
  },
];
