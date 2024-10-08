'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import Highlight from 'react-highlight';
import { Scrollbars } from 'react-custom-scrollbars';
import { CopyButton } from './CopyButton';
import './vscode-theme.css'; 


export default function CodeBlock({
  className,
  content,
  codeLang,
  code,
}: {
  code?: string;
  className?: string;
  content?: string;
  codeLang?: string;
}) {
  if(!code)return
  const [isExpanded, setExpanded] = useState(false);
  return (
    <div className={cn('relative rounded-lg bg-black p-5')}>
      <CopyButton value={code} className="absolute top-2 right-4 z-10"></CopyButton>
      {/* Custom scrollbar and dynamic height for expand/collapse */}
      <Scrollbars autoHide className=' relative' style={{ height: isExpanded ? '500px' : '300px' }}>
        <Highlight className={`${codeLang} rounded-none h-full p-0 bg-transparent text-white`}>
          {code}
        </Highlight>

        <button
          onClick={() => setExpanded(!isExpanded)}
          className=" sticky bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-700 hover:bg-gray-600 text-sm text-white py-1 px-4 rounded-md"
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
      </Scrollbars>
    </div>
  );
}
