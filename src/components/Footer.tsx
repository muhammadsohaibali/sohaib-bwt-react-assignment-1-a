import { Dribbble, Facebook, Github, Twitter } from 'lucide-react';

const Footer = () => {
  const footerData = {
    brand: {
      name: 'Flowbite',
      logo: 'https://flowbite.com/docs/images/logo.svg',
      href: 'https://flowbite.com/',
    },
    sections: [
      {
        title: 'Resources',
        links: [
          { label: 'Flowbite', href: 'https://flowbite.com/' },
          { label: 'Tailwind CSS', href: 'https://tailwindcss.com/' },
        ],
      },
      {
        title: 'Follow us',
        links: [
          { label: 'Github', href: 'https://github.com/themesberg/flowbite' },
          { label: 'Discord', href: 'https://discord.gg/4eeurUVvTy' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy Policy', href: '#' },
          { label: 'Terms & Conditions', href: '#' },
        ],
      },
    ],
    socials: [
      { label: 'Facebook', href: '#', icon: <Facebook /> },
      { label: 'Twitter', href: '#', icon: <Twitter /> },
      { label: 'GitHub', href: '#', icon: <Github /> },
      { label: 'Dribbble', href: '#', icon: <Dribbble /> },
    ],
    copyright: {
      year: 2023,
      owner: 'Flowbite™',
    },
  };

  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href={footerData.brand.href} className="flex items-center">
              <img src={footerData.brand.logo}/> 
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">{footerData.brand.name}</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            {footerData.sections.map((section, idx) => (
              <div key={idx}>
                <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">{section.title}</h2>
                <ul className="font-medium text-gray-500 dark:text-gray-400">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="mb-4 last:mb-0">
                      <a href={link.href} className="hover:underline">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            {`${footerData.copyright.year} ${footerData.copyright.owner} `} All Rights Reserved.
          </span>

          <div className="mt-4 flex sm:mt-0 sm:justify-center">
            {footerData.socials.map((social, idx) => (
              <a key={idx} href={social.href} className="ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white first:ms-0">
                <span className="sr-only">{social.label}</span>
                <span>{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
  
export default Footer;
