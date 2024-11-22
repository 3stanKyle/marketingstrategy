import { Users, TrendingUp, Target, Activity } from 'lucide-react';

export const metrics = [
  {
    title: "Customer Satisfaction",
    value: "92%",
    trend: "+2.4%",
    isPositive: true,
    icon: Users
  },
  {
    title: "Revenue Growth",
    value: "$2.4M",
    trend: "+12.5%",
    isPositive: true,
    icon: TrendingUp
  },
  {
    title: "Marketing ROI",
    value: "3.8x",
    trend: "+0.6x",
    isPositive: true,
    icon: Target
  },
  {
    title: "Customer Acquisition",
    value: "2.1K",
    trend: "-5.1%",
    isPositive: false,
    icon: Activity
  }
];