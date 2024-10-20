import { useState } from 'react';
import Highlight from 'react-highlight';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { CopyButton } from './CopyButton';
import './theme.css';
import { cn } from '@/lib/utils';

export function CodeDisplay({
  codeLang = 'typescript',
  code,
  staticcode = false
}: {
  staticcode?: boolean;
  code?: string;
  codeLang?: string;
}) {
  if (!code) return null;

  const [isExpanded, setExpanded] = useState(false);

  return (
    <>
      {staticcode ? (
        <div
          className={cn(
            'relative w-full p-3 flex justify-between overflow-hidden items-center bg-black border shadow-md dark:border-white/40 rounded-xl',
          )}
        >
          <CopyButton value={code} className="z-10 border-none" />
          {/* Highlight.js to display code with proper syntax highlighting */}
          <Highlight className={codeLang}>
            {code} {/* Render code here for proper formatting */}
          </Highlight>
        </div>
      ) : (
        <div className="relative">
          <CopyButton value={code} className="absolute top-4 right-4 z-10" />
          <ScrollArea.Root
            className="relative bg-black rounded-lg border shadow-md dark:border-white/40"
            style={{ height: isExpanded ? '600px' : '400px', width: '100%' }}
          >
            <ScrollArea.Viewport className="w-full h-full p-5">
              {/* Highlight.js with scrollable view */}
              <Highlight className={`${codeLang} rounded-none h-full bg-transparent bg-black text-white`} >
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
            className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-700 hover:bg-gray-600 text-sm text-white py-1 px-4 rounded-md"
          >
            {isExpanded ? 'Collapse' : 'Expand'}
          </button>
        </div>
      )}
    </>
  );
}
