import { AnimatePresence, motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { Dispatch, SetStateAction, useRef, useState } from "react";

const pricingPlans = [
  {
    name: "Basic",
    description: "Start with essential tools to boost your online presence.",
    monthlyPrice: 69,
    annualPrice: 49,
    link: "https://github.com/ansub/syntaxUI",
    features: [
      "Comprehensive Dashboard",
      "Basic Budgeting Tools",
      "Monthly Financial Reports",
      "3 Financial Accounts",
      "Email Support",
      "Advance SEO Optimization",
      "Target 100+ regions and languages",
    ],
  },
  {
    name: "Professional",
    description:
      "Unlock enhanced features and premium content to supercharge your business.",
    monthlyPrice: 299,
    annualPrice: 199,
    link: "https://github.com/ansub/syntaxUI",
    features: [
      "Everything in Basic plan",
      "Get 25 premium blogs",
      "Index upto 1000 pages",
      "Premium support",
      "Local SEO",
      "SEO Agent",
    ],
  },
  {
    name: "Premium",
    description:
      "Ultimate customization and dedicated support for enterprises.",
    monthlyPrice: 2499,
    annualPrice: 1666,
    link: "https://github.com/ansub/syntaxUI",
    features: [
      "Everything in Professional plan",
      "Get Unlimited premium blogs",
      "Add your own AI Model key",
      "Premium support & training sessions",
    ],
  },
];

interface billinginfo {
  billing: "M" | "A",
  setBilling: Dispatch<SetStateAction<"M" | "A">>;
}

export default function PricingPage() {
  const [billing, setBilling] = useState<"M" | "A">("M");
  return (
    <section className="relative w-full overflow-hidden py-12 lg:px-2 lg:py-12">
      <Heading billing={billing} setBilling={setBilling} />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 lg:flex-row lg:gap-4">
        <PricingCards pricingPlans={pricingPlans} billing={billing} />
      </div>
    </section>
  )
}

function Heading({ billing, setBilling }: billinginfo) {
  return (
    <div className="relative z-10 my-12 grid grid-cols-1 justify-items-center gap-6">
      <div className="inline-flex animate-shine items-center justify-center rounded-xl border border-neutral-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 shadow-lg py-1.5 font-medium text-white transition-colors">
        Pricing
      </div>      <p
        className=" text-5xl font-bold text-center">Our plans for your strategies</p>
      <p

        className=" text-center ">See below our main three plans for your business, for your startup and agency.It start from here! You can teach yourself what you really like.</p>
      <div className="shadow-inner shadow-black/40  rounded-xl border border-black/15 dark:border-white/10 bg-[linear-gradient(110deg,#F3F4F4,45%,#ffffff,55%,#F3F4F4)] dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] dark:shadow-white/10 p-1 transition-colors animate-shine">
        <div className=" relative flex gap-2 shadow-xl dark:bg-black  bg-white rounded-xl">
          <button
            onClick={() => setBilling("M")}
            className={`${billing === "M" ? "" : "  hover:text-black/70 dark:hover:text-white/70"
              } relative rounded-xl px-6 py-3 font-medium`}
          >
            {billing === "M" && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-white dark:bg-black shadow-md shadow-black/10 dark:shadow-white/5  mix-blend-difference"
                style={{ borderRadius: 12 }}
                transition={{ type: "spring", bounce: 0.5, duration: 0.6 }}
              />
            )}
            Monthly
          </button>
          <button
            onClick={() => setBilling("A")}
            className={`${billing === "A" ? "" : ""
              } relative rounded-xl px-6 py-3 font-medium`}
          >
            {billing === "A" && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-white dark:bg-black  mix-blend-difference"
                style={{ borderRadius: 12 }}
                transition={{ type: "spring", bounce: 0.5, duration: 0.6 }}
              />
            )}
            Annual
          </button>
        </div>
      </div>
    </div>
  )
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;




function PricingCards({
  billing,
  pricingPlans,
}: {
  billing: "M" | "A";
  pricingPlans: {
    name: string;
    description: string;
    monthlyPrice: number;
    annualPrice: number;
    link: string;
    features: string[];
  }[];
}) {
  return (
    <>
      {pricingPlans.map((plan: {
        name: string;
        description: string;
        monthlyPrice: number;
        annualPrice: number;
        link: string;
        features: string[];
      }, index: number) => (
        <PricingCard billing={billing} key={index} plan={plan} />
      ))}
    </>
  );
}

function PricingCard({
  plan, billing
}: {
  billing: "M" | "A",
  plan: {
    name: string;
    description: string;
    monthlyPrice: number;
    annualPrice: number;
    link: string;
    features: string[];
  }
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;
    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="w-full rounded-xl group/card text-sm border shadow-inner  border-black/15 dark:border-white/10 bg-[linear-gradient(110deg,#F3F4F4,45%,#ffffff,55%,#F3F4F4)] dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] dark:shadow-white/10 p-3 transition-colors animate-shine"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className=" w-full h-full rounded-xl flex flex-col gap-6 text-center py-4 bg-white dark:bg-black shadow-lg dark:shadow-white/50 px-2"
      >
        {/* Render the plan details here */}
        <p className=" text-lg font-bold uppercase">
          {plan.name}
        </p>
        <p className=" text-sm text-center">{plan.description}</p>
        <div className="overflow-hidden w-full pt-1 flex items-center justify-center ">
          <AnimatePresence mode="wait">
            <motion.p
              key={billing === 'M' ? 'monthly' : 'annual'}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="text-4xl font-bold "
            >
              <span className="">
                ${billing === 'M' ? plan.monthlyPrice : plan.annualPrice}
              </span>
              <span className="text-sm font-medium ">
                /{billing === 'M' ? 'month' : 'year'}
              </span>
            </motion.p>
          </AnimatePresence>
        </div>
        <button className=" z-10 group/button w-full relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl shadow-md hover:shadow-xl dark:text-black bg-neutral-950 px-6 font-medium text-white dark:shadow-white/10 dark:bg-white transition-all duration-150 active:scale-95 hover:scale-105">
          <span>Get Started</span>
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] ease-in-out group-hover/button:duration-1000 group-hover/button:[transform:skew(-12deg)_translateX(100%)]">
            <div className="relative blur-md h-full w-8 bg-white/20 dark:bg-black/5"></div>
          </div>
        </button>
        <div className="w-full">
          {plan.features.map((feature: string, idx) => (
            <div key={idx} className=" text-start flex mb-3 justify-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>              <span className="text-sm ">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}