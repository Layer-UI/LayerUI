import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import { Sidebar } from "@/components/Sidebar";
import { ScrollArea } from "@/components/ui/scrollarea";
import { sidebarList } from "@/lib/sidebarlist";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className=" mt-20">
        <div className="container flex-1 items-start lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-6 ">
          <aside className="hidden lg:block fixed top-14 z-30 -ml-2 h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky ">
            <ScrollArea className=" h-full py-6 pr-6 lg:py-8">
              <Sidebar items={sidebarList} />
            </ScrollArea>
          </aside>
          {children}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
