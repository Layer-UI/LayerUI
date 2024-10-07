

import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { SlSocialGoogle } from "react-icons/sl";
import { RiTwitterXLine } from "react-icons/ri";
import { PiEyeClosedBold } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";
import Input from "@/components/layerui/borderglow-Input";
import { Avatars } from "@/components/layerui/avatars";

// Component for the authentication section
export default function AuthSection() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    // Handler for form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Submitted");
    };

    return (
        <section className="w-full h-full grid grid-cols-1 sm:grid-cols-2 overflow-hidden">
            <LeftPanel
                isPasswordVisible={isPasswordVisible}
                setIsPasswordVisible={setIsPasswordVisible}
                handleSubmit={handleSubmit}
            />
            <RightPanel />
        </section>
    );
}

// Left panel containing the form
interface LeftPanelProps {
    isPasswordVisible: boolean;
    setIsPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const LeftPanel: React.FC<LeftPanelProps> = ({ isPasswordVisible, setIsPasswordVisible, handleSubmit }) => (
    <div className="shadow-2xl dark:shadow-white/50 bg-white dark:bg-black px-9">
        <div className="relative max-w-sm mt-16 overflow-hidden w-full mx-auto rounded-b-none rounded-2xl space-y-3">
            <form className="my-6 flex-col gap-2" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    <LabelInputContainer>
                        <Label>First name</Label>
                        <Input id="firstname" type="text" placeholder="Maheshwar" />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label>Last name</Label>
                        <Input id="lastname" type="text" placeholder="Reddy" />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer>
                    <Label>Email Address</Label>
                    <Input id="email" placeholder="maheshwar@layerui.com" type="email" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-5">
                    <Label>Password</Label>
                    <div className="relative">
                        <Input
                            id="password"
                            placeholder="••••••••"
                            type={isPasswordVisible ? "text" : "password"}
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-0 flex items-center p-4"
                            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                        >
                            {isPasswordVisible ? <FaRegEye /> : <PiEyeClosedBold />}
                        </button>
                    </div>
                </LabelInputContainer>
                <SubmitButton />
                <Divider />
                <OAuthButtons />
            </form>
        </div>
    </div>
);

// Right panel containing additional information
const RightPanel: React.FC = () => (
    <div className="group/bg relative w-full flex flex-col p-10 lg:p-20 border-l shadow-inner dark:shadow-white/30">
        <BackgroundPattern />
        <img src="/logo.png" className="size-12 shadow-md mb-4" alt="Logo" />
        <div className="text-3xl font-bold mb-3">
            Start your journey by creating an account
        </div>
        <p className="text-base mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ad
            libero numquam aliquam molestias quam tempora nemo
        </p>
        <div className="flex gap-5 items-center">
            <Avatars />
            <p className="text-sm opacity-85 text-wrap">
                Trusted by over <span className="opacity-100 font-semibold">100K</span>{" "}
                Customers
            </p>
        </div>
    </div>
);

// Reusable label component
const Label: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    return <div className={cn("text-sm font-medium", className)}>{children}</div>;
};

// Container for label and input components
const LabelInputContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    return <div className={cn("mb-2.5 flex flex-col space-y-2 w-full", className)}>{children}</div>;
};


// Component for submit button
const SubmitButton: React.FC = () => (
    <button
        type="submit"
        className="hover:border-[#22d3ee] hover:text-[#22d3ee] border border-gray-300 hover:shadow-[#22d3ee] dark:hover:text-[#22d3ee] flex items-center justify-center gap-3 group/button py-2 w-full text-white dark:text-black bg-black dark:bg-white rounded-lg shadow-sm font-medium hover:-translate-y-1 transform transition duration-200 active:scale-95"
    >
        Sign Up
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right group-hover/button:translate-x-2 group-hover/button:duration-200 group-hover/button:ease-in-out"
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    </button>
);

// Component for divider with styling
const Divider: React.FC = () => (
    <div className="relative bg-gradient-to-r from-transparent dark:via-white via-black to-transparent my-4 h-[1px] w-full">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-700 dark:bg-neutral-400 px-3 border-white dark:border-black border-4 py-0.5"></div>
    </div>
);

// Component for OAuth buttons
const OAuthButtons: React.FC = () => (
    <div className="flex flex-col gap-4">
        <OAuthButton icon={<SlSocialGoogle className="size-5" />} text="Continue with Google" />
        <OAuthButton icon={<RiTwitterXLine className="size-5" />} text="Continue with Twitter" />
    </div>
);

// Reusable OAuth button component
interface OAuthButtonProps {
    icon: React.ReactNode;
    text: string;
}

const OAuthButton: React.FC<OAuthButtonProps> = ({ icon, text }) => (
    <button
        type="submit"
        className="flex hover:border-[#22d3ee] hover:text-[#22d3ee] items-center w-full border gap-3 border-gray-300 rounded-lg px-6 py-2.5 text-sm font-normal shadow-sm hover:shadow-[#22d3ee] hover:-translate-y-1 transform transition duration-200 active:scale-95"
    >
        {icon}
        <span>{text}</span>
    </button>
);

// Background pattern for the right panel
const BackgroundPattern: React.FC = () => (
    <div className="absolute inset-0 -z-10 h-full w-full -mt-[1px] bg-white dark:bg-black bg-[linear-gradient(to_right,#d8d8d8_1px,transparent_1px),linear-gradient(to_bottom,#d8d8d8_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#303030_1px,transparent_1px),linear-gradient(to_bottom,#303030_1px,transparent_1px)] bg-[size:6rem_6rem]">
        <div className="transition-all ease-in-out group-hover/bg:opacity-75 group-hover/bg:dark:opacity-40 absolute bottom-0 left-0 top-0 right-0 opacity-65 dark:opacity-30 bg-[radial-gradient(circle_700px_at_100%_500px,#bae6fd,transparent)]"></div>
    </div>
);

