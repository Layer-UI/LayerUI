"use client"

import DocsCode from '@repo/ui/docscode'
import React from 'react'

const utilfile = `import {ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";
import DocsCode from '../../../../../../packages/ui/src/componentpreview/DocsCode';


export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}`

export default function page() {

    return (
        <section className=' py-10 lg:py-14 '>
            <div className=' font-bold text-xl'>
                Add Utilities
            </div>
            <p className='my-1'>Commonly used utilities for using Layer UI</p>
            <div className="  overflow-hidden  pt-4 pb-16 mx-auto w-full">
                <div className="w-full">
                    <div className="lg:py-6 py-0 pr-0 lg:pr-16">
                        <DocsCode code='npm install tailwindcss@latest clsx tailwind-merge framer-motion'>
                            <p className='mb-2 text-lg font-bold'>Install dependencies</p>
                        </DocsCode>
                        <DocsCode code={utilfile}>
                            <p className="mb-2 text-lg font-bold">Add util file</p>
                            <p className=' my-2 text-base text-gray-700 dark:text-gray-300'>Copy and paste the following code into your project lib/utils.ts.</p>
                        </DocsCode>
                        <DocsCode>
                            <p className="mb-2 text-lg font-bold">Copy & Paste</p>
                            <p className="text-gray-700 dark:text-gray-300">
                                Absolutely! Now you can visit any component page and follow the provided instructions. Simply copy and paste the components you need, without any unnecessary bloat or third-party dependencies.
                            </p>
                        </DocsCode>
                        <DocsCode>
                            <p className="mb-2 text-lg font-bold">Success</p>
                        </DocsCode>
                    </div>
                </div>
            </div>
        </section>
    )
}
