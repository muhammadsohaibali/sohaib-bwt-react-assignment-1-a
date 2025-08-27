import { Megaphone, Scale, Workflow, DollarSign, Layout, Cog } from 'lucide-react';

const Features = () => {
  const featuresArray = [
    {
      title: 'Marketing',
      description:
        'Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.',
      icon: <Megaphone color="#ffffff" />,
    },
    {
      title: 'Legal',
      description: 'Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.',
      icon: <Scale color="#ffffff" />,
    },
    {
      title: 'Business Automation',
      description: 'Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.',
      icon: <Workflow color="#ffffff" />,
    },
    {
      title: 'Finance',
      description: 'Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.',
      icon: <DollarSign color="#ffffff" />,
    },
    {
      title: 'Enterprise Design',
      description: 'Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.',
      icon: <Layout color="#ffffff" />,
    },
    {
      title: 'Operations',
      description:
        "Keep your company's lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.",
      icon: <Cog color="#ffffff" />,
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="mb-8 max-w-screen-md lg:mb-16">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Designed for business teams like yours</h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
          </p>
        </div>

        <div className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
          {featuresArray.map((feature) => {
            return (
              <div>
                <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center rounded-full lg:h-12 lg:w-12">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">{feature.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
