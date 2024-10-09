"use client";

import TestimonialCard from '@/sections/components/ui/hover-testimonialcard';
import TestimonialHeader from '';
import React from 'react';


const testimonials = [
    {
        name: 'Daniella Doe',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing e quis tempore cupiditate. Sint libero voluptas",
        profession: 'Mobile dev',
        image: '/person/women.jpg',
        stars: 5,
    },
    {
        name: 'Jane doe',
        profession: 'Marketing',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing e quis tempore cupiditate. Sint libero voluptas",
        image: '/person/women.jpg',
        stars: 5,
    },
    {
        name: 'Jane doe',
        profession: 'Marketing',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing e quis tempore cupiditate. Sint libero voluptas",
        image: '/person/women.jpg',
        stars: 5,
    },
    {
        name: 'Jane doe',
        profession: 'Marketing',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing e quis tempore cupiditate. Sint libero voluptas",
        image: '/person/women.jpg',
        stars: 5,
    },
    {
        name: 'Jane doe',
        profession: 'Marketing',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing e quis tempore cupiditate. Sint libero voluptas",
        image: '/person/women.jpg',
        stars: 5,
    },
    {
        name: 'Jane doe',
        profession: 'Marketing',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing e quis tempore cupiditate. Sint libero voluptas",
        image: '/person/women.jpg',
        stars: 5,
    },
    // Add other testimonials as needed
];

const Testimonial = () => (
    <section className='flex flex-col items-center py-10'>
        <TestimonialHeader />
        <div className='max-w-3xl justify-center flex flex-wrap gap-2 lg:gap-7'>
            {testimonials.map((testimonial, index) => (
                <div key={index} className="flex flex-row justify-center">
                    <TestimonialCard {...testimonial} />
                </div>
            ))}
        </div>
    </section>
);

export default Testimonial;
