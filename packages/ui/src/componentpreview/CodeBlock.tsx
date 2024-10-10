'use client';

import { useState } from 'react';
import Highlight from 'react-highlight';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { CopyButton } from './CopyButton';
import './vscode-theme.css';

export default function CodeBlock({
  codeLang,
  code,
}: {
  code?: string;
  codeLang?: string;
}) {
  if (!code) return null;

  const [isExpanded, setExpanded] = useState(false);

  return (
    <div className="relative">
      <CopyButton value={code} className="absolute top-4 right-4 z-10"></CopyButton>
      <ScrollArea.Root className="relative bg-black rounded-lg" style={{ height: isExpanded ? '600px' : '400px' ,width:'100%'}}>
        <ScrollArea.Viewport className="w-full h-full p-5"> {/* Add padding here */}
          <Highlight className={`${codeLang} rounded-none h-full bg-transparent text-white`}>
            {code}
          </Highlight>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="vertical" className="bg-gray-700">
          <ScrollArea.Thumb className="bg-gray-500" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner />
      </ScrollArea.Root>

      <button
        onClick={() => setExpanded(!isExpanded)}
        className=" absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-700 hover:bg-gray-600 text-sm text-white py-1 px-4 rounded-md"
      >
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
    </div>
  );
}
