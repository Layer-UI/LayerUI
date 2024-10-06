'use client';

import { useMemo, useState } from 'react';
import { cn } from '@/lib/utils';
import Highlight from 'react-highlight';
import { Scrollbars } from 'react-custom-scrollbars';

export default function CodeBlock({
  className,
  content: rawContent,
  codeLang: rawLang,
  code,
}: {
  code?:string;
  className?:string;
  content?: string;
  codeLang?: string;
}) {
  const formattedCode = useMemo(() => (rawContent ?? '').trim(), [rawContent]);
  const singleLine = useMemo(() => formattedCode.split('\n').length === 1,[ formattedCode]);
  const [isExpanded, setExpanded] = useState(false);
  const language = useMemo(() => (rawLang ? rawLang.replace('language-', '') : 'plaintext'), [rawLang]);

  if (singleLine) {
    return <pre className="inline-block bg-gray-800 rounded-md px-3 py-1 text-sm text-white">{formattedCode}</pre>;
  }

  return (
    <div className={cn('relative bg-gray-900 text-white')}>
      <button value={formattedCode} className="absolute top-2 right-4 z-10">Copy</button>
      <Scrollbars autoHide style={{ height: isExpanded ? '100%' : '300px' }}>
        <Highlight className={`language-${language}`}>{formattedCode}</Highlight>
        <button onClick={() => setExpanded(!isExpanded)} className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-700 hover:bg-gray-600 text-sm text-white py-1 px-4 rounded-md">
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
      </Scrollbars>
    </div>
  );
}
