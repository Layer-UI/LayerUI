import React from 'react'

export default function Loading() {
    return (
        <div className="flex flex-row gap-2">
            <div className=" size-2.5 rounded-full bg-black animate-bounce [animation-delay:.7s]"></div>
            <div className=" size-2.5 rounded-full bg-black animate-bounce [animation-delay:.3s]"></div>
            <div className=" size-2.5 rounded-full bg-black animate-bounce [animation-delay:.7s]"></div>
        </div>
    )
}
