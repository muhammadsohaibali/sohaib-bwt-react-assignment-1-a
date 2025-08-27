import { Megaphone, Scale, Workflow, DollarSign, Layout, Cog } from 'lucide-react';

export const featuresArray = [
  {
    title: 'Marketing',
    description:
      'Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.',
    icon: <Megaphone className="text-primary-600 dark:text-primary-300 h-5 w-5 lg:h-6 lg:w-6" />,
  },
  {
    title: 'Legal',
    description: 'Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.',
    icon: <Scale className="text-primary-600 dark:text-primary-300 h-5 w-5 lg:h-6 lg:w-6" />,
  },
  {
    title: 'Business Automation',
    description: 'Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.',
    icon: <Workflow className="text-primary-600 dark:text-primary-300 h-5 w-5 lg:h-6 lg:w-6" />,
  },
  {
    title: 'Finance',
    description: 'Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.',
    icon: <DollarSign className="text-primary-600 dark:text-primary-300 h-5 w-5 lg:h-6 lg:w-6" />,
  },
  {
    title: 'Enterprise Design',
    description: 'Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.',
    icon: <Layout className="text-primary-600 dark:text-primary-300 h-5 w-5 lg:h-6 lg:w-6" />,
  },
  {
    title: 'Operations',
    description: "Keep your company's lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.",
    icon: <Cog className="text-primary-600 dark:text-primary-300 h-5 w-5 lg:h-6 lg:w-6" />,
  },
];
