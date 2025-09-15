// src/components/Navbar/navData.js
import trw from "../c/trw.svg";
import courses from "../c/courses.svg";
import ai from "../c/ai.svg";
import business from "../c/business.svg";
import casm from "../c/casm.svg";
import cc from "../c/cc.svg";
import copywriting from "../c/copywriting.svg";
import defi from "../c/defi.svg";
import ecom from "../c/ecom.svg";
import fitness from "../c/fitness.svg";
import newsletter from "../c/newsletter.svg";
import downloads from "../c/downloads.svg";
import videos from "../c/videos.svg";
import blog from "../c/blog.svg";
import icon from "../c/icon.svg";

export const NAV_ITEMS = [
  {
    label: "The Real World",
    href: "https://www.jointherealworld.com/",
    icon: trw,
  },
  {
    label: "Courses",
    href: "#",
    icon: courses,
    children: [
      {
        label: "AI Campus",
        href: "https://www.jointherealworld.com/ai-campus",
        icon: ai,
      },
      {
        label: "Business Campus",
        href: "https://www.jointherealworld.com/business-campus",
        icon: business,
      },
      {
        label: "CA & SM Campus",
        href: "https://www.jointherealworld.com/ca-sm-campus",
        icon: casm,
      },
      {
        label: "CC Campus",
        href: "https://www.jointherealworld.com/cc-campus",
        icon: cc,
      },
      {
        label: "Copywriting Campus",
        href: "https://www.jointherealworld.com/copywriting-campus",
        icon: copywriting,
      },
      {
        label: "Altcoin Campus",
        href: "https://www.jointherealworld.com/altcoin-trading-campus",
        icon: defi,
      },
      {
        label: "E-Commerce Campus",
        href: "https://www.jointherealworld.com/e-commerce-campus",
        icon: ecom,
      },
      {
        label: "Fitness Campus",
        href: "https://www.jointherealworld.com/fitness-campus",
        icon: fitness,
      },
    ],
  },
  {
    label: "Newsletter",
    href: "https://www.cobratate.com/newsletter",
    icon: newsletter,
  },
  {
    label: "Downloads",
    href: "https://www.jointherealworld.com/downloads",
    icon: downloads,
  },
  {
    label: "Videos",
    href: "https://www.jointherealworld.com/video",
    icon: videos,
  },
  { label: "Blog", href: "https://www.jointherealworld.com/blog", icon: blog },
  { label: "Upgrade", href: "https://www.jointherealworld.com/checkout", icon }, // optional top banner icon
];
