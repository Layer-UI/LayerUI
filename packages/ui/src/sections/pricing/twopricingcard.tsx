import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";


const pricingPlans = [
    {
        name: "Free",
        description: "For new makers who want to fine-tune and test an idea.",
        monthlyPrice: 99,
        annualPrice: 1199,
        link: "https://www.linkedin.com/in/maheshwar-reddy-mutupuri-713927258/",
        features: [
            "1 landing page included",
            "1,000 visits/month",
            "Access to all UI blocks",
            "50 conversion actions included",
            "5% payment commission",
            "Real-time analytics",
            "5% payment commission",
        ],
    },
    {
        name: "PRO",
        description:
            "For creators with multiple ideas who want to efficiently test and refine them.",
        monthlyPrice: 199,
        annualPrice: 1699,
        link: "https://www.linkedin.com/in/maheshwar-reddy-mutupuri-713927258/",
        features: [
            "All Free features",
            "5 landing pages included",
            "50,000 visits/month",
            "1,000 conversion actions included",
            "Premium support",
            "1% payment commission",
            "Local SEO",
            "Real-time analytics"
        ],
    },
];

interface billinginfo {
    billing: "Monthly" | "Annual",
    setBilling: Dispatch<SetStateAction<"Monthly" | "Annual">>;
}

export default function PricingPage() {
    const [billing, setBilling] = useState<"Monthly" | "Annual">("Monthly");
    return (
        <section className="relative w-full overflow-hidden py-12 lg:px-2 lg:py-12 flex justify-center items-center h-full md:px-3 md:py:8">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f3f3f3_1px,transparent_1px),linear-gradient(to_bottom,#f3f3f3_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#303030_1px,transparent_1px),linear-gradient(to_bottom,#303030_1px,transparent_1px)] bg-[size:3rem_3rem]">
                <div className="absolute right-0 bottom-0 -z-[9] m-auto h-[310px] w-[310px] rounded-full bg-gradient-to-r from-amber-500 to-pink-500 opacity-50 blur-[100px]"></div>
                <div className="absolute  left-0 top-0 -z-[9] m-auto h-[310px] w-[310px] rounded-full bg-gradient-to-r from-amber-500 to-pink-500 opacity-30 blur-[100px]"></div>
            </div>
            <div className="relative w-full overflow-hidden max-w-4xl">
                <Heading billing={billing} setBilling={setBilling} />
                <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-7 sm:flex-row translate-x-3">
                    <PricingCards pricingPlans={pricingPlans} billing={billing} />
                </div>
            </div>
        </section>
    )
}

function Heading({ billing, setBilling }: billinginfo) {
    return (
        <div className="relative z-10 mb-7 grid grid-cols-1 justify-items-center gap-3">
            <p className=" text-center font-semibold ">PRICING</p>
            <p
                className=" text-2xl md:text-5xl font-bold  text-center">Our plans for your strategies</p>
            <p
                className=" text-center text-xs md:text-base  max-w-2xl px-8 mb-2 ">See below our main three plans for your business, for your startup and agency.It start from here! You can teach yourself what you really like.</p>
            <div className=" flex">
                <button
                    onClick={() => setBilling("Monthly")}
                    className={`${billing === "Monthly" ? " dark:bg-zinc-900 bg-white scale-105 z-10" : " translate-x-1 z-0 border-r-0 rounded-r-none backdrop-blur-lg bg-gradient-to-t from-slate-900/10 to-slate-50/5 shadow-inner dark:bg-white/30 border scale-90 hover:text-black/70 dark:hover:text-white/70"
                        } relative rounded-lg px-3 md:px-6 py-1.5 md:py-3 font-medium border shadow-lg transition-all duration-200`}
                >
                    Monthly
                </button>
                <button
                    onClick={() => setBilling("Annual")}
                    className={`${billing === "Annual" ? "dark:bg-zinc-900 bg-white scale-105 z-10" : "border-l-0 -translate-x-1 z-0 rounded-l-none backdrop-blur-lg bg-gradient-to-t from-slate-900/10 to-slate-50/5 shadow-inner dark:bg-white/30  border scale-90"
                        } relative rounded-lg px-3 md:px-6 py-1.5 md:py-3 font-medium border shadow-lg transition-all duration-200`}
                >
                    Annual
                </button>

            </div>
        </div>
    )
};

const getCardVariants = (index: number) => ({
    open: {
        scale: 1,
        x: 0,
        zIndex: 10
    },
    close: {
        scale: 0.9,
        zIndex: 0,
    }
});

function PricingCards({ billing, pricingPlans }: {
    billing: "Monthly" | "Annual",
    pricingPlans: {
        name: string;
        description: string;
        monthlyPrice: number;
        annualPrice: number;
        link: string;
        features: string[];
    }[]
}) {
    const [clickcard, setclickcard] = useState(1)
    return (
        <>
            {pricingPlans.map((plan: {
                name: string;
                description: string;
                monthlyPrice: number;
                annualPrice: number;
                link: string;
                features: string[];
            }, index) => (
                <motion.div
                    variants={getCardVariants(index)}
                    onMouseEnter={() => { setclickcard(index) }}
                    animate={clickcard == index ? "open" : "close"}
                    key={index}
                    transition={{ duration: 0.2, ease: 'easeInOut', stiffness: 50 }}
                    className={cn(" overflow-hidden relative group/card w-full flex flex-col items-start justify-evenly rounded-xl border-gray-300 p-6 text-left dark:border-gray-600 shadow-md border transition duration-200 shadow-input dark:shadow-white/10 bg-white dark:bg-zinc-900 z-10 ml-0 mr-0", index != clickcard && "transition-all duration-300 sm:even:border-r-0  sm:odd:border-l-0 sm:odd:rounded-r-none sm:even:rounded-l-none backdrop-blur-lg bg-gradient-to-t from-slate-50/10 to-slate-900/5 shadow-inner dark:bg-white/30", (index != clickcard && index % 2 == 0) ? "  " : "-mt-7 sm:mt-0 sm:-ml-[22px]")}
                >
                    <p className="mb-1 mt-0 text-lg font-bold uppercase">
                        {plan.name}
                    </p>
                    <p className="my-0 mb-6 text-sm">{plan.description}</p>
                    <div className="mb-4 overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={billing === "Monthly" ? 'monthly' : 'annual'}
                                initial={{ scale: 0.3, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ ease: 'easeInOut', duration: 0.4 }}
                                className="my-0 text-4xl font-semibold "
                            >
                                <span>
                                    ${billing === "Monthly" ? plan.monthlyPrice : plan.annualPrice}
                                </span>
                                <span className="text-sm font-medium">
                                    /{billing === "Monthly" ? 'month' : 'year'}
                                </span>
                            </motion.p>
                        </AnimatePresence>
                    </div>
                    {plan.features.map((feature: string, idx) => (
                        <div key={idx} className="mb-3 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check "><path d="M20 6 9 17l-5-5" /></svg>
                            <span className="text-sm ">{feature}</span>
                        </div>
                    ))}
                    <button className=" z-10 group/button w-full my-5 relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl shadow-md hover:shadow-xl dark:text-black bg-neutral-950 px-6 font-medium text-white dark:shadow-white/10 dark:bg-white">
                        <span>Get Started</span>
                    </button>
                </motion.div>
            ))}
        </>
    )
}