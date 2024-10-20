"use client"

import { sidebarList } from '@/lib/sidebarlist';
import { useParams } from 'next/navigation';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { RiExternalLinkLine } from 'react-icons/ri';


export default function Page() {
    const params = useParams<{ templates: string }>();
    const template = getTemplate(params.templates);
    console.log(template);

    return (
        <section className=' my-11 flex flex-col gap-5'>
            <h1 className=' text-4xl font-bold '>{template?.title || "Template Not Found"}</h1>
            {template?.source && (
                <div className='block shadow-md border rounded-2xl overflow-hidden h-full'>
                    <video
                        src={template.source}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className=" h-full  w-full object-cover object-top"
                    />
                </div>
            )}
            <div className=' flex gap-2 md:gap-6 '>
                <a href={template?.livelink} className=' bg-black md:text-lg  flex gap-1.5 md:gap-3 text-base items-center rounded-xl shadow-md px-6 py-2 border text-white hover:-translate-y-1 ease-in-out duration-200 transition-all hover:shadow-2xl'>Live Preview
                <RiExternalLinkLine className=' size-5' />
                </a>
                <a href={template?.code} className=' bg-black md:text-lg  flex gap-1.5 md:gap-3 items-center text-base rounded-xl shadow-md px-6 py-2 border text-white hover:-translate-y-1 ease-in-out duration-200 transition-all hover:shadow-2xl '>Source Code
                <FaGithub  className=' size-5'/>
                </a>
            </div>
        </section>
    );
}

const getTemplate = (templateName: string) => {
    return sidebarList
        .find((list) => list.title === "Templates")
        ?.items.find((item) =>
            item.title.replace(/\s+/g, "").toLowerCase() ===
            templateName.replace(/\s+/g, "").toLowerCase()
        );
};
