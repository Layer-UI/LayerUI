
// Import necessary modules and components
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { EyeClose, EyeOpen, GoogleIcon, TwitterIcon } from '@/components/layerui/auth-icons';
import { AppleIcon } from '@/icons/AppleIcon';
import Input from '@/components/layerui/shadow-input';

// Define the AuthSection component
export default function AuthSection() {
    // State to manage password visibility
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Submitted");
    };

    return (
        // Main container for the auth section
        <section className='relative w-full h-full flex justify-center items-center sm:p-16'>
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#0000_40%,#63e_100%)]"></div>

            {/* Auth form container */}
            <div className='max-w-sm w-full border shadow-md mx-auto rounded-2xl px-6 py-8 shadow-input bg-white dark:bg-black space-y-3'>
                {/* Logo and title */}
                <div className='grid grid-cols-1 justify-items-center mb-4'>
                    <img src='/logo.png' className='h-12 shadow-md mb-4' alt="Logo" />
                    <div className='text-2xl font-bold'>Create an account</div>
                    <p>Enter your details and register</p>
                </div>

                {/* Auth form */}
                <form className="my-4 flex-col gap-2" onSubmit={handleSubmit}>
                    {/* First and last name inputs */}
                    <div className='grid grid-cols-1 md:gap-3 md:grid-cols-2'>
                        <LabelInputContainer>
                            <Label>First name</Label>
                            <Input
                                className="focus-visible:-translate-y-1 transform transition duration-200 focus-visible:shadow-md hover:shadow-md hover:-translate-y-1 dark:shadow-white/50"
                                id="firstname"
                                type="text"
                                placeholder="Maheshwar"
                            />
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <Label>Last name</Label>
                            <Input
                                className="focus-visible:-translate-y-1 transform transition duration-200 focus-visible:shadow-md hover:shadow-md hover:-translate-y-1 dark:shadow-white/50"
                                id="lastname"
                                type="text"
                                placeholder="Reddy"
                            />
                        </LabelInputContainer>
                    </div>

                    {/* Email input */}
                    <LabelInputContainer>
                        <Label>Email Address</Label>
                        <Input
                            className="focus-visible:-translate-y-1 transform transition duration-200 focus-visible:shadow-md hover:shadow-md hover:-translate-y-1 dark:shadow-white/50"
                            id="email"
                            placeholder="maheshawar@layerui.com"
                            type="email"
                        />
                    </LabelInputContainer>

                    {/* Password input with visibility toggle */}
                    <LabelInputContainer className='mb-5'>
                        <Label>Password</Label>
                        <div className='relative rounded-lg focus-visible:-translate-y-1 transform transition duration-200 focus-visible:shadow-md hover:shadow-md hover:-translate-y-1'>
                            <Input
                                className=""
                                id="password"
                                placeholder="••••••••"
                                type={isPasswordVisible ? "text" : "password"}
                            />
                            <button
                                className='absolute inset-y-0 right-0 flex items-center p-4'
                                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                            >
                                {isPasswordVisible ? <EyeOpen /> : <EyeClose />}
                            </button>
                        </div>
                    </LabelInputContainer>

                    {/* Sign up button */}
                    <button
                        type="submit"
                        className="flex items-center justify-center gap-3 group/button py-1.5 w-full text-white dark:text-black bg-black dark:bg-white rounded-lg font-medium hover:-translate-y-1 transform transition duration-200 hover:shadow-lg active:scale-95"
                    >
                        Sign Up
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-arrow-right group-hover/button:translate-x-2 group-hover/button:duration-200 group-hover/button:ease-in-out"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </button>

                    {/* Separator */}
                    <div className="relative bg-gradient-to-r from-transparent dark:via-white via-black to-transparent my-4 h-[1px] w-full">
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-700 dark:bg-neutral-400 px-3 border-white dark:border-black border-4 py-0.5">
                        </div>
                    </div>

                    {/* Social media login buttons */}
                    <div className="flex flex-col gap-2">
                        <button
                            type="submit"
                            className="flex items-center w-full border border-gray-300 rounded-lg px-6 py-1.5 text-sm font-medium dark:hover:shadow-white/40 hover:-translate-y-1 transform transition duration-200 hover:shadow-md active:scale-95"
                        >
                            <GoogleIcon />
                            <span>Continue with Google</span>
                        </button>
                        <button
                            type="submit"
                            className="flex items-center w-full border border-gray-300 rounded-lg px-6 py-1.5 text-sm font-medium dark:hover:shadow-white/40 hover:-translate-y-1 transform transition duration-200 hover:shadow-md active:scale-95"
                        >
                            <TwitterIcon />
                            <span>Continue with Twitter</span>
                        </button>
                        <button
                            type="submit"
                            className="flex items-center w-full border border-gray-300 rounded-lg px-6 py-1.5 text-sm font-medium dark:hover:shadow-white/40 hover:-translate-y-1 transform transition duration-200 hover:shadow-md active:scale-95"
                        >
                            <AppleIcon />
                            <span>Continue with Apple</span>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

// Label component
const Label = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("text-sm font-medium", className)}>
            {children}
        </div>
    );
};

// LabelInputContainer component
const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("mb-2.5 flex flex-col space-y-1 w-full", className)}>
            {children}
        </div>
    );
};