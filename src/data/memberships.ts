export interface MembershipPlan {
  id: string;
  name: string;
  billing: string;
  visits: string;
  inclusions: string[];
  supportLine: string;
  isPopular?: boolean;
  isBestValue?: boolean;
}

export const memberships: MembershipPlan[] = [
  {
    id: "monthly",
    name: "Monthly",
    billing: "$90 every month",
    visits: "1 visit per month",
    inclusions: [
      "Exterior hand wash & dry",
      "Wheel & tire cleaning",
      "Interior vacuum",
      "Light interior wipe down",
      "Priority booking",
      "Discounted add-ons"
    ],
    supportLine: "Great for maintaining your vehicle and keeping it looking its best.",
    isPopular: true
  },
  {
    id: "bi-weekly",
    name: "Bi-Weekly",
    billing: "$60 every 2 weeks",
    visits: "2 visits per month",
    inclusions: [
      "Exterior hand wash & dry",
      "Wheel & tire cleaning + shine",
      "Interior vacuum",
      "Light interior wipe down",
      "Priority booking",
      "Discounted add-ons"
    ],
    supportLine: "Perfect for busy drivers who want a consistently clean car.",
    isBestValue: true
  },
  {
    id: "premium-reset",
    name: "Every 3 Months",
    billing: "$250 every 3 months",
    visits: "1 full detail",
    inclusions: [
      "Full exterior wash & detail",
      "Deep interior cleaning",
      "Stain & dirt removal",
      "Interior refresh",
      "Priority booking",
      "Discounted add-ons"
    ],
    supportLine: "Perfect for a deep clean and long-term protection."
  }
];
