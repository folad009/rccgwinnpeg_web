/** About Us & Meet the Pastor — shared copy */

export const aboutStory = {
  heading: "Our Story",
  p1:
    "Living Seed Church (LSC) is a Young adults and Youth movement of The Redeemed Christian Church of God (RCCG), an international church in over 195 countries with the mandate to raise believers of CHARACTER, who are EXCELLENT and above all on FIRE for God.",
  p2:
    "We are a growing church with a desire to spread the love of Christ to every young person in the community by being thorough Kingdom Ambassadors in all sphere of human endeavour. The transformation we see among us is humbling. We eagerly anticipate what lies ahead knowing the best is yet to come!",
} as const;

export const aboutMandate = {
  heading: "OUR MANDATE",
  items: [
    "RAISING SPIRIT FILLED BELIEVERS",
    "WORD-FILLED",
    "PEOPLE OF CHARACTER",
    "PEOPLE OF EXCELLENCE",
    "FIRE",
  ] as const,
};

export const aboutVision = {
  heading: "OUR VISION",
  lead: "Our Vision is to RAISE KINGDOM AMBASSADORS.",
  body:
    "We see a day when the gospel of the kingdom will be on the lips of men and women across Canada. A day when an army of purposeful men and women will be at the frontline of every sector applying God’s kingdom principles.",
} as const;

export const aboutValues = {
  heading: "OUR VALUES",
  items: ["LOVE", "EXCELLENCE", "INTEGRITY", "HONOUR", "COMMUNITY"] as const,
};

/** Short lines for richer About layouts (hover / cards). */
export const aboutValueBlurbs: Record<(typeof aboutValues.items)[number], string> = {
  LOVE: "We reflect Christ’s heart—welcoming, patient, and generous toward every person.",
  EXCELLENCE: "We pursue the highest standard with humility, because God deserves our best.",
  INTEGRITY: "We align our public and private lives with Scripture and truth.",
  HONOUR: "We celebrate God, Scripture, leadership, and one another with respect.",
  COMMUNITY: "We grow together in faith, accountability, and genuine relationship.",
};

export type BeliefBlock = {
  title: string;
  body: string;
  scripture: string;
};

export const aboutBeliefs: BeliefBlock[] = [
  {
    title: "GOD",
    body:
      "We believe that God is a Trinity: Father, Son and Holy Spirit, each an uncreated person, one in essence, equal in power and glory. We believe in God the Father, Almighty Creator of heaven and earth.",
    scripture: "Genesis 1:1; Psalm 90:2; Matthew 3:16-17",
  },
  {
    title: "JESUS",
    body:
      "We believe in Jesus Christ, God’s only Son, our Lord. He was conceived by the Holy Spirit and born of the virgin Mary. He was crucified, dead, and buried. He rose again on the third day. He ascended to heaven and now sits in authority at the right hand of God the Father. He will return to claim his Church and judge mankind.",
    scripture: "Acts 10:38-43; Hebrews 1:2-3; Matthew 25:31-32",
  },
  {
    title: "HOLY SPIRIT",
    body:
      "We believe the Holy Spirit is God, the Lord and giver of life, who was given to the Church in fullness at Pentecost. The Holy Spirit empowers Christ followers to serve and share their faith, cleanses man from the old nature, and conforms us to the image of Christ.",
    scripture: "Acts 2:1-4; John 16:7-14; Galatians 3:22-23",
  },
  {
    title: "THE CHURCH",
    body:
      "We believe in the Church, the bride of Christ, whose goal is to make disciples throughout the world. This global Church is comprised of many local fellowships. We affirm those fellowships that see Jesus Christ as Lord and the only way to heaven.",
    scripture: "Acts 2:46-47; Matthew 28:19-20",
  },
  {
    title: "MARRIAGE",
    body:
      "We believe in the Biblical definition of marriage: one man and one woman, committed to each other in a union of mutual love, faithfulness, and respect. Marriage exists to be a picture of the unchanging love Christ has for His own bride, the Church.",
    scripture: "Genesis 2:18, 22-24; Matthew 19:4-6; Ephesians 5:31-32",
  },
  {
    title: "THE BIBLE",
    body:
      "We believe the Bible is the perfect and inspired Word of God. It is our source of all doctrine, instruction, and correction. It provides practical guidance for everyday life.",
    scripture: "2 Timothy 3:16-17; Psalm 119:103",
  },
  {
    title: "COMMUNION",
    body:
      "We believe in communion as a commemoration of Christ’s death and will continue to do it in this memory until He comes again. It is a sign of our relationship with Him.",
    scripture: "1 Corinthians 11:23-26; Matthew 26:26-29",
  },
  {
    title: "BAPTISM",
    body:
      "We believe baptism is an outward sign of what God has already done in our lives. We follow Christ’s example, and through it, we identify with Him, in the name of the Father, the Son, and the Holy Spirit.",
    scripture: "Matthew 28:19-20; Acts 16:31, 33",
  },
];

export const aboutPastor = {
  heading: "OUR PASTORS",
  p1:
    "Philip and Abisola Olabisi are the servant-leaders of Living Seed Church. For over 10 years, they have carried a burden and served as youth leaders at different parishes of the Redeemed Christian Church of God.",
  p2:
    "They carry a burden for young people and in 2021, they pursue their call into planting a Young Adult and Youth Church in Winnipeg, Manitoba.",
  p3: 
    "They have 2 children, Asher and Eden. They have a passion to help young people live out God’s plans for their lives.",
} as const;
