import { FC } from 'react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
    name: string;
    description: string;
    image: string;
    profession: string;
    stars: number;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
    name,
    description,
    image,
    profession,
    stars
}) => {
    return (
        <div className="card-shadow shadow-lg bg-white dark:bg-black dark:shadow-inner dark:shadow-white/30 dark:border-neutral-90 relative flex h-auto max-w-[22rem] select-none flex-col items-start justify-center overflow-hidden rounded-2xl border p-5 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:-translate-y-1">
            <div className='flex -translate-x-1 mb-0 justify-start items-center'>
                {Array(5).fill(0).map((_, index) => (
                    <svg key={index} className={cn("w-4 h-4 ms-1", index + 1 <= stars ? "text-yellow-300" : "text-gray-300 dark:text-gray-500")} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                ))}
            </div>
            <p className="mt-3 text-left text-sm font-light text-gray-600 md:text-base dark:text-gray-400">
                {description}
            </p>
            <div className="mb-0 mt-3 flex h-fit flex-row items-center gap-3">
                <img className="block h-11 w-11 rounded-full object-cover" src={image} alt={name} width={120} height={80} />
                <div className="mb-0 flex h-fit flex-col items-start">
                    <h3 className="m-0 text-base font-medium text-gray-900 dark:text-gray-100">
                        {name}
                    </h3>
                    <p className="font-regular m-0 text-center text-sm text-gray-600 dark:text-gray-400">
                        {profession}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
