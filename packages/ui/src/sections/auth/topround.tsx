
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AppleIcon, EyeClose, EyeOpen, GoogleIcon, TwitterIcon } from '@/components/ui/auth-icons';
import { Avatars } from '@/components/ui/avatars';
import Input from '@/components/ui/shadow-input';

interface SignupFormProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const AuthSection: React.FC = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Submitted");
    };

    return (
        <section className='relative w-full h-full grid grid-cols-1 md:grid-cols-2 bg-black dark:bg-white px-5 sm:px-20 pt-10 overflow-hidden'>
            <div className="absolute h-full w-full bg-[radial-gradient(#a0a1a4_1px,transparent_1px)] dark:bg-[radial-gradient(#2D2E2F_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            <div className='md:order-first z-10 order-last relative max-w-sm overflow-hidden w-full mx-auto rounded-b-none rounded-2xl shadow-lg shadow-white/60 py-6 md:py-12 px-8 bg-white dark:bg-black space-y-3'>
                <SignupForm handleSubmit={handleSubmit} />
            </div>
            <motion.div
                initial={{ x: "120%", opacity: 0 }}
                viewport={{ once: true }}
                animate={{ x: 0, opacity: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className='w-full flex flex-col z-10 pt-5 items-center md:items-start md:pt-20 pb-16 md:pb-0 md:pl-20 dark:text-black text-white'>
                <img src='/logo.png' className='size-16 shadow-md mb-4' alt="Logo" />
                <div className='text-3xl font-bold mb-3 text-center md:text-start'>
                    Start your journey by creating an account
                </div>
                <p className='text-base mb-5 text-center md:text-start'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ad libero numquam aliquam molestias quam tempora nemo.
                </p>
                <div className='flex pl-9 sm:pl-0 gap-5 items-center'>
                    <Avatars />
                    <p className='text-sm opacity-85 text-wrap'>
                        Trusted by over <span className='opacity-100 font-semibold'>100K</span> Customers
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

const SignupForm: React.FC<SignupFormProps> = ({ handleSubmit }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    return (
        <form className="my-4 flex-col gap-2" onSubmit={handleSubmit}>
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
            <LabelInputContainer>
                <Label>Email Address</Label>
                <Input
                    className="focus-visible:-translate-y-1 transform transition duration-200 focus-visible:shadow-md hover:shadow-md hover:-translate-y-1 dark:shadow-white/50"
                    id="email"
                    type="email"
                    placeholder="maheshwar@layerui.com"
                />
            </LabelInputContainer>
            <LabelInputContainer className='mb-5'>
                <Label>Password</Label>
                <div className='relative rounded-lg focus-visible:-translate-y-1 transform transition duration-200 focus-visible:shadow-md dark:shadow-white/50 shadow-sm hover:shadow-md hover:-translate-y-1'>
                    <Input
                        className=""
                        id="password"
                        type={isPasswordVisible ? "text" : "password"}
                        placeholder="••••••••"
                    />
                    <button
                        type="button"
                        className='absolute inset-y-0 right-0 flex items-center p-4'
                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    >
                        {isPasswordVisible ? <EyeOpen /> : <EyeClose />}
                    </button>
                </div>
            </LabelInputContainer>
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right group-hover/button:translate-x-2 group-hover/button:duration-200 group-hover/button:ease-in-out"
                >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                </svg>
            </button>
            <div className="relative bg-gradient-to-r from-transparent dark:via-white via-black to-transparent my-4 h-[1px] w-full">
                <div className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-700 dark:bg-neutral-400 px-3 border-white dark:border-black border-4 py-0.5'></div>
            </div>
            <div className="flex flex-col gap-2">
                <button
                    type="button"
                    className="flex items-center w-full border border-gray-300 rounded-lg px-6 py-[7px] text-sm font-medium dark:hover:shadow-white/40 hover:-translate-y-1 transform transition duration-200 hover:shadow-md active:scale-95"
                >
                    <GoogleIcon />
                    <span>Continue with Google</span>
                </button>
                <button
                    type="button"
                    className="flex items-center w-full border border-gray-300 rounded-lg px-6 py-[7px] text-sm font-medium dark:hover:shadow-white/40 hover:-translate-y-1 transform transition duration-200 hover:shadow-md active:scale-95"
                >
                    <TwitterIcon />
                    <span>Continue with Twitter</span>
                </button>
                <button
                    type="button"
                    className="flex items-center w-full border border-gray-300 rounded-lg px-6 py-[7px] text-sm font-medium dark:hover:shadow-white/40 hover:-translate-y-1 transform transition duration-200 hover:shadow-md active:scale-95"
                >
                    <AppleIcon />
                    <span>Continue with Apple</span>
                </button>
            </div>
        </form>
    );
};

const Label: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    return (
        <div className={cn("text-sm font-medium", className)}>
            {children}
        </div>
    );
};

const LabelInputContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    return (
        <div className={cn("mb-2.5 flex flex-col space-y-1 w-full", className)}>
            {children}
        </div>
    );
};

export default AuthSection;
