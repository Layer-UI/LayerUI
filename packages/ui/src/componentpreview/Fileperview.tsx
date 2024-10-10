import React, { useMemo } from 'react'
import CodeBlock from './CodeBlock';

export default function Fileperview({ filepath }: { filepath: string }) {
    const codeContent = useMemo(() => {
        try {
            const Code = require(`!!raw-loader!../components/ui/${filepath}.tsx`).default;
            return Code;
        } catch (err) {
            console.error(`Error loading code for component at ${filepath}:`, err);
            return null;
        }
    }, [filepath]);
    return (
        <div className=' flex flex-col gap-2'>
            <div>
                <code className=" rounded bg-muted px-1.5 bg-slate-200 border py-[0.3rem] text-sm">{`components/ui/${filepath}`}</code>
            </div>
            <CodeBlock code={codeContent} codeLang='typescript'></CodeBlock>
        </div>
    )
}
