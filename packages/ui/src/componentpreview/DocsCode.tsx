import React from 'react'
import { CopyButton } from './CopyButton'
import { cn } from '@/lib/utils'
import Highlight from 'react-highlight'
import './theme.css';
import { CodeDisplay } from './CodeBlock';


export default function DocsCode({ code, children }: { code?: string, children?: React.ReactNode }) {
    return (
        <div className="flex">
            <div className="flex flex-col items-center mr-4">
                <div>
                    <div className="flex items-center shadow-md justify-center w-7 h-7 border rounded-full">
                        <svg
                            className="w-3.5 text-gray-600 -rotate-90"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <line
                                fill="none"
                                strokeMiterlimit="10"
                                x1="12"
                                y1="2"
                                x2="12"
                                y2="22"
                            />
                            <polyline
                                fill="none"
                                strokeMiterlimit="10"
                                points="19,15 12,22 5,15"
                            />
                        </svg>
                    </div>
                </div>
                <div className="w-px h-full border shadow-md bg-gray-300" />
            </div>
            <div className=" pb-8 w-full">
                {children}
                {code &&
                    <CodeDisplay code={code} staticcode={true} codeLang='apache'></CodeDisplay>
                }
            </div>
        </div>
    )
}
