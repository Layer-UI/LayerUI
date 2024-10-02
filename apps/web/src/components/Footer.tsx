import Image from 'next/image'
import logo from "@/public/logo.png"

const navigation = {
  connect: [
    { name: 'Book Meeting', href: 'https://cal.com/maheshwar-reddy-20' },
    {
      name: 'Twitter',
      href: 'https://x.com/Maheshw65793810',
    },
    {
      name: 'Github',
      href: 'https://github.com/Maheshwarreddy970',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/maheshwar-reddy-mutupuri-713927258/',
    },
  ],
  company: [
    { name: 'Sections', href: '/introduction' },
  ],
}

const TwoColumnFooter = () => {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="font-inter mt-14 pt-12 border-t flex flex-col items-center  w-full"
    >
      <div className="mx-auto w-full  max-w-5xl px-10">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className=" flex lg:block sm:flex-row flex-col justify-between space-y-8">
            <div className='flex items-end gap-2 '>
              <Image src={logo} alt='logo' className=' size-9 '></Image>
              <span className='tracking-tight	 text-xl font-bold'>Layer<span className='text-2xl'>UI</span></span>
            </div>
          </div>
          {/* Navigations */}
          <div className="mt-16 grid grid-cols-2 gap-14 md:grid-cols-2 lg:mt-0 xl:col-span-2">
            <div className="md:mt-0">
              <h3 className="text-sm font-semibold leading-6 text-gray-900  dark:text-gray-200">
                Connect
              </h3>
              <div className="mt-6 space-y-4">
                {navigation.connect.map((item: {
                  name: string;
                  href: string;
                }) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm leading-6 text-gray-700 hover:text-gray-900 dark:text-gray-600 hover:dark:text-gray-200"
                    >
                      {item.name}
                    </a>

                  </div>
                ))}
              </div>
            </div>
            <div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">
                  Pages
                </h3>
                <div className="mt-6 space-y-4">
                  {navigation.company.map((item: {
                    name: string;
                    href: string;
                  }) => (
                    <div key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-700 hover:text-gray-900 dark:text-gray-600 hover:dark:text-gray-200"
                      >
                        {item.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default TwoColumnFooter