import type { LucideIcon } from 'lucide-react';

type SplitHeroProps = {
  title: string;
  subtitle: string;
  primaryButtonIcon?: LucideIcon;
  secondaryButtonIcon?: LucideIcon;
};

export default function SplitHero({ title, subtitle, primaryButtonIcon: PrimaryIcon, secondaryButtonIcon: SecondaryIcon }: SplitHeroProps) {
  return (
    <div className="flex p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">  
      <div className="flex-1">
        <h1 className="text-4xl font-bold text-white">{title}</h1>
        <p className="text-lg text-gray-200">{subtitle}</p>
        <button className="icon-button">
          {PrimaryIcon ? <PrimaryIcon className="mr-2" /> : null}Get Started
        </button>
        <button className="icon-button">
          {SecondaryIcon ? <SecondaryIcon className="mr-2" /> : null}Learn More
        </button>
      </div>
      <div className="flex-1 text-right">
        <img src="/images/placeholder1.avif" alt="Illustration" className="rounded-lg" />
      </div>
    </div>
  );
}
