export interface App {
  id: string;
  name: string;
  description: string;
  playStoreLink: string;
  appStoreLink?: string;
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  screenshots: string[];
  rating: number;
  downloads: string;
  size: string;
  category: string;
  ageRating: string;
  lastUpdated: string;
}

export const apps: App[] = [
  {
    id: "app1",
    name: "Rummy King",
    description: "Play Rummy and win real cash prizes. Join millions of players in India's favorite card game!",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.rummyking.app",
    features: [
      {
        icon: "💰",
        title: "Win Real Cash",
        description: "Play tournaments and win big cash prizes"
      },
      {
        icon: "👥",
        title: "10M+ Players",
        description: "Join India's largest Rummy community"
      },
      {
        icon: "⚡",
        title: "Instant Withdrawals",
        description: "Get your winnings directly to your bank"
      },
      {
        icon: "🎮",
        title: "Multiple Variants",
        description: "Play Points, Pool, and Deals Rummy"
      }
    ],
    screenshots: [
      "/images/app1/screenshot1.png",
      "/images/app1/screenshot2.png",
      "/images/app1/screenshot3.png"
    ],
    rating: 4.5,
    downloads: "10M+",
    size: "45MB",
    category: "Card Games",
    ageRating: "12+",
    lastUpdated: "2024-03-15"
  },
  {
    id: "app2",
    name: "Ludo Master",
    description: "Play Ludo with friends and family. Win real cash prizes in exciting tournaments!",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.ludomaster.app",
    features: [
      {
        icon: "🏆",
        title: "Daily Tournaments",
        description: "Compete in daily tournaments for cash prizes"
      },
      {
        icon: "👥",
        title: "5M+ Players",
        description: "Play with friends and family"
      },
      {
        icon: "💎",
        title: "VIP Benefits",
        description: "Get exclusive rewards and bonuses"
      },
      {
        icon: "🎲",
        title: "Multiple Modes",
        description: "Classic, Quick, and Tournament modes"
      }
    ],
    screenshots: [
      "/images/app2/screenshot1.png",
      "/images/app2/screenshot2.png",
      "/images/app2/screenshot3.png"
    ],
    rating: 4.3,
    downloads: "5M+",
    size: "35MB",
    category: "Board Games",
    ageRating: "12+",
    lastUpdated: "2024-03-10"
  }
]; 