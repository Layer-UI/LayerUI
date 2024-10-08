import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";

// Define the type for a single pricing plan
interface PricingPlan {
    name: string;
    description: string;
    monthlyPrice: number;
    annualPrice: number;
    link: string;
    features: string[];
}

// Define the type for billing information
interface BillingInfo {
    billing: "Monthly" | "Annual";
    setBilling: Dispatch<SetStateAction<"Monthly" | "Annual">>;
}

// Sample pricing plans
const pricingPlans: PricingPlan[] = [
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
        ],
    },
    {
        name: "PRO",
        description: "For creators with multiple ideas who want to efficiently test and refine them.",
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
            "Real-time analytics",
        ],
    },
    {
        name: "BUSINESS",
        description: "Ultimate customization and dedicated support for enterprises.",
        monthlyPrice: 499,
        annualPrice: 9666,
        link: "https://www.linkedin.com/in/maheshwar-reddy-mutupuri-713927258/",
        features: [
            "All Free features",
            "20 landing pages included",
            "200,000 visits/month",
            "5,000 conversion actions included",
            "Premium support",
            "0% payment commission",
            "Local SEO",
            "Real-time analytics",
            "All Standard features",
            "Access to all UI blocks",
        ],
    },
];

export default function PricingPage() {
    const [billing, setBilling] = useState<"Monthly" | "Annual">("Monthly");

    return (
        <section className="flex justify-center items-center w-full h-full md:px-3 md:py:8 lg:py-9 lg:px-8">
            <div className="relative w-full max-w-4xl">
                <Heading billing={billing} setBilling={setBilling} />
                <div className="relative z-10 mx-auto flex w-full flex-col items-center md:items-stretch gap-8 md:flex-row md:gap-4">
                    <PricingCards pricingPlans={pricingPlans} billing={billing} />
                </div>
            </div>
        </section>
    );
}

function Heading({ billing, setBilling }: BillingInfo) {
    return (
        <div className="relative px-5 md:px-0 z-10 my-12 grid grid-cols-1 justify-items-center gap-6">
            <motion.p
                initial={{ rotateX: 90, opacity: 0 }}
                whileInView={{ rotateX: 0, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeIn' }}
                viewport={{ once: true }}
                className="text-2xl md:text-5xl font-bold"
            >
                Our plans for your strategies
            </motion.p>
            <motion.p
                initial={{ rotateX: -90, opacity: 0 }}
                whileInView={{ rotateX: 0, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeIn' }}
                viewport={{ once: true }}
                className="text-center text-xs md:text-base max-w-2xl"
            >
                See below our main three plans for your business, startup, and agency. It starts from here! You can teach yourself what you really like.
            </motion.p>
            <div className="flex gap-2 shadow-inner shadow-black/40 dark:shadow-white/20 rounded-full">
                <BillingButton
                    billing="Monthly"
                    isActive={billing === "Monthly"}
                    setBilling={setBilling}
                />
                <BillingButton
                    billing="Annual"
                    isActive={billing === "Annual"}
                    setBilling={setBilling}
                />
            </div>
        </div>
    );
}

// Button component for billing options
function BillingButton({ billing, isActive, setBilling }: { billing: "Monthly" | "Annual"; isActive: boolean; setBilling: Dispatch<SetStateAction<"Monthly" | "Annual">>; }) {
    return (
        <button
            onClick={() => setBilling(billing)}
            className={`${isActive ? "text-white shadow-lg" : "hover:text-black/70 dark:hover:text-white/70"} text-sm md:text-base relative rounded-full px-3 md:px-6 py-1.5 md:py-3 font-medium`}
        >
            {isActive && (
                <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 z-10 bg-black dark:bg-white shadow-md shadow-black/10 dark:shadow-white/5 mix-blend-difference"
                    style={{ borderRadius: 9999 }}
                    transition={{ type: "spring", bounce: 0.5, duration: 0.6 }}
                />
            )}
            {billing}
        </button>
    );
}

const PricingCardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
};

function PricingCards({ billing, pricingPlans }: { billing: "Monthly" | "Annual"; pricingPlans: PricingPlan[] }) {
    return (
        <>
            {pricingPlans.map((plan, index) => (
                <motion.div
                    initial="hidden"
                    variants={PricingCardVariants}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.3 }}
                    whileInView="visible"
                    key={index}
                    className="overflow-hidden relative group/card w-full max-w-xs rounded-xl border-gray-300 p-6 text-left dark:border-gray-600 hover:dark:ring-offset-0 dark:ring-white shadow-md border hover:ring-1 dark:hover:ring-0 hover:ring-offset-4 transition-all hover:shadow-xl ring-gray-700 ease-in-out duration-200 shadow-input dark:border-white/[0.2] dark:shadow-white/10"
                >
                    <p className="mb-1 mt-0 text-sm font-bold uppercase">
                        {plan.name}
                    </p>
                    <p className="my-0 mb-6 text-sm">{plan.description}</p>
                    <div className="mb-4 overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={billing}
                                initial={{ rotateX: 90, opacity: 0 }}
                                animate={{ rotateX: 0, opacity: 1 }}
                                transition={{ type: 'spring', stiffness: 100 }}
                                className="my-0 text-3xl font-semibold"
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
                    <button className="w-full border rounded-lg mb-4 px-3 py-2 h-11 bg-black hover:ring-1 hover:ring-offset-2 transition-all ease-in-out duration-150 dark:hover:ring-0 dark:ring-offset-0 dark:bg-white ring-black text-center font-medium text-white dark:text-black hover:scale-105 active:scale-95">
                        Get Started
                    </button>
                    {plan.features.map((feature, index) => (
                        <div key={index} className="mb-3 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5" />
                            </svg>
                            <span className="text-sm">{feature}</span>
                        </div>
                    ))}
                    <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#2b2b2b_1px,transparent_1px),linear-gradient(to_bottom,#2b2b2b_1px,transparent_1px)] dark:group-hover/card:bg-[linear-gradient(to_right,#4f4f4f_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f_1px,transparent_1px)] group-hover/card:bg-[linear-gradient(to_right,#d6d4d4_1px,transparent_1px),linear-gradient(to_bottom,#d6d4d4_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] [mask-image:linear-gradient(to_top,white,transparent,transparent)]"></div>
                </motion.div>
            ))}
        </>
    );
}