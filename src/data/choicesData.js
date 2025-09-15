const choicesData = {
  background: {
    src: "/c/choices.webp",
    darkOverlayOnLg: true,
  },
  eyebrow: "Take Action",
  title: "The Choice Is Yours",
  cards: [
    {
      variant: "bad",
      icon: "/c/clock.svg",
      title: "Do Nothing",
      titleClass: "text-center alt gradient-text switzer capitalize",
      subtitle: "Watch Netflix",
      priceArea: {
        text: "Lose 8 hours a day",
        className: "price-bad",
      },
      features: [
        {
          icon: "/c/check.svg",
          text: "Work for someone else (8h a day)",
          isBad: true,
        },
        { icon: "/c/check.svg", text: "Stay stagnant", isBad: true },
        { icon: "/c/check.svg", text: "Work a 9-5", isBad: true },
        {
          icon: "/c/check.svg",
          text: "Pay $35,000 for University",
          isBad: true,
        },
        { icon: "/c/check.svg", text: "Stay unfulfilled", isBad: true },
        { icon: "/c/check.svg", text: "Hang around losers", isBad: true },
      ],
      cta: {
        href: "https://www.jointherealworld.com/www.jobs.com", // suspicious, but kept verbatim
        image: "/c/button_bad.png",
        alt: "Button Join TRW",
        buttonContainerClass: "button-container bad",
      },
    },
    {
      variant: "good",
      icon: "/c/pill.svg",
      title: "take action",
      titleClass: "text-center gradient-text switzer capitalize",
      subtitle: "Start Earning Today",
      priceArea: {
        text: "$49.99",
        className: "price gradient-text-2",
      },
      features: [
        { icon: "/c/check.svg", text: "Simple-step-by-step tutorials" },
        { icon: "/c/check.svg", text: "12+ wealth creation methods" },
        { icon: "/c/check.svg", text: "Access to millionaire mentors" },
        { icon: "/c/check.svg", text: "Connect with 155,000+ others" },
        { icon: "/c/check.svg", text: "No experience needed" },
        { icon: "/c/check.svg", text: "Custom-made learning app" },
        { divider: true },
        { icon: "/c/shield.svg", text: "Cancel anytime, risk-free" },
        {
          icon: "/c/lock.svg",
          text: "$49.99/month forever",
          textClass: "gradient-text-2",
        },
        { text: "Lock in your price before it increases", isSmall: true },
      ],
      cta: {
        href: "https://www.jointherealworld.com/checkout",
        image: "/c/button.png",
        alt: "Button Join TRW",
        buttonContainerClass: "button-container",
      },
    },
  ],
};

export default choicesData;
