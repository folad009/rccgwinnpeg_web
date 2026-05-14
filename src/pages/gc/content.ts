export type GenerationCard = {
  title: string;
  description: string;
  href: string;
  learnMoreHref?: string;
  learnMoreLabel?: string;
};

export type ConnectModule = {
  title: string;
  description: string;
  href: string;
};

export const homeGoingOnCards: GenerationCard[] = [
  {
    title: "Help Us Reach QC!",
    description:
      "Click to learn how Generation Church is reaching Queen Creek in 2025.",
    href: "/queen-creek-launch",
    learnMoreHref: "/queen-creek-launch",
    learnMoreLabel: "Learn More",
  },
  {
    title: "Food Pantry",
    description:
      "If you’re struggling right now, visit the Generation Food Pantry at our South Mountain campus.",
    href: "#",
    learnMoreHref: "http://generationfoodpantry.org/",
    learnMoreLabel: "Learn More",
  },
  {
    title: "Alpha",
    description:
      "Explore your faith in an open, non-judgmental environment. Alpha is an interactive series of sessions.",
    href: "/alpha",
    learnMoreHref: "/alpha",
    learnMoreLabel: "Learn More",
  },
  {
    title: "Chosen",
    description:
      "Change the world by changing the life of a child through foster care and adoption support.",
    href: "/chosen",
    learnMoreHref: "/chosen",
    learnMoreLabel: "Learn More",
  },
  {
    title: "Download the App",
    description:
      "Stay connected and take the Generation Church community with you wherever you go.",
    href: "https://subsplash.com/generationchurch/app",
    learnMoreHref: "https://subsplash.com/generationchurch/app",
    learnMoreLabel: "Download Now",
  },
  {
    title: "Kingdom Builders",
    description:
      "When you give as a Kingdom Builder, you support local outreach, global missions, church planting, and more.",
    href: "/kingdom-builders",
    learnMoreHref: "/kingdom-builders",
    learnMoreLabel: "Learn More",
  },
  {
    title: "Baptism",
    description:
      "Baptism publicly symbolizes your new life in Jesus. Sign up for an upcoming date.",
    href: "/baptism",
    learnMoreHref: "/baptism",
    learnMoreLabel: "Learn More",
  },
];

export const connectModules: ConnectModule[] = [
  {
    title: "G101",
    description:
      "Your next step! Learn the mission, values, and how to get plugged in.",
    href: "/generation-101",
  },
  {
    title: "Kids",
    description:
      "Little g’s (birth-preschool) and gKids (kindergarten-5th grade) built around Jesus.",
    href: "/kids",
  },
  {
    title: "Youth",
    description:
      "GEN YTH is for students in grades 6 through 12, built for worship and connection.",
    href: "/youth",
  },
  {
    title: "Life Groups",
    description:
      "Connect with others and grow your faith in community throughout the week.",
    href: "/life-groups",
  },
  {
    title: "Alpha",
    description: "Interactive sessions exploring faith in Jesus with open discussions.",
    href: "/alpha",
  },
  {
    title: "Chosen",
    description:
      "Foster care and adoption ministry equipping families to show Jesus’ love.",
    href: "/chosen",
  },
  {
    title: "Baptism",
    description: "A meaningful step for those who’ve accepted Jesus as Lord.",
    href: "/baptism",
  },
];

/** Same entries as the former “What We Have Going On” card grid: first four connect modules + `homeGoingOnCards`. */
export function homeGoingOnAccordionItems(): {
  key: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  external: boolean;
}[] {
  const fromConnect = connectModules.slice(0, 4).map((m) => ({
    key: m.href,
    title: m.title,
    description: m.description,
    href: m.href,
    linkLabel: "Learn more",
    external: false as boolean,
  }));

  const fromCards = homeGoingOnCards.map((c) => {
    const href = c.learnMoreHref ?? c.href;
    return {
      key: `${c.title}-${href}`,
      title: c.title,
      description: c.description,
      href,
      linkLabel: c.learnMoreLabel ?? "Learn more",
      external: href.startsWith("http"),
    };
  });

  return [...fromConnect, ...fromCards];
}

export type Sermon = {
  date: string;
  series: string;
  title: string;
  speaker: string;
  href: string;
};

export const sermonsNewest: Sermon[] = [
  {
    date: "March 29, 2026",
    series: "Money Myths",
    title: "Take Your Next Step: The Generosity Ladder | Money Myths Finale",
    speaker: "Ryan Visconti",
    href: "https://generation.church/sermons/",
  },
  {
    date: "March 28, 2026",
    series: "Easter At Generation",
    title: "Living Free from Envy | Palm Sunday Message",
    speaker: "Nate Clarke",
    href: "https://generation.church/sermons/",
  },
  {
    date: "March 15, 2026",
    series: "Money Myths",
    title: "Where Does Church Money Go? Inside Church Finances & Stewardship",
    speaker: "Ryan Visconti",
    href: "https://generation.church/sermons/",
  },
  {
    date: "March 8, 2026",
    series: "Money Myths",
    title: "Am I Generous? | Biblical Giving, Tithing, Offerings & God’s Heart for Money",
    speaker: "Ryan Visconti",
    href: "https://generation.church/sermons/",
  },
  {
    date: "March 1, 2026",
    series: "Money Myths",
    title: "Why I Tithe: A Biblical Case for Tithing Today",
    speaker: "Ryan Visconti",
    href: "https://generation.church/sermons/",
  },
  {
    date: "February 22, 2026",
    series: "Money Myths",
    title: "Money Myths: You Can’t Serve God and Mammon",
    speaker: "Ryan Visconti",
    href: "https://generation.church/sermons/",
  },
  {
    date: "February 15, 2026",
    series: "Mark",
    title: "Fear of the Lord vs Fear of the Storm",
    speaker: "Ryan Visconti",
    href: "https://generation.church/sermons/",
  },
  {
    date: "February 1, 2026",
    series: "—",
    title: "Immigration, Compassion, and Consequences",
    speaker: "Ryan Visconti",
    href: "https://generation.church/sermons/",
  },
];

export type Campus = {
  name: string;
  address: string;
  mainServiceTimes: string;
  chapelServiceTimes?: string;
  href?: string;
};

export const campuses: Campus[] = [
  {
    name: "Mesa",
    address: "1010 S. Ellsworth Rd. Mesa, AZ 85208",
    mainServiceTimes: "Saturdays: 3:00pm • 4:45pm • Sundays: 8:45am, 10:30am, 12:15pm",
    chapelServiceTimes: "Sundays: 8:45am",
    href: "https://generation.church/mesa",
  },
  {
    name: "South Mountain",
    address: "11832 S. Warner Elliot Loop Phoenix, AZ 85044",
    mainServiceTimes: "Sunday: 9:00am • 10:45am",
    chapelServiceTimes: "Sunday: 9:00am",
    href: "https://generation.church/south-mountain",
  },
  {
    name: "Fountain Hills",
    address: "16239 E. Ironwood Dr. Fountain Hills, AZ 85268",
    mainServiceTimes: "Sunday: 9:00am • 10:45am",
    href: "https://generation.church/fountain-hills",
  },
  {
    name: "Queen Creek",
    address: "Faith Mather Sossaman Elementary School 22801 Via Del Jardin, Queen Creek, AZ 85142",
    mainServiceTimes: "Sunday: 9:00am • 10:45am",
    href: "https://generation.church/queen-creek/",
  },
];

