import { Users, Heart, Music, BookOpen, Baby, HelpingHand, LucideIcon } from "lucide-react";

export interface Ministry {
  id: string;
  slug: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
  fullDescription: string;
  leaders: {
    name: string;
    role: string;
    image: string;
  }[];
  schedule: {
    day: string;
    time: string;
    location: string;
  }[];
  contactEmail: string;
}

export const ministries: Ministry[] = [
  {
    id: "1",
    slug: "mens-fellowship",
    title: "Men's Fellowship",
    desc: "Empowering men to be leaders in their homes and community.",
    icon: Users,
    color: "bg-blue-100 text-blue-700",
    fullDescription: "The Men's Fellowship is dedicated to raising godly men who lead with integrity, wisdom, and strength. We provide a supportive environment where men can discuss real-life challenges, study the Word, and grow in their relationship with Christ. Through mentorship, prayer breakfasts, and community service, we aim to make a positive impact in our families and society.",
    leaders: [
      {
        name: "Deacon James Wilson",
        role: "Men's Ministry Leader",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop"
      }
    ],
    schedule: [
      { day: "Last Saturday of Month", time: "9:00 AM", location: "Fellowship Hall" },
      { day: "Wednesdays", time: "7:00 PM", location: "Main Sanctuary (Bible Study)" }
    ],
    contactEmail: "men@rccglivingseedwpg.com"
  },
  {
    id: "2",
    slug: "women-of-virtue",
    title: "Women of Virtue",
    desc: "A sisterhood of faith, prayer, and encouragement.",
    icon: Heart,
    color: "bg-pink-100 text-pink-700",
    fullDescription: "Women of Virtue is a vibrant community of women passionate about God and supporting one another. We believe in the power of prayer and the beauty of sisterhood. Our gatherings focus on spiritual growth, emotional wellness, and empowering women to fulfill their God-given potential in every season of life.",
    leaders: [
      {
        name: "Mrs. Sarah Johnson",
        role: "Women's Ministry Coordinator",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop"
      }
    ],
    schedule: [
      { day: "2nd Saturday of Month", time: "10:00 AM", location: "Prayer Room" },
      { day: "Thursdays", time: "6:30 PM", location: "Online (Zoom)" }
    ],
    contactEmail: "women@rccglivingseedwpg.com"
  },
  {
    id: "3",
    slug: "youth-young-adults",
    title: "Youth & Young Adults",
    desc: "Dynamic worship and real conversations for the next generation.",
    icon: Music,
    color: "bg-orange-100 text-orange-700",
    fullDescription: "Our Youth and Young Adults ministry is a high-energy, authentic space for the next generation to encounter Jesus. We tackle real issues, worship passionately, and build lasting friendships. Whether you're in high school, university, or starting your career, there's a place for you here.",
    leaders: [
      {
        name: "Bro. Michael Chen",
        role: "Youth Pastor",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop"
      }
    ],
    schedule: [
      { day: "Fridays", time: "7:00 PM", location: "Youth Hall" },
      { day: "Sundays", time: "10:00 AM", location: "Main Sanctuary" }
    ],
    contactEmail: "youth@rccglivingseedwpg.com"
  },
  {
    id: "4",
    slug: "childrens-church",
    title: "Children's Church",
    desc: "Fun, safe, and biblical learning for kids of all ages.",
    icon: Baby,
    color: "bg-green-100 text-green-700",
    fullDescription: "We believe children are a gift from God. Our Children's Church provides a safe, fun, and engaging environment where kids can learn about God's love through Bible stories, songs, crafts, and games. Our dedicated teachers are committed to laying a strong spiritual foundation for every child.",
    leaders: [
      {
        name: "Sis. Emily Davis",
        role: "Children's Ministry Director",
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=2574&auto=format&fit=crop"
      }
    ],
    schedule: [
      { day: "Sundays", time: "10:00 AM", location: "Kids Wing" }
    ],
    contactEmail: "kids@rccglivingseedwpg.com"
  },
  {
    id: "5",
    slug: "evangelism",
    title: "Evangelism",
    desc: "Sharing the good news of Jesus Christ with our city.",
    icon: HelpingHand,
    color: "bg-purple-100 text-purple-700",
    fullDescription: "The Evangelism team is the heartbeat of our outreach efforts. We are passionate about taking the Gospel beyond the four walls of the church. Through street evangelism, community events, and acts of kindness, we share the hope of Jesus with Winnipeg.",
    leaders: [
      {
        name: "Pastor David Okonkwo",
        role: "Outreach Director",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop"
      }
    ],
    schedule: [
      { day: "Saturdays", time: "2:00 PM", location: "Various Locations" }
    ],
    contactEmail: "outreach@rccglivingseedwpg.com"
  },
  {
    id: "6",
    slug: "bible-study",
    title: "Bible Study",
    desc: "Deep dive into scripture to build a solid foundation.",
    icon: BookOpen,
    color: "bg-yellow-100 text-yellow-700",
    fullDescription: "Our weekly Bible Study is a time of in-depth learning and discussion. We explore books of the Bible, theological themes, and practical applications for daily living. It's an interactive session where questions are encouraged and spiritual growth is prioritized.",
    leaders: [
      {
        name: "Pastor John Doe",
        role: "Senior Pastor",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop"
      }
    ],
    schedule: [
      { day: "Wednesdays", time: "7:00 PM", location: "Main Sanctuary & Online" }
    ],
    contactEmail: "info@rccglivingseedwpg.com"
  },
];
