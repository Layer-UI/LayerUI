'use client';

import React, { useMemo, useState, Suspense } from 'react';
import CodeDisplay from '@/components/uicomponentslayout/Code';
import { RawCodeSnippet } from '@/components/uicomponentslayout/Code';
import { Icons } from '@/icons/Icons';
import Tabs from '@/components/ui/AnimatedTabs';
import { cn } from '@/lib/utils';

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  filePath: string;
  componentName?: string;
}

const ComponentPreview = ({
  filePath,
  className,
  componentName,
  ...otherProps
}: ComponentPreviewProps) => {
  // Lazy loading the component with memoization to prevent re-renders
  const LazyLoadedPreview = useMemo(() => {

    try {
      const DynamicComponent = React.lazy(() => import(`../../section/${filePath}.tsx`));
      return <DynamicComponent />;
    } catch (err) {
      console.error(`Error loading component from path: ${filePath}`, err);
      return (
        <div className="text-muted-foreground text-sm">
          Could not find component{' '}
          <RawCodeSnippet className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {filePath}
          </RawCodeSnippet>
          .
        </div>
      );
    }
  }, [filePath]);

  // Memoizing the code for the selected component
  const codeContent = useMemo(() => {
    try {
      const rawCode = require(`!!raw-loader!../../section/${filePath}.tsx`).default;
      const cleanedCode = rawCode.replace(/'use client'\n/, ''); // Stripping 'use client' directive
      return cleanedCode;
    } catch (err) {
      console.error(`Error loading code for component at ${filePath}:`, err);
      return null;
    }
  }, [filePath]);

  const [activeTab, setActiveTab] = useState('preview');

  return (
    <div className={cn('group relative flex w-full min-w-0 gap-1 flex-col', className)} {...otherProps}>
      {/* Preview and Code Tab Navigation */}
      <div className="flex flex-col gap-5">
        <Tabs selected={activeTab} setSelected={setActiveTab} />
      </div>

      {activeTab === 'preview' && (
        <div className="relative rounded-md border">
          <div className={cn('preview flex relative min-h-[250px] w-full justify-center overflow-hidden')}>
            <Suspense
              fallback={
                <div className="text-muted-foreground flex items-center text-sm">
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  Loading component...
                </div>
              }
            >
              {LazyLoadedPreview}
            </Suspense>
          </div>
        </div>
      )}

      {activeTab === 'code' && codeContent && (
        <div className="relative w-full">
          <CodeDisplay language="typescript" code={codeContent} />
        </div>
      )}
    </div>
  );
};

export default ComponentPreview;
