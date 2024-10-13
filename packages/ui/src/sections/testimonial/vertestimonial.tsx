import TestimonialCard from '@/components/ui/vertical-testimonialcard';
import TestimonialHeader from '@/components/ui/vertical-testimonialheader';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: 'Daniella Doe',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto",
        profession: 'Mobile dev',
        image: '/person/women.jpg',
        stars: 5,
    },
    {
        name: 'Jane doe',
        profession: 'Marketing',
        description: "Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
        image: '/person/women.jpg',
        stars: 5,
    },
    {
        name: 'Yanick Doe',
        profession: 'Software Engineer',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing e quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
        image: '/person/women.jpg',
        stars: 4,
    },
    {
        name: 'Andy Doe',
        profession: 'Frontend Developer',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
        image: '/person/women.jpg',
        stars: 5,
    },
    {
        name: 'Saud',
        profession: 'Game Developer',
        description: "SyntaxUI is a great tool for building user interfaces. It's easy to use and has a lot of features. I've been using it for a while now and I'm really happy with the results.",
        image: '/person/women.jpg',
        stars: 4,
    },
    {
        name: 'Yanndy Doe',
        profession: 'Mobile dev',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
        image: '/person/women.jpg',
        stars: 5,
    },
];

const length = testimonials.length;
const partSize = Math.ceil(length / 3);

const firstPart = testimonials.slice(0, partSize);
const secondPart = testimonials.slice(partSize, 2 * partSize);
const thirdPart = testimonials.slice(2 * partSize);

const Testimonials = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-5 py-12">
            <TestimonialHeader />
            <div className="relative -mx-4 mt-16 grid h-[49rem] max-w-4xl grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#212121_1px,transparent_1px),linear-gradient(to_bottom,#212121_1px,transparent_1px)] bg-[size:6rem_4rem]"
                style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 95%)' }}
            >
                <div className='flex-col'>
                    {Array(4).fill(0).map((_, index) => (
                        <motion.div
                            key={index}
                            initial={{ translateY: 0 }}
                            animate={{ translateY: 'calc(-100% - 3rem)' }}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                            className="flex my-6 shrink-0 flex-col justify-around gap-6"
                        >
                            {firstPart.map((testimonial, i) => (
                                <div key={i} className="flex flex-col justify-center">
                                    <TestimonialCard key={testimonial.name} {...testimonial} />
                                </div>
                            ))}
                        </motion.div>
                    ))}
                </div>
                <div>
                    {Array(4).fill(0).map((_, index) => (
                        <motion.div
                            key={index}
                            initial={{ translateY: 0 }}
                            animate={{ translateY: 'calc(-100% - 3rem)' }}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                            className="flex my-6 shrink-0 flex-col justify-around gap-6"
                        >
                            {secondPart.map((testimonial, i) => (
                                <div key={i} className="flex flex-col justify-center gap-4">
                                    <TestimonialCard key={testimonial.name} {...testimonial} />
                                </div>
                            ))}
                        </motion.div>
                    ))}
                </div>
                <div>
                    {Array(4).fill(0).map((_, index) => (
                        <motion.div
                            key={index}
                            initial={{ translateY: 0 }}
                            animate={{ translateY: 'calc(-100% - 3rem)' }}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                            className="flex my-6 shrink-0 flex-col justify-around gap-6"
                        >
                            {thirdPart.map((testimonial, i) => (
                                <div key={i} className="flex flex-col justify-center gap-4">
                                    <TestimonialCard key={testimonial.name} {...testimonial} />
                                </div>
                            ))}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default Testimonials;
