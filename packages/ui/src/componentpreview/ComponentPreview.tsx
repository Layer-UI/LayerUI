import React, { useMemo, useState, Suspense } from 'react';
import { CodeDisplay } from './CodeBlock';
import Tabs from './Tabs';
import { cn } from '@/lib/utils';
import { extractFilesAndPackages } from '@/actions/getcomponent';
import { CopyButton } from './CopyButton';
import Fileperview from './Fileperview';
import Loading from '@/components/ui/Loading';

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  filePath: string;
  tag:string;
  componentName?: string;
}

const ComponentPreview = ({
  filePath,
  className,
  tag,
  componentName,
}: ComponentPreviewProps) => {

  // Lazy loading the component with memoization to prevent re-renders
  const LazyLoadedPreview = useMemo(() => {
    try {
      const DynamicComponent = React.lazy(() => import(`../sections/${filePath}.tsx`));
      return <DynamicComponent />;
    } catch (err) {
      console.error(`Error loading component from path: ${filePath}`, err);
      return (
        <div className="text-muted-foreground text-sm">
          Could not find component{' '}
          <CodeDisplay code={`${filePath}`}>

          </CodeDisplay>
          .
        </div>
      );
    }
  }, [filePath]);

  // Memoizing the code for the selected component
  const codeContent = useMemo(() => {
    try {
      const Code = require(`!!raw-loader!../sections/${filePath}.tsx`).default;
      return Code;
    } catch (err) {
      console.error(`Error loading code for component at ${filePath}:`, err);
      return null;
    }
  }, [filePath]);

  const { fileImports, packageImports } = extractFilesAndPackages(codeContent)
  const [activeTab, setActiveTab] = useState('preview');

  return (
    <div className={cn('group relative flex w-full min-w-0 gap-1 flex-col', className)} >
      <div className='my-6 '>
      <h1 className=' font-bold text-4xl capitalize mb-3 '>{componentName}</h1>
      <span className=' border shadow-sm px-2 py-0.5 bg-black/30 text-white dark:text-black dark:bg-white/70 text-center rounded-lg '>{tag}</span>
      </div>
      {/* Preview and Code Tab Navigation */}
      <div className="flex flex-col gap-5">
        <Tabs selected={activeTab} setSelected={setActiveTab} />
      </div>

      {activeTab === 'preview' && (
        <div className="relative rounded-md border dark:border-white/30 shadow-md">
          <div className={cn('preview flex relative min-h-[250px] w-full justify-center overflow-hidden')}>
            <Suspense
              fallback={
                <div className="text-muted-foreground flex items-center text-sm">
                  Loading component <Loading></Loading>
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
          <CodeDisplay codeLang="typescript" code={codeContent} />
        </div>
      )}
      {(fileImports.length > 0 || packageImports !== 'npm install') &&
        <div className='mt-10'>
          <h1 className=' font-bold text-3xl'>Installation</h1>
          {
            packageImports !== 'npm install' &&
            <div className=' mt-5 space-y-3'>
              <h1 className=' font-bold'>Install dependencies</h1>
             
                <CodeDisplay code={packageImports} staticcode={true} codeLang='apache'  >
                </CodeDisplay>
            </div>
          }
          {
            fileImports.length > 0 &&
            <div className=' flex flex-col gap-5 mt-5'>
              <h1 className=' font-bold'>Copy the source code</h1>
              {
                fileImports.map((path, index) => (
                  <Fileperview key={index} filepath={path}></Fileperview>
                ))
              }
            </div>
          }
        </div>
      }
    </div>
  );
};

export default ComponentPreview;
