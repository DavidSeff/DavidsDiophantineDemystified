export const site = {
  name: "David's Diophantine Demystified",
  title: "Diophantine Demystified — Learn Diophantine Approximation",
  description:
    "Beautiful, clear explanations of Diophantine Approximation for all levels — from intuitive basics to deep theory and practical applications.",
  url: "https://DavidsDiophantineDemystified.io", // update when deployed
  githubUrl: "https://github.com/DavidSeff/DavidsDiophantineDemystified/", // update to real repo URL
  author: {
    name: "David Seff",
  },
  socialImage: "/images/social-card.png", // optional; generate later if needed
  keywords: [
    "Diophantine Approximation",
    "number theory",
    "continued fractions",
    "Diophantine equations",
    "math education",
  ],
};

export type SeoProps = {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
};

