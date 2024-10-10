
const navigation = {
    connect: [
        { name: 'Book Meeting', href: '' },
        { name: 'Twitter', href: 'https://twitter.com/justansub' },
        { name: 'Github', href: 'https://www.youtube.com/@SpeedyBrand-SEO' },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/company/speedy-brand-inc/' },
    ],
    company: [
        { name: 'Blogs', href: '/' },
        { name: 'Pricing', href: '/' },
        { name: 'Affiliate Partner', href: '/' },
        { name: 'AI For Enterprise', href: '/' },
    ],
};

const connects = [
    {
        name: 'Twitter',
        href: 'https://twitter.com/Maheshw65793810',
        icons: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter size-7">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
        ),
    },
    {
        name: 'Linkedin',
        href: 'https://www.linkedin.com/in/maheshwar-reddy-mutupuri-713927258/',
        icons: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin size-7">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
    },
    {
        name: 'GitHub',
        href: 'https://github.com/Maheshwarreddy970',
        icons: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="size-6 lucide lucide-github">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
        ),
    },
    {
        name: 'LeetCode',
        href: 'https://leetcode.com/u/maheshwarreddy7075/',
        icons: (
            <svg stroke="currentColor" fill="none" strokeWidth="1.2" className="size-7" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 13h7.5"></path>
                <path d="M9.424 7.268l4.999 -4.999"></path>
                <path d="M16.633 16.644l-2.402 2.415a3.189 3.189 0 0 1 -4.524 0l-3.77 -3.787a3.223 3.223 0 0 1 0 -4.544l3.77 -3.787a3.189 3.189 0 0 1 4.524 0l2.302 2.313"></path>
            </svg>
        ),
    },
];

const FooterHeader = () => (
    <div className="col-span-full lg:col-span-4 lg:flex justify-start lg:pr-6 lg:py-3 mb-5 lg:mb-0">
        <div className="relative rounded-lg border shadow-xl flex-col flex gap-5 xl:gap-11 items-center px-4 py-5 xl:py-9 bg-black text-white dark:shadow-inner dark:shadow-white">
            <div className='flex gap-3'>
                <img src="/logo.png" alt="logo" className="size-8" />
                <p className='text-2xl font-semibold'>LayerUI</p>
            </div>
            <p className="text-center leading-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, nisi!
            </p>
            <SocialLinks />
        </div>
    </div>
);

const SocialLinks = () => (
    <div className="flex h-12 p-2 gap-5 items-center">
        {connects.map((connect, index) => (
            <a key={index} href={connect.href} className="hover:-translate-y-1 transition-all duration-200 ease-in-out">
                <span>{connect.icons}</span>
            </a>
        ))}
    </div>
);

const FooterNavigation = () => (
    <div className="lg:py-10 col-span-full place-items-center md:place-items-start md:col-span-6 lg:col-span-4 grid grid-cols-2 gap-3">
        <div>
            <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">
                Connect
            </h3>
            <div className="mt-6 space-y-4">
                {navigation.connect.map((item) => (
                    <div key={item.name}>
                        <a
                            href={item.href}
                            className="text-sm leading-6 text-gray-700 hover:text-gray-900 dark:text-gray-300 hover:dark:text-gray-200 group/sublink flex items-center gap-1"
                        >
                            {item.name}
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition-all -rotate-45 group-hover/sublink:rotate-0 duration-200 group-hover/sublink:translate-x-1.5 ease-in-out">
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                ))}
            </div>
        </div>
        <div>
            <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">
                Company
            </h3>
            <div className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                    <div key={item.name}>
                        <a
                            href={item.href}
                            className="text-sm leading-6 text-gray-700 hover:text-gray-900 dark:text-gray-300 hover:dark:text-gray-200 group/sublink flex items-center gap-1"
                        >
                            {item.name}
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition-all -rotate-45 group-hover/sublink:rotate-0 duration-200 group-hover/sublink:translate-x-1.5 ease-in-out">
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const NewsletterSubscription = () => (
    <div className="lg:py-10 col-span-full md:col-span-6 place-items-center md:place-items-start lg:col-span-4 flex flex-col gap-5">
        <p className="text-xl font-bold">Subscribe to our newsletter</p>
        <p className="text-sm text-center">The latest news, articles, and resources, sent to your inbox weekly.</p>
        <input className="bg-black text-white dark:shadow-inner dark:shadow-white border border-gray-300 text-sm rounded-lg h-10 px-4 w-4/6 md:w-full xl:w-72" type="email" placeholder="enter your email" />
        <button className="flex gap-3 items-center text-sm group/subbutton w-36 bg-black text-white dark:shadow-inner dark:shadow-white border py-2 px-5 active:scale-95 transition-all duration-200 rounded-lg hover:shadow-lg">
            Subscribe
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition-all -rotate-45 group-hover/subbutton:rotate-0 duration-200 group-hover/subbutton:translate-x-2 ease-in-out">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
            </svg>
        </button>
    </div>
);

const FooterBottom = () => (
    <div className="mt-10 border-t border-gray-900/10 pt-8 dark:border-gray-100/10">
        <p className="text-xs leading-5 text-gray-700 dark:text-gray-300">
            &copy; 2020 Your Company, Inc. All rights reserved.
        </p>
    </div>
);

const TwoColumnFooter = () => {
    return (
        <footer
            aria-labelledby="footer-heading"
            className="font-inter w-full mt-5"
        >
            <div className="mx-auto px-1 sm:px-5 w-full md:max-w-3xl lg:max-w-5xl">
                <div className="grid grid-cols-12 gap-x-8 gap-y-6">
                    <FooterHeader />
                    <FooterNavigation />
                    <NewsletterSubscription />
                </div>
                <FooterBottom />
            </div>
        </footer>
    )
}

export default TwoColumnFooter;
