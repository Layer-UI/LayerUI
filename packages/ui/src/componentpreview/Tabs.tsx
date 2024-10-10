import { CodeIcon, AppWindowMac } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnimatedTabsProps {
  tabs?: string[]
  selected: string
  setSelected: (text: string) => void
  center?: boolean
  customID?: string
}

const AnimatedTabs = ({
  selected,
  setSelected,
}: AnimatedTabsProps) => {
  return (
    <div className=' flex mb-3'>
      <div className=' border group rounded-full p-[3px] border-black/25 border-dashed dark:border-white/40'>
        <button
          onClick={() => setSelected("preview")}
          className={
            cn('relative  px-4 py-2 text-sm font-medium transition-all ease-in-out rounded-full duration-200',selected == 'preview' ? ' border shadow-lg dark:shadow-inner dark:shadow-white ' : '')
          }
        >
          <div className="flex items-center gap-2">
            <AppWindowMac></AppWindowMac>
            <span
              className={`relative z-10 capitalize `}
            >
              Preview
            </span>
          </div>
        </button>
        <button
          onClick={() => setSelected("code")}
          className={
            cn('relative  px-4 py-2 font-medium transition-all ease-in-out  duration-200 rounded-full',selected == 'code' ? ' border shadow-lg dark:shadow-inner dark:shadow-white ' : ' ')
          }
        >
          <div className="flex items-center gap-2">
            <CodeIcon></CodeIcon>
            <span
              className={`relative z-10 capitalize `}
            >
              Code
            </span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default AnimatedTabs
